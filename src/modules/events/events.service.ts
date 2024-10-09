import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { CreateEventDto } from 'src/modules/events/dto/create-event.dto';
import { UpdateEventDto } from 'src/modules/events/dto/update-event.dto';
import {filterEventsRadius} from 'src/utils/utils';
// import { deleteImgCloudinary, uploadFilesToCloudinary } from 'src/utils/utils.cloudinary';
import { QueryEventsDto } from './dto/query-event.dto';
import {CloudinaryService} from '../cloudinary/cloudinary.service'


@Injectable()
export class EventsService {

  constructor(private cloudinaryService : CloudinaryService,private prisma: PrismaService) { }

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
      return await this.prisma.event.findMany().catch((error) => {
        return new HttpException(`${error.meta.message}`, HttpStatus.BAD_REQUEST);
      });

    } catch (error) {
      throw new HttpException('Error al crear el evento', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getEvents(query: QueryEventsDto) {
    try {
      const events = await this.prisma.event.findMany().catch((error) => {
        return new HttpException(`${error.meta.message}`, HttpStatus.BAD_REQUEST);
      });

      const arrayEventsRadius = filterEventsRadius(events, query.lat, query.lon);

      return arrayEventsRadius;
    } catch (error) {
      throw new HttpException('No se logro obtener los eventos', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getEvent(id: string) {
    try {
      return await this.prisma.event.findFirst(
        { where: { id } }
      ).catch((error) => {
        return new HttpException(`${error.meta.message}`, HttpStatus.BAD_REQUEST);
      });

    } catch (error) {
      throw new HttpException('Error al obtener el evento', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async createEvent(event: CreateEventDto, files: Array<Express.Multer.File>) {
    try {
      const photoUrls = await this.cloudinaryService.uploadFilesToCloudinary(files);

      event.photos = photoUrls;

      const { lat, lon, ...eventInfo } = event;

      const aux = await this.prisma.event.create({
        data: {
          ...eventInfo,
          location: {
            lat,
            lon,
          },
          createdAt : event.createdAt || new Date()
        }
      }).catch((error) => {
        return new HttpException(`${error.meta.message}`, HttpStatus.BAD_REQUEST);
      });

      if (aux === null || aux === undefined) {
        return new HttpException('Alguno de los datos ingresados no es correcto', HttpStatus.BAD_REQUEST);
      }

      return aux
    } catch (error) {
      throw new HttpException('Error al crear el evento', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async updateEvent(userId: string, event: UpdateEventDto, files: Express.Multer.File[]) {
    try {
      const findEvent = await this.prisma.event.findUnique(
        {
          where: {
            id: event.id
          }
        }
      )

      const response = await this.cloudinaryService.deleteImgCloudinary(findEvent.photos);

      if (!response) {
        return new HttpException('Error intentar eliminar de cloudinary las imagenes', HttpStatus.INTERNAL_SERVER_ERROR);
      }

      event.photos = await this.cloudinaryService.uploadFilesToCloudinary(files);

      const { lat, lon, ...eventInfo } = event;

      const eventUpdated = await this.prisma.event.update({
        where: { id: event.id, userId: userId },
        data: {
          ...eventInfo,
          // id: event.id,
          // name: event.name,
          // type: event.type,
          // date: event.date,
          // time: event.time,
          location: {
            lat: event.lat,
            lon: event.lon
          },
          createdAt : event.createdAt || new Date()
          // location: event.location ? { lat: event.location.lat, log: event.location.log } : undefined,
          // createdAt: event.createdAt,
          // photos: event.photos,
          // description: event.description,
          // amount: event.amount,
        },
      }).catch((error) => {
        return new HttpException(`${error.meta.message}`, HttpStatus.BAD_REQUEST);
      });

      return eventUpdated;
    } catch (error) {
      throw new HttpException('Error al modificar el evento', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async updateEventStatus(id: string, updateData: Partial<UpdateEventDto>) {
    try {
      return await this.prisma.event.update({
        where: { id },
        data: updateData,
      });

    } catch (error) {
      throw new HttpException('Error al actualizar el status del evento', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async deleteEvent(eventId: string) {
    try {
      const findEvent = await this.prisma.event.findUnique(
        { where: { id: eventId } }
      )

      const response = await this.cloudinaryService.deleteImgCloudinary(findEvent.photos);

      if (!response) {
        return new HttpException('Error intentar eliminar de cloudinary las imagenes', HttpStatus.INTERNAL_SERVER_ERROR);
      }

      const deletedEvent = await this.prisma.event.delete(
        { where: { id: eventId} }
      ).catch((error) => {
        return new HttpException(`${error.meta.message}`, HttpStatus.BAD_REQUEST);
      });
      
      return deletedEvent;

    } catch (error) {
      throw new HttpException('Error al intentar eliminar el evento', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
