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
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('events')
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
    
    @ApiBearerAuth()
    @Roles(Role.Admin, Role.Company)
    @UseGuards(JwtAuthGuard, RoleGuard, userSelf)
    @ApiParam({
        name: 'id'
    })
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                userId: { type: 'string', example: '4ca24b91-70c2-47ca-aee9-4f54b8f8eec5' },
                name: { type: 'string', example: 'Torneo rugby' },
                type: { type: 'string', example: 'Deportivo' },
                date: { type: 'string', format: 'date', example: '2024-10-12' },
                time: { type: 'string', example: '15:30' },
                lat: { type: 'number', example: -34.603722 },
                lon: { type: 'number', example: -58.381592 },
                description: { type: 'string', example: 'partido' },
                amount: { type: 'number', example: 0.5 },
                capacity: { type: 'string', example: '100' },
                addres: { type: 'string', example: 'los laureles' },
                files: {
                    type: 'array',
                    items: {
                        type: 'string',
                        format: 'binary'
                    }
                }
            }
        }
    })
    @Post('/:id')
    @UseInterceptors(FilesInterceptor('files'))
    async createEvent(
        // @Param('id') id : string ,
        @Body() event: CreateEventDto,
        @UploadedFiles() files?: Array<Express.Multer.File>
    ) {
        
        return await this.eventsService.createEvent(event, files);
    }
    
    @ApiBearerAuth()
    @Roles(Role.Admin, Role.Company)
    @UseGuards(JwtAuthGuard, RoleGuard, userSelf)
    @ApiParam({
        name: 'id'
    })
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                userId: { type: 'string', example: '4ca24b91-70c2-47ca-aee9-4f54b8f8eec5' },
                name: { type: 'string', example: 'Torneo rugby' },
                type: { type: 'string', example: 'Deportivo' },
                date: { type: 'string', format: 'date', example: '2024-10-12' },
                time: { type: 'string', example: '15:30' },
                lat: { type: 'number', example: -34.603722 },
                lon: { type: 'number', example: -58.381592 },
                description: { type: 'string', example: 'partido' },
                amount: { type: 'number', example: 0.5 },
                capacity: { type: 'string', example: '100' },
                addres: { type: 'string', example: 'los laureles' },
                files: {
                    type: 'array',
                    items: {
                        type: 'string',
                        format: 'binary'
                    }
                }
            }
        }
    })
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
        name: 'id'
    })
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                userId: { type: 'string', example: '4ca24b91-70c2-47ca-aee9-4f54b8f8eec5' },
                name: { type: 'string', example: 'Torneo rugby' },
                type: { type: 'string', example: 'Deportivo' },
                date: { type: 'string', format: 'date', example: '2024-10-12' },
                time: { type: 'string', example: '15:30' },
                lat: { type: 'number', example: -34.603722 },
                lon: { type: 'number', example: -58.381592 },
                description: { type: 'string', example: 'partido' },
                amount: { type: 'number', example: 0.5 },
                capacity: { type: 'string', example: '100' },
                addres: { type: 'string', example: 'los laureles' },
                files: {
                    type: 'array',
                    items: {
                        type: 'string',
                        format: 'binary'
                    }
                }
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
    @ApiParam({ name: 'id', description: 'ID del usuario' })        // Documenta el primer ID
@ApiParam({ name: 'idEvent', description: 'ID del evento' })    // Documenta el segundo ID
    @Delete('/:id/:idEvent')
    async deleteEvent(@Param('idEvent') idEvent: string) {
        return await this.eventsService.deleteEvent(idEvent);
    }
}