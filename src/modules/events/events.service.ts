import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { CreateEventDto } from 'src/modules/events/dto/create-event.dto';
import { UpdateEventDto } from 'src/modules/events/dto/update-event.dto';
import { Event } from './entities/events.entity';

@Injectable()
export class EventsService {

  constructor(private prisma: PrismaService) { }

  // Implementar filtro por QueryParams en el Controller recibiendo los siguientes parametros para el filtrado de los eventos:
  // type, startDate, endDate
  // Implementar el service que reciba estos query-params para realizar el filtrado de los eventos a retornar todos los eventos segun los datos del filtro.
  //     Los datos a retornar de cada evento son los siguientes:
  // id, name, type, description, date, time, amount, location
  async getEvents() {
    try {
      // const events = await this.prisma.event.findMany();

      // //primer filtrado --> type, startDate, endDate

      // const aux = ["evento 1", "evento 2"]

      // //aplicar formula a cada evento
      // //dentro de un for para validar cada evento filtrado
      // const result = raiz(("lat del evento 1" - "lat del usuario")2 + ("long de evento 1" - "long del usuario")2) //usa math javascirpt

      // //if q compara si result <= r 

      // const eventosfiltrados = ["evento 2"]

      //con los datos de fecha fijate si los eventos estan dentro del rango

      //falta aplicar la formula matematica del doc
      //hacer el filtrado segun

      return await this.prisma.event.findMany();
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

  updateEvent(id: number, event: UpdateEventDto) {
    return this.prisma.event.update({
      where: { id: id },
      data: event,
    });
  }


  // actualizacion de los eventos
  updateEventStatus(id: number, updateData: Partial<UpdateEventDto>) {
    return this.prisma.event.update({
      where: { id },
      data: updateData,
    });
  }

  // eliminar evento
  deleteEvent(id: number) {
    return this.prisma.event.delete({
      where: { id },
    });
  }
}
