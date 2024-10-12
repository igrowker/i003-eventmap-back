import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { CreateEventDto } from 'src/modules/events/dto/create-event.dto';
import { UpdateEventDto } from 'src/modules/events/dto/update-event.dto';
import { filterEventsRadius } from 'src/utils/utils';
import { QueryEventsDto } from './dto/query-event.dto';
import { CloudinaryService } from '../cloudinary/cloudinary.service'
import dotenvOptions from 'src/config/dotenvConfig';


@Injectable()
export class EventsService {

  constructor(private cloudinaryService: CloudinaryService, private prisma: PrismaService) { }

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

  async createEvent(event: CreateEventDto, filesArray: Array<Express.Multer.File>) {
    try {
      const { lat, lon, files, ...eventInfo } = event;

      let photoUrls: string[] = [];

      if (!filesArray || filesArray.length === 0) {
        photoUrls = [dotenvOptions.DEFAULT_IMG_EVENT_CLOUDINARY];
      }
      else {
        photoUrls = await this.cloudinaryService.uploadFilesToCloudinary(filesArray);
      }

      const aux = await this.prisma.event.create({
        data: {
          ...eventInfo,
          location: {
            lat,
            lon,
          },
          photos : photoUrls,
          createdAt: event.createdAt || new Date()
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

  async updateEvent(userId: string, event: UpdateEventDto, filesArray: Express.Multer.File[]) {
    try {
      const { lat, lon, files, ...eventInfo } = event;

      const findEvent = await this.prisma.event.findUnique(
        {
          where: {
            id: event.id
          }
        }
      )

      console.log("llego 1");
        const response = await this.cloudinaryService.deleteImgCloudinary(findEvent.photos);
      
      console.log("lelgo 2", response);
      if (!response) {
        return new HttpException('Error intentar eliminar de cloudinary las imagenes', HttpStatus.INTERNAL_SERVER_ERROR);
      }

      const photosUrl = await this.cloudinaryService.uploadFilesToCloudinary(filesArray);

      const eventUpdated = await this.prisma.event.update({
        where: { id: event.id, userId: userId },
        data: {
          ...eventInfo,
          location: {
            lat: event.lat,
            lon: event.lon
          },
          photos : photosUrl,
          createdAt: event.createdAt || new Date()
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
        { where: { id: eventId } }
      ).catch((error) => {
        return new HttpException(`${error.meta.message}`, HttpStatus.BAD_REQUEST);
      });

      return deletedEvent;

    } catch (error) {
      throw new HttpException('Error al intentar eliminar el evento', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
