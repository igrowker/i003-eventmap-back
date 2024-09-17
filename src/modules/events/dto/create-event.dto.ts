import {IsString, IsNotEmpty, IsDateString, Matches} from 'class-validator';
// import { IsTime } from 'src/decorators/IsHourFormat.decorator';
import { DateStringFormat, TimeStringFormat } from 'src/utils/types';

export class CreateEventDto{
    @IsString()
    @IsNotEmpty()
    name : string
    
    @IsString()
    @IsNotEmpty()
    type : string

    @IsDateString()
    @IsNotEmpty()
    date : DateStringFormat
    
    @IsNotEmpty()
    // @IsTime() --> el Matches hace el mismo laburo pero mas rapido incluso, se podria usar tambien en date
    @Matches(/^(1[0-2]|0?[1-9]):([0-5]?[0-9])$/)
    time : TimeStringFormat
    
    @IsNotEmpty()
    location : [{
        id : string,
        //habalr con franco xq el title seria lo mismo q name ?
        title : string,
        location : [
            {
                lat : string,
                log : string,
            }
        ],
        phontos : string,
        description : string
    }]
}

// {"id":"669c42a6fdd4ca72f282d5dc","title":"La Colonial","location":[-34.638017,-59.27014],"photos":["https://res.cloudinary.com/dyi5til4r/image/upload/v1721516995/669c42a6fdd4ca72f282d5dc/restaurant-photos/669c42a6fdd4ca72f282d5dc/1721516995007.webp"], "description":"Restaurante y bar clásico al costado de la ruta 5"}