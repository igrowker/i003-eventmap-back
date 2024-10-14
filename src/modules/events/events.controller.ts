import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Roles } from 'src/decorators/Roles.decorator';
import { Role } from 'src/utils/enum';
import { JwtAuthGuard } from 'src/guards/auth/jwtAuth.guard';
import { RoleGuard } from 'src/guards/role/role.guard';
import { FilesInterceptor } from '@nestjs/platform-express';
import { QueryEventsDto } from './dto/query-event.dto';
import { userSelf } from 'src/guards/auth/userSelf.guard';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('events')
@Controller('/events')
export class EventsController {
    constructor(private eventsService: EventsService) { }

    @Get('/all')
    async getAllEventsWithoutFilter() {
        return await this.eventsService.getEventsWhitoutFilter();
    }

    @Get('/')
    @ApiBody({ type: QueryEventsDto })
    async getAllEvents(@Query() query: QueryEventsDto) {
        return await this.eventsService.getEvents(query);
    }

    @Get('/event/:id')
    @ApiParam({
        name: 'id',
        description: 'ID del evento a buscar',
        example: '4ca24b91-70c2-47ca-aee9-4f54b8f8eec5',
    })
    async getEventById(@Param('id') id: string) {
        return await this.eventsService.getEvent(id);
    }

    @ApiBearerAuth()
    @Roles(Role.Admin, Role.Company)
    @UseGuards(JwtAuthGuard, RoleGuard, userSelf)
    @ApiParam({
        name: 'id'
    })
    @ApiConsumes('multipart/form-data')
    @ApiBody({ type: CreateEventDto })
    @Post('/:id')  
    @UseInterceptors(FilesInterceptor('files'))
    async createEvent(
        @Body() event: CreateEventDto,
        @UploadedFiles() files?: Array<Express.Multer.File>
    ) {
        return await this.eventsService.createEvent(event, files);
    }

    @ApiBearerAuth()
    @Roles(Role.Admin, Role.Company)
    @UseGuards(JwtAuthGuard, RoleGuard, userSelf)
    @ApiConsumes('multipart/form-data')
    @ApiBody({ type: UpdateEventDto })
    @UseInterceptors(FilesInterceptor('files'))
    @Put('/:id')
    async updateEvent(
        @Param('id') id: string,
        @Body() event: UpdateEventDto,
        @UploadedFiles() files?: Array<Express.Multer.File>
    ) {
        return await this.eventsService.updateEvent(id, event, files);
    }

    @ApiBearerAuth()
    @Roles(Role.Admin, Role.Company)
    @UseGuards(JwtAuthGuard, RoleGuard, userSelf)
    @ApiParam({
        name: 'id',
        description: 'ID del evento a actualizar parcialmente',
        example: '4ca24b91-70c2-47ca-aee9-4f54b8f8eec5',
    })
    @ApiBody({
        description: 'Datos a actualizar parcialmente del evento',
        schema: {
            example: {
                name: 'Torneo actualizado',
                description: 'Nueva descripción del evento',
            }
        }
    })
    @Patch('/:id')
    async updateEventStatus(
        @Param('id') id: string,
        @Body() updateData: Partial<UpdateEventDto>,
    ) {
        return await this.eventsService.updateEventStatus(id, updateData);
    }

    @ApiBearerAuth()
    @Roles(Role.Admin)
    @UseGuards(JwtAuthGuard, RoleGuard, userSelf)
    @ApiParam({ name: 'id', description: 'ID del usuario' })
    @ApiParam({ name: 'idEvent', description: 'ID del evento' })
    @Delete('/:id/:idEvent')  
    async deleteEvent(@Param('idEvent') idEvent: string) {
        return await this.eventsService.deleteEvent(idEvent);
    }
}
