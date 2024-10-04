import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { CreateEventDto } from 'src/modules/events/dto/create-event.dto';
import { UpdateEventDto } from 'src/modules/events/dto/update-event.dto';
import { checkFormatImages, checkSizeImages, deleteImgCloudinary, filterEventsRadius, uploadFilesToCloudinary } from 'src/utils/utils';
import { events, generateRandomCoordinates } from './events';
import { QueryEventsDto } from './dto/query-event.dto';
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

  async getEvents(query: QueryEventsDto) {
    try {
      const events = await this.prisma.event.findMany();
      
      const arrayEventsRadius = filterEventsRadius(events, query.lat, query.lon);

      return arrayEventsRadius;
    } catch (error) {
      throw new HttpException('No se logro obtener los eventos', HttpStatus.INTERNAL_SERVER_ERROR);
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
      if (!checkSizeImages(files)) {
        return new HttpException('El tamaño de las imagenes para el evento no puede superar el tamañno de 300kb', HttpStatus.BAD_REQUEST);
      }
      
      if (!checkFormatImages(files)) {
        return  new HttpException('El formato de las imagenes tiene que ser una de estas opciones: .jpg | .png | .jpeg | .web', HttpStatus.BAD_REQUEST);
      }

      const photoUrls = await uploadFilesToCloudinary(files);

      event.photos = photoUrls;

      const { lat, lon, ...eventInfo } = event;

      const aux = await this.prisma.event.create({
        data: {
          ...eventInfo,
          // id: uuidv4(),
          location: {
            lat,
            lon,
          },
          photos : event.photos,
        }
      });

      return aux
    } catch (error) {
      throw new HttpException('Error al crear el evento', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async updateEvent( userId: string, event: UpdateEventDto) {
    try {

      //hace falta q sea bloqueante ?
      await deleteImgCloudinary(event.id);

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
