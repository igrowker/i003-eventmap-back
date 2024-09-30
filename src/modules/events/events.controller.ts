import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from 'src/modules/events/dto/create-event.dto';
import { UpdateEventDto } from 'src/modules/events/dto/update-event.dto';
import { QueryEvents } from 'src/utils/types';
import { CompanyEventGuard } from 'src/guards/events/company-event/company-event.guard';
import { Roles } from 'src/decorators/Roles.decorator';
import { Role } from 'src/utils/enum';
import { JwtAuthGuard } from 'src/guards/auth/auth.guard';
import { RoleGuard } from 'src/guards/role/role.guard';
import { uploadFilesToCloudinary } from 'src/utils/utils';
import { FilesInterceptor } from '@nestjs/platform-express';
import { CreateEventFileDto } from './dto/create-event-file.dto';

@Controller('/events')
export class EventsController {
    constructor(private eventsService: EventsService) { }

    @Post("/crearEvents")
    async crearEventos(){
        return await this.eventsService.crearEventos();
    }

    // @Roles(Role.Admin)
    // @UseGuards(JwtAuthGuard, RoleGuard)
    @Get('/all')
    async getAllEventsWithoutFilter() {
        return await this.eventsService.getEventsWhitoutFilter();
    }

    @Get('/')
    async getAllEvents(@Query() query: QueryEvents) {
        return await this.eventsService.getEvents(query);
    }

    @Get('/event/:id')
    @UseGuards(CompanyEventGuard)
    async getEventById(@Param('id', ParseIntPipe) id: number) {
        return await this.eventsService.getEvent(id);
    }

    // @Roles(Role.Admin, Role.Company)
    // @UseGuards(JwtAuthGuard, RoleGuard)
    @Post('/')
    @UseInterceptors(FilesInterceptor('files'))
    async createEvent(
        // @Body() event: CreateEventDto,
        @Body() event : CreateEventFileDto, //nuevo dto, capaz no es la mejor opcione, lat y lon se reciven por serparado y photos ahora es files y es un Express.Multer.File (capaz File[])
        @UploadedFiles() files: Array<Express.Multer.File> //aca seria File[] para q se envien varias
    ) {
        console.log(event);
        console.log(files);
        // const photoUrls = await uploadFilesToCloudinary(files);
        // event.photos = photoUrls;

        // return await this.eventsService.createEvent(event);
        return {message : "respuesta back"};
    }

    @Roles(Role.Admin, Role.Company)
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Put('/:id') //user id cooincida con el id del token con el id del solicitado
    // @UseGuards(CompanyEventGuard)
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