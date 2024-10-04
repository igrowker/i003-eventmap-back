import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query, Req, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from 'src/modules/events/dto/create-event.dto';
import { UpdateEventDto } from 'src/modules/events/dto/update-event.dto';
import { QueryEvents } from 'src/utils/types';
import { Roles } from 'src/decorators/Roles.decorator';
import { Role } from 'src/utils/enum';
import { JwtAuthGuard } from 'src/guards/auth/jwtAuth.guard';
import { RoleGuard } from 'src/guards/role/role.guard';
import { FilesInterceptor } from '@nestjs/platform-express';
import { UserSelf } from 'src/guards/auth/userSelf.guard';

@Controller('/events')
export class EventsController {
    constructor(private eventsService: EventsService) { }

    // @Post("/crearEvents")
    // async crearEventos() {
    //     return await this.eventsService.crearEventos();
    // }

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
    async getEventById(@Param('id') id: string) {
        return await this.eventsService.getEvent(id);
    }

    @Roles(Role.Admin, Role.Company)
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Post('/') //200 y 300kb de tamañanp de imagen y formato y imagen por defecto en la db
    @UseInterceptors(FilesInterceptor('files'))
    async createEvent(
        @Body() event: CreateEventDto,
        @UploadedFiles() files: Array<Express.Multer.File>
    ) {
        console.log(event);
        console.log('Archivos recibidos:', files);

        //validar tamañno y formato imagen        

        return await this.eventsService.createEvent(event, files);
    }

    @Roles(Role.Admin, Role.Company)
    @UseGuards(JwtAuthGuard, RoleGuard, UserSelf)
    @Put('/:id')
    async updateEvent(
        @Param('id') id: string,
        @Body() event: UpdateEventDto,
    ) {
        console.log('llego 1')
        // console.log('User in request:', req.user); // Verifica si existe el user aquí
        // const userId = req.user?.id; // Obtener el userId del token JWT
        return await this.eventsService.updateEvent(id, event);
    }


    @Roles(Role.Admin, Role.Company)
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Patch('/:id')
    async updateEventStatus(
        @Param('id') id: string,
        @Body() updateData: Partial<UpdateEventDto>,
    ) {
        return await this.eventsService.updateEventStatus(id, updateData);
    }

    @Roles(Role.Admin)
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Delete('/:id') // admin
    async deleteEvent(@Param('id') id: string, @Req() req) {
        const userId = req.user.id; // Extraer el userId del token JWT
        return await this.eventsService.deleteEvent(id, userId);
    }
}