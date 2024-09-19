import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {PrismaService} from '../../prisma.service';
import { CreateEventDto } from 'src/modules/events/dto/create-event.dto';
import { UpdateEventDto } from 'src/modules/events/dto/update-event.dto';

@Injectable()
export class EventsService {

    constructor(private prisma : PrismaService) {}

    getEvents() {
        return this.prisma.event.findMany();
    }

    async getEvent(id : number){
        try {
            return await this.prisma.event.findFirst({where : {id}});
        } catch (error) {
            console.error("Error al crear el evento");
            throw new HttpException('Error al crear el evento',HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    createEvent(event : CreateEventDto){
        console.log(event);
        return this.prisma.event.create({data : event});
    }

  updateEvent(id: number, event: UpdateEventDto) {
    return this.prisma.event.update({
      where: { id: id },
      data: event, // actualizar datos
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
