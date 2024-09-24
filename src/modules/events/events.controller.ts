import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from 'src/modules/events/dto/create-event.dto';
import { UpdateEventDto } from 'src/modules/events/dto/update-event.dto';
import { ValidationDateRangePipe } from './pipes/validation-date-range/validation-date-range.pipe';
import { QueryEvents } from 'src/utils/types';

@Controller('/events')
export class EventsController {
    constructor(private eventsService: EventsService) { }

    @Get('/')
    async getAllEvents(@Query(ValidationDateRangePipe) query: QueryEvents) {
        return await this.eventsService.getEvents(query);
    }

    @Get('/event/:id')
    async getEventById(@Param('id', ParseIntPipe) id: number) {
        return await this.eventsService.getEvent(id);
    }

    @Post('/')
    async createEvent(@Body() event: CreateEventDto) {
        return await this.eventsService.createEvent(event);
    }

    @Put('/:id')
    async updateEvent(
        @Param('id', ParseIntPipe) id: number,
        @Body() event: UpdateEventDto
    ) {
        return await this.eventsService.updateEvent(id, event);
    }

    @Patch('/:id')
    async updateEventStatus(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateData: Partial<UpdateEventDto>,
    ) {
        return await this.eventsService.updateEventStatus(id, updateData);
    }

    @Delete('/:id')
    async deleteEvent(@Param('id', ParseIntPipe) id: number) {
        return await this.eventsService.deleteEvent(id);
    }
}