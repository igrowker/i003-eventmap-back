import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Patch, Post, Put, Query, Req, Res, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from 'src/modules/events/dto/create-event.dto';
import { UpdateEventDto } from 'src/modules/events/dto/update-event.dto';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { ValidationDateRangePipe } from './pipes/validation-date-range/validation-date-range.pipe';
import { locationValidation } from 'src/utils/utils';
import { Location } from 'src/utils/types';

@Controller('/events')
export class EventsController {
    constructor(private eventsService: EventsService) { }

    //consultar a franco si startDate: string, endDate: string q formato van a tener
    @Get('/')
    getAllEvents(@Query(ValidationDateRangePipe) query : {type : string, startDate: string, endDate: string}) {
        console.log(query.type);
        console.log(query.endDate);
        console.log(query.startDate);
        
        return this.eventsService.getEvents();
    }

    @Get('/event/:id')
    async getEventById(@Param('id', ParseIntPipe) id: number) {
        console.log(typeof id);
        return await this.eventsService.getEvent(id);
    }

    @Post('/')
    //en ves de estar añadiendo el pipe en cada controller podes añadierlo en main.ts y ahora no te haria falta poner  @UsePipes(new ValidationPipe()) en todos lados 
    // @UsePipes(new ValidationPipe()) //esto para indicar q queremos q se hagan las validaciones q creamos en CreateEventDto
    createEvent(@Body() event: CreateEventDto) {
        const eventLocation : Location = {location : event.location} 

        //crear decorardod perzonalizado q valide estos datos, move la logica al decorar
        if (locationValidation(eventLocation)) {
            return this.eventsService.createEvent(event);
        }
    }

    @Put('/:id')
    updateEvent(
        @Param('id', ParseIntPipe) id: number,
        @Body() event: UpdateEventDto
    ) {
        return this.eventsService.updateEvent(id, event);
    }

    @Patch('/:id')
    updateEventStatus(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateData: Partial<UpdateEventDto>,
    ) {
        return this.eventsService.updateEventStatus(id, updateData);
    }

    @Delete('/:id')
    deleteEvent(@Param('id', ParseIntPipe) id: number) {
        return this.eventsService.deleteEvent(id);
    }
}