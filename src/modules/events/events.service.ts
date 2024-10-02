import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { CreateEventDto } from 'src/modules/events/dto/create-event.dto';
import { UpdateEventDto } from 'src/modules/events/dto/update-event.dto';
import { filterEventsRadius } from 'src/utils/utils';
import { QueryEvents } from 'src/utils/types';
import { error } from 'console';

@Injectable()
export class EventsService {

  constructor(private prisma: PrismaService) { }

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

  async updateEvent( userId: number, event: UpdateEventDto) {
    console.log(event.id, typeof event.id)
    try {
      // Actualizar el evento
      const eventoEncontrado = await this.prisma.event.findUnique({
        where: { id: event.id }
      })

      console.log(eventoEncontrado)
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
  
  

  async updateEventStatus(id: number, updateData: Partial<UpdateEventDto>) { // modificar la logica
    try {
      return await this.prisma.event.update({
        where: { id },
        data: updateData,
      });
      
    } catch (error) {
      throw new HttpException('Error al actualizar el status del evento', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async deleteEvent(id: number, userId: number) {
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
