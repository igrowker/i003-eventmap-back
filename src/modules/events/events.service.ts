import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { CreateEventDto } from 'src/modules/events/dto/create-event.dto';
import { UpdateEventDto } from 'src/modules/events/dto/update-event.dto';
import { filterEventsRadius, uploadFilesToCloudinary } from 'src/utils/utils';
import { QueryEvents } from 'src/utils/types';
import { events, generateRandomCoordinates } from './events';
import cloudinary from 'src/config/cloudinary.config';
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class EventsService {

  constructor(private prisma: PrismaService) { }

  // async crearEventos() {
  //   for (let index = 0; index < events.length; index++) {
  //     const element = events[index];

  //     await this.prisma.event.create({
  //       data: {
  //         userId: element.userId,
  //         name: element.name,
  //         type: element.type,
  //         date: element.date,
  //         time: element.time,
  //         location: generateRandomCoordinates((-34.605500), (-58.384500), 5),
  //         photos: element.photos,
  //         description: element.description,
  //         amount: element.amount,
  //         createdAt: element.createdAt
  //       }
  //     });
  //   }
  //   return true
  // }

  async getEventsWhitoutFilter() {
    try {
      return await this.prisma.event.findMany();
    } catch (error) {
      throw new HttpException('Error al crear el evento', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getEvents(query: QueryEvents) {
    try {
      const events = await this.prisma.event.findMany();
      // const arrayEventsRequested = filterEventsUserRequest(events,query);

      // const arrayEventsRadius = filterEventsRadius(arrayEventsRequested, query.lat, query.lon);
      const arrayEventsRadius = filterEventsRadius(events, query.lat, query.lon);

      return arrayEventsRadius;
    } catch (error) {
      throw new HttpException('Error al crear el evento', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getEvent(id: string) {
    try {
      return await this.prisma.event.findFirst({ where: { id } });
    } catch (error) {

      throw new HttpException('Error al obtener el evento', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async createEvent(event: CreateEventDto, files: Array<Express.Multer.File>) {
    try {
      const photoUrls = await uploadFilesToCloudinary(files);

      event.photos = photoUrls;

      const { lat, lon, ...eventInfo } = event; //esto xq en la db lat y lon por separado no existen y para q quede mas proligo el create

      const aux = await this.prisma.event.create({
        data: {
          ...eventInfo,

          location: {
            lat,
            lon,
          },
          photos : photoUrls,
        }
      });

      console.log(aux)

      return aux
    } catch (error) {
      throw new HttpException('Error al crear el evento', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async updateEvent( userId: string, event: UpdateEventDto) {
    try {
      const aut = await this.prisma.event.update({
        where: { id: event.id, userId: userId },
        data: {
          id: event.id,
          name: event.name,
          type: event.type,
          date: event.date,
          time: event.time,
          location: event.location ? { lat: event.location.lat, log: event.location.log } : undefined,
          createdAt: event.createdAt,
          photos: event.photos,
          description: event.description,
          amount: event.amount,
        },
      });

      if(aut == null) {
        throw new HttpException('Error al modificar el evento', HttpStatus.INTERNAL_SERVER_ERROR);
      }

      console.log(aut)

      return await this.prisma.event.update({
        where: { id: event.id },
        data: {
          ...event,
        },
      });
    } catch (error) {
      throw new HttpException('Error al modificar el evento', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  
  

  async updateEventStatus(id: string, updateData: Partial<UpdateEventDto>) { // modificar la logica
    try {
      return await this.prisma.event.update({
        where: { id },
        data: updateData,
      });

    } catch (error) {
      throw new HttpException('Error al actualizar el status del evento', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async deleteEvent(id: string, userId: string) {
    try {
      // Buscar el evento
      const existingEvent = await this.prisma.event.findUnique({ where: { id } });
  
      // Validar si el evento existe
      if (!existingEvent) {
        throw new HttpException('Evento no encontrado', HttpStatus.NOT_FOUND);
      }
  
      // Validar si el userId del token coincide con el del evento
      if (existingEvent.userId !== userId) {
        throw new HttpException('No tienes permiso para eliminar este evento', HttpStatus.FORBIDDEN);
      }
  
      // Eliminar el evento si la validación pasa
      return await this.prisma.event.delete({ where: { id } });
    } catch (error) {
      throw new HttpException('Error al intentar eliminar el evento', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
