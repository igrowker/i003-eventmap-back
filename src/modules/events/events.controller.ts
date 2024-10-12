import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from 'src/modules/events/dto/create-event.dto';
import { UpdateEventDto } from 'src/modules/events/dto/update-event.dto';
import { Roles } from 'src/decorators/Roles.decorator';
import { Role } from 'src/utils/enum';
import { JwtAuthGuard } from 'src/guards/auth/jwtAuth.guard';
import { RoleGuard } from 'src/guards/role/role.guard';
import { FilesInterceptor } from '@nestjs/platform-express';
import { QueryEventsDto } from './dto/query-event.dto';
import { userSelf } from 'src/guards/auth/userSelf.guard';

@Controller('/events')
export class EventsController {
    constructor(private eventsService: EventsService) { }

    @Get('/all')
    async getAllEventsWithoutFilter() {
        return await this.eventsService.getEventsWhitoutFilter();
    }

    @Get('/')
    async getAllEvents(@Query() query: QueryEventsDto) {
        return await this.eventsService.getEvents(query);
    }

    @Get('/event/:id')
    async getEventById(@Param('id') id: string) {
        return await this.eventsService.getEvent(id);
    }

    @Roles(Role.Admin, Role.Company)
    @UseGuards(JwtAuthGuard, RoleGuard, userSelf)
    @Post('/:id')
    @UseInterceptors(FilesInterceptor('files'))
    async createEvent(
        // @Param('id') id : string ,
        @Body() event: CreateEventDto,
        @UploadedFiles() files?: Array<Express.Multer.File>
    ) {
        return await this.eventsService.createEvent(event, files);
    }

    @Roles(Role.Admin, Role.Company)
    @UseGuards(JwtAuthGuard, RoleGuard, userSelf)
    @UseInterceptors(FilesInterceptor('files'))
    @Put('/:id')
    async updateEvent(
        @Param('id') id: string,
        @Body() event: UpdateEventDto,
        @UploadedFiles() files?: Array<Express.Multer.File>
    ) {
        return await this.eventsService.updateEvent(id, event, files);
    }

    @Roles(Role.Admin, Role.Company)
    @UseGuards(JwtAuthGuard, RoleGuard, userSelf)
    @Patch('/:id')
    async updateEventStatus(
        @Param('id') id: string,
        @Body() updateData: Partial<UpdateEventDto>,
    ) {
        return await this.eventsService.updateEventStatus(id, updateData);
    }

    @Roles(Role.Admin)
    @UseGuards(JwtAuthGuard, RoleGuard, userSelf)
    @Delete('/:id/:idEvent')
    async deleteEvent(@Param('idEvent') idEvent: string) {
        return await this.eventsService.deleteEvent(idEvent);
    }
}