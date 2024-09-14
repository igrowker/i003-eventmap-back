import { Injectable } from '@nestjs/common';
import {PrismaService} from '../../prisma.service';
import { CreateEventDto } from 'src/modules/events/dto/create-event.dto';
import { UpdateEventDto } from 'src/modules/events/dto/update-event.dto';

@Injectable()
export class EventsService {

    constructor(private prisma : PrismaService) {}

    getEvents() {
        return this.prisma.event.findMany();
    }

    getEvent(id : number){
        return id;
    }

    //ojo el dto no te sirve para hacer validaciones osea si faltan datos podria crearse el evento igual
    //el dto es mas q nada el autocompletado y analisis de erores
    createEvent(event : CreateEventDto){
        console.log(event);

        //aca faltaria toda la logica para controlar q las fecha y hora esten en formato fecha y hora
        //de momento en el create-event.dto lo puse como strings

        return this.prisma.event.create({data : event});
    }

    updateEvent(event : UpdateEventDto){
        return 'event'
    }
}
