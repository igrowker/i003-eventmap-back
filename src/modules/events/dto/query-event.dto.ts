import { IsNotEmpty, IsString } from "class-validator"

export class QueryEventsDto{
    @IsString({message : "La latitud del usuario es requerida y tiene q ser un string"})
    @IsNotEmpty({message : "La latitud del usuario no puede ser vacio"})
    lat : string

    @IsString({message : "La longitud del usuario es requerida y tiene q ser un string"})
    @IsNotEmpty({message : "La longitud del usuario no puede ser vacio"})
    lon : string
}