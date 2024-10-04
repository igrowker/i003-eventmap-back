import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, Req, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from 'src/modules/events/dto/create-event.dto';
import { UpdateEventDto } from 'src/modules/events/dto/update-event.dto';
import { Roles } from 'src/decorators/Roles.decorator';
import { Role } from 'src/utils/enum';
import { JwtAuthGuard } from 'src/guards/auth/jwtAuth.guard';
import { RoleGuard } from 'src/guards/role/role.guard';
import { FilesInterceptor } from '@nestjs/platform-express';
// import { UserSelf } from 'src/guards/auth/userSelf.guard';
import cloudinary from 'src/config/cloudinary.config';
import { QueryEventsDto } from './dto/query-event.dto';

@Controller('/events')
export class EventsController {
    constructor(private eventsService: EventsService) { }

    @Get("/cloudinaryImgs")
    async getImages() {
            const secureImageUrl = cloudinary.url('https://res.cloudinary.com/dtbbcg1k2/image/upload/v1727916362/zvlpyntwlqxzq6cwu8cp.png', {
                secure: true
            });
            console.log(secureImageUrl);

        //divido por "/" --> con pop me quedo con el ultimo elemento q es el public_id + extencion de la imagen -_> divido por "." --> me quedo con el primer elemento q es public_id
        const publicId = secureImageUrl.split('/').pop().split('.')[0];
        console.log(publicId);

        const imageById = await cloudinary.api.resource(
            "zvlpyntwlqxzq6cwu8cp",
            {
                type: 'upload',
                resource_type: 'image'
            },
            (error, result) => {
                if (error) {
                    console.error(error);
                } else {
                    console.log(result.resources); // Array de objetos que representan cada imagen
                }
            }
        )

        // const images = await cloudinary.api.resource(
        //     "",
        //     {
        //         type: 'upload',
        //         resource_type: 'image'
        //     },
        //     (error, result) => {
        //         if (error) {
        //             console.error(error);
        //         } else {
        //             console.log(result.resources); // Array de objetos que representan cada imagen
        //         }
        //     }
        // )

        return true;
    }

    // @Post("/crearEvents")
    // async crearEventos() {
    //     return await this.eventsService.crearEventos();
    // }

    // @Roles(Role.Admin, Role.Company)
    // @UseGuards(JwtAuthGuard, RoleGuard)
    @Get('/all')
    async getAllEventsWithoutFilter() {
        return await this.eventsService.getEventsWhitoutFilter();
    }

    @Get('/')
    async getAllEvents(@Query() query: QueryEventsDto) { //agregar un mensaje de q los valores de la query son requeridos
        console.log("hafdsh");
        return await this.eventsService.getEvents(query);
    }

    @Get('/event/:id')
    async getEventById(@Param('id') id: string) {
        return await this.eventsService.getEvent(id);
    }

    // @Roles(Role.Admin, Role.Company)
    // @UseGuards(JwtAuthGuard, RoleGuard)
    @Post('/') //300kb maximo de tamañanp de imagen
    //jpg png jpeg web --> formatos validos
    @UseInterceptors(FilesInterceptor('files'))
    async createEvent(
        @Body() event: CreateEventDto,
        @UploadedFiles() files: Array<Express.Multer.File>
    ) {
        return await this.eventsService.createEvent(event, files);
    }

    @Roles(Role.Admin, Role.Company)
    @UseGuards(JwtAuthGuard, RoleGuard)
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