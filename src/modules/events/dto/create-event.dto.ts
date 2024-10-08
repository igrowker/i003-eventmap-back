import { IsString, IsNotEmpty, IsDateString, Matches, IsNumber, Min, Max, IsDate, IsOptional} from 'class-validator';
import { TypeEvents } from 'src/utils/enum';
import { DateStringFormat, TimeStringFormat } from 'src/utils/types';

export class CreateEventDto{
    @IsNotEmpty()
    @IsString()
    userId : string

    @IsString()
    @IsNotEmpty()
    name : string
    
    @IsString()
    @IsNotEmpty()
    @Matches(/^(Deportivo|Artistico|Gastronomico)$/i, {message : "El evento debe de ser una de estas opciones: Deportivo, Artistico, Gastronomico"})
    type : TypeEvents

    @IsDateString()
    @IsNotEmpty()
    date : DateStringFormat
    
    @IsNotEmpty()
    @Matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)
    time : TimeStringFormat

    // @Validate(IsValisLocation)
    // location : { lat: number, lon: number }
    // @IsArray()
    // @ArrayNotEmpty()
    // @IsString({each : true})
    // location : string[]

    @IsNumber()
    @IsNotEmpty()
    lat : number

    @IsNumber()
    @IsNotEmpty()
    lon : number

    // @IsArray()
    // @IsString({ each: true })
    photos : string[]
    
    @IsNotEmpty()
    @IsString()
    description : string

    @IsNotEmpty()
    @IsNumber()
    @Min(0, { message: 'El valor debe ser mayor o igual a 0' })
    @Max(1, { message: 'El valor debe ser menor o igual a 1' })
    amount : number

    @IsOptional()
    @IsDate()
    createdAt ?: Date

    @IsString()
    @IsNotEmpty()
    capacity : string

    @IsString()
    @IsNotEmpty()
    addres : string
}