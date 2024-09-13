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
    @Matches(/^(1[0-2]|0?[1-9]):([0-5]?[0-9]):([0-5]?[0-9])$/)
    time : TimeStringFormat
    
    @IsNotEmpty()
    location : [{
        lat : string,
        log : string,
    }]
}