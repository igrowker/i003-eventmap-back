import {Body, Controller, Delete, Get, HttpException, Param, ParseIntPipe, Patch, Post, Put, Query, Req, Res, UseGuards, UsePipes, ValidationPipe} from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from 'src/modules/events/dto/create-event.dto';
import { UpdateEventDto } from 'src/modules/events/dto/update-event.dto';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from 'src/guards/auth/auth.guard';

@Controller('/events')
export class EventsController{
    constructor(private eventsService : EventsService) {}

    @Get('/')
    getAllEvents(){
        return this.eventsService.getEvents();
    }

    @Get('/event/:id')
    getEventById(@Param('id', ParseIntPipe) id : number){

        console.log(typeof id);

        return this.eventsService.getEvent(id);
    }

    //pipe validation perzonalizada
    @Get('/validation')
    validation(@Query(ValidateuserPipe) query : {age : number, name : string}){

        console.log(typeof query.age);
        console.log(typeof query.name);

        return `${query.name} ${query.age}`;
    }

    @Post('/')
    //en ves de estar añadiendo el pipe en cada controller podes añadierlo en main.ts y ahora no te haria falta poner  @UsePipes(new ValidationPipe()) en todos lados 
    // @UsePipes(new ValidationPipe()) //esto para indicar q queremos q se hagan las validaciones q creamos en CreateEventDto
    createEvent(@Body() event : CreateEventDto){ //ahora q tenes el dto podes acceder a las porps del evento con el "."
        console.log(event);
        
        return this.eventsService.createEvent(event);
    }

    //dif entre Put y Patch --> Put actuliza todo el objeto y Patch actuliza alguna prop en particular
    @Put('/:id')
    updateEvent(@Body() event : UpdateEventDto){
        return this.eventsService.updateEvent(event);
    }

    @Patch('/:id')
    updateEventStatus(){
        return 'actulizando el status';
    }

    @Delete('/:id')
    // @UseGuards(AuthGuard)
    deleteEvent(){
        return 'eliminando un evento';
    }
}