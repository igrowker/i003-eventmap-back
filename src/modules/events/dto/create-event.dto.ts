import { Type } from '@prisma/client';
import {IsString, IsNotEmpty, IsDateString, Matches, IsNumber, IsArray} from 'class-validator';
import { DateStringFormat, TimeStringFormat } from 'src/utils/types';

export class CreateEventDto{
    
    @IsNotEmpty()
    @IsNumber()
    userId : number

    @IsString()
    @IsNotEmpty()
    name : string
    
    @IsString()
    @IsNotEmpty()
    @Matches(/^(Deportivo|Artistico|Gastronomico)$/i, {message : "El evento debe de ser una de estas opciones: Deportivo, Artistico, Gastronomico"})
    type : Type

    @IsDateString()
    @IsNotEmpty()
    date : DateStringFormat
    
    @IsNotEmpty()
    @Matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)
    time : TimeStringFormat
    
    @IsNotEmpty()
    location : [
        {
            lat : string, //y
            log : string, //x
        }
    ]

    @IsArray()
    @IsString({ each: true })
    photos : string[] //queda a definir si es un array de strings y el uso de cloudinary
    
    @IsNotEmpty()
    @IsString()
    description : string

    @IsNotEmpty()
    @IsNumber()
    amount : number

    @IsNotEmpty()
    @IsDateString()
    createdAt : Date
}

//el token setearlo desde al back en las cookies

// {
// "id":"669c42a6fdd4ca72f282d5dc",
// "title":"La Colonial",
// "location":[-34.638017,-59.27014],
// "photos":["https://res.cloudinary.com/dyi5til4r/image/upload/v1721516995/669c42a6fdd4ca72f282d5dc/restaurant-photos/669c42a6fdd4ca72f282d5dc/1721516995007.webp"], 
// "description":"Restaurante y bar clásico al costado de la ruta 5"
// }