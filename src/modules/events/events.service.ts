import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { CreateEventDto } from 'src/modules/events/dto/create-event.dto';
import { UpdateEventDto } from 'src/modules/events/dto/update-event.dto';
import { filterEventsRadius } from 'src/utils/utils';
import { QueryEvents } from 'src/utils/types';
import { events } from './eventos';




@Injectable()
export class EventsService {

  constructor(private prisma: PrismaService) { }

  async crear20Eventos(){

    for (let index = 0; index < events.length; index++) {
      const element = events[index];
      
      await this.prisma.event.create({ data: element });
    }
    return true
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

  async createEvent(event: CreateEventDto) {
    try {
      return await this.prisma.event.create({ data: event });
    } catch (error) {
      throw new HttpException('Error al crear el evento', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async updateEvent(id: number, event: UpdateEventDto) {
    try {
      return await this.prisma.event.update({
        where: { id: id },
        data: event,
      });
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
