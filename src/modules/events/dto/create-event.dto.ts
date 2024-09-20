import {IsString, IsNotEmpty, IsDateString, Matches, IsNumber, IsArray, Min, Max, ArrayNotEmpty} from 'class-validator';
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
    type : string

    @IsDateString()
    @IsNotEmpty()
    date : DateStringFormat
    
    @IsNotEmpty()
    @Matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)
    time : TimeStringFormat
    
    // @IsNotEmpty()
    // location : [
    //     {
    //         lat : string, //y
    //         log : string, //x
    //     }
    // ]

    @ArrayNotEmpty()
    location : [{ lat: number; lon: number }] //fijate aca de capaz cambiar estos valores por number
    //hablar con el pibe de front si ellos hacen la convercion o prefiere q le llegue como number

    @IsArray()
    @IsString({ each: true })
    photos : string[] //queda a definir si es un array de strings y el uso de cloudinary
    
    @IsNotEmpty()
    @IsString()
    description : string

    @IsNotEmpty()
    @IsNumber()
    @Min(0, { message: 'El valor debe ser mayor o igual a 0' })
    @Max(1, { message: 'El valor debe ser menor o igual a 1' })
    amount : number

    @IsNotEmpty()
    @IsDateString()
    createdAt : Date
}