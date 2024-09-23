import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from 'src/modules/events/dto/create-event.dto';
import { UpdateEventDto } from 'src/modules/events/dto/update-event.dto';
import { ValidationDateRangePipe } from './pipes/validation-date-range/validation-date-range.pipe';

@Controller('/events')
export class EventsController {
    constructor(private eventsService: EventsService) { }

    @Get('/')
    getAllEvents(@Query(ValidationDateRangePipe) query : {type : string, startDate: string, endDate: string}) {
       
        return this.eventsService.getEvents();
    }

    @Get('/event/:id')
    async getEventById(@Param('id', ParseIntPipe) id: number) {
     
        return await this.eventsService.getEvent(id);
    }

    @Post('/')
    createEvent(@Body() event: CreateEventDto) {
        return this.eventsService.createEvent(event);
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