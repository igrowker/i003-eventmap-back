import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { CreateEventDto } from 'src/modules/events/dto/create-event.dto';
import { UpdateEventDto } from 'src/modules/events/dto/update-event.dto';
import { filterEventsRadius } from 'src/utils/utils';
import { QueryEvents } from 'src/utils/types';
import { events, generateRandomCoordinates } from './events';
import cloudinary from 'src/config/cloudinary.config';

@Injectable()
export class EventsService {

  constructor(private prisma: PrismaService) { }

  async crearEventos(){
    for (let index = 0; index < events.length; index++) {
      const element = events[index];
      
      await this.prisma.event.create({ data: {
        userId : element.userId,
        name: element.name,
        type: element.type,
        date: element.date,
        time: element.time,
        location: generateRandomCoordinates((-34.605500), (-58.384500), 5),
        photos: element.photos,
        description: element.description,
        amount: element.amount,
        createdAt: element.createdAt
      } });
    }
    return true
  }

  async getEventsWhitoutFilter() {
    try {
      return await this.prisma.event.findMany();
    } catch (error) {
      throw new HttpException('Error al crear el evento', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getEvents(query : QueryEvents) {
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

  async getEvent(id: number) {
    try {
      return await this.prisma.event.findFirst({ where: { id } });
    } catch (error) {

      throw new HttpException('Error al obtener el evento', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // async uploadFilesToCloudinary(files: Express.Multer.File[]): Promise<string[]> {
  //   const photoUrls: string[] = [];
  
  //   for (const file of files) {
  //     const uploadResult = await cloudinary.uploader.upload(file.path, {
  //       folder: 'events', // Opcional: Especifica una carpeta para organizar
  //     });
  
  //     photoUrls.push(uploadResult.secure_url);
  //   }
  
  //   return photoUrls;
  // }

  // async createEvent(event: CreateEventDto, files: Express.Multer.File[]) {
  //   const photoUrls = await this.uploadImagesToCloudinary(files);
  async createEvent(event: CreateEventDto) {
    try {

      return await this.prisma.event.create({ data: event });
    } catch (error) {
      throw new HttpException('Error al crear el evento', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async updateEvent(idUserQLLegaPorParamtro: number, event: UpdateEventDto) {
    try {
      const updateEvent = await this.prisma.event.update({
        where: { 
          id: event.id ,
          userId : idUserQLLegaPorParamtro
        },
        data: event,
      });

      if (updateEvent === null) {
        throw new HttpException('No tienes los permisos para modificar este evento', HttpStatus.BAD_REQUEST);
      }

      return updateEvent;
    } catch (error) {
      throw new HttpException('Error al modificar el evento', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async updateEventStatus(id: number, updateData: Partial<UpdateEventDto>) {
    try {
      return await this.prisma.event.update({
        where: { id },
        data: updateData,
      });
      
    } catch (error) {
      throw new HttpException('Error al actualizar el status del evento', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async deleteEvent(id: number) {
    try {
      return await this.prisma.event.delete({
        where: { id },
      });
    } catch (error) {
      throw new HttpException('Error al intentar eliminar el evento', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
