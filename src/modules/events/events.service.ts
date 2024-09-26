import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { CreateEventDto } from 'src/modules/events/dto/create-event.dto';
import { UpdateEventDto } from 'src/modules/events/dto/update-event.dto';
import { filterEventsRadius, filterEventsUserRequest } from 'src/utils/utils';
import { QueryEvents } from 'src/utils/types';

@Injectable()
export class EventsService {

  constructor(private prisma: PrismaService) { }


  // http://localhost:3000/events?type=Deportivo&startDate=2024-12-12&endDate=2024-12-15&radius="-35.658"&lat="-25.546"&lon="-22.316"
  async getEvents(query : QueryEvents) {
    try {
      const events = await this.prisma.event.findMany();
      
      //primer filtrado por solicitud usuario
      const arrayEventsRequested = filterEventsUserRequest(events,query);
      console.log(arrayEventsRequested);
      
      const arrayEventsRadius = filterEventsRadius(arrayEventsRequested, query.lat, query.lon);

      return arrayEventsRequested;
      // return arrayEventsRadius;
      // return await this.prisma.event.findMany();
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
