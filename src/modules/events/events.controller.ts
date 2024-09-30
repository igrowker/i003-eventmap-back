import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query, UseGuards } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from 'src/modules/events/dto/create-event.dto';
import { UpdateEventDto } from 'src/modules/events/dto/update-event.dto';
import { QueryEvents } from 'src/utils/types';
import { CompanyEventGuard } from 'src/guards/events/company-event/company-event.guard';
import { Roles } from 'src/decorators/Roles.decorator';
import { Role } from 'src/utils/enum';
import { JwtAuthGuard } from 'src/guards/auth/jwtAuth.guard';
import { RoleGuard } from 'src/guards/role/role.guard';
import { userSelfGuard } from 'src/guards/auth/userSelf.guard';

@Controller('/events')
export class EventsController {
    constructor(private eventsService: EventsService) { }

    @Get('/')
    async getAllEvents(@Query() query: QueryEvents) {
        return await this.eventsService.getEvents(query);
    }

    @Get('/event/:id')
    @UseGuards(CompanyEventGuard)
    async getEventById(@Param('id', ParseIntPipe) id: number) {
        return await this.eventsService.getEvent(id);
    }

    @Roles(Role.Admin, Role.Company)
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Post('/')
    async createEvent(@Body() event: CreateEventDto) {
        return await this.eventsService.createEvent(event);
    }

    @Roles(Role.Admin, Role.Company)
    @UseGuards(JwtAuthGuard, RoleGuard, userSelfGuard)
    @Put('/:id')
    async updateEvent(
        @Param('id', ParseIntPipe) id: number,
        @Body() event: UpdateEventDto
    ) {
        return await this.eventsService.updateEvent(id, event);
    }

    @Roles(Role.Admin, Role.Company)
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Patch('/:id')
    async updateEventStatus(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateData: Partial<UpdateEventDto>,
    ) {
        return await this.eventsService.updateEventStatus(id, updateData);
    }

    @Roles(Role.Admin)
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Delete('/:id') // admin
    async deleteEvent(@Param('id', ParseIntPipe) id: number) {
        return await this.eventsService.deleteEvent(id);
    }
}