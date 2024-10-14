import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class QueryEventsDto {
  @ApiProperty({
    description: 'Latitud de la ubicación del usuario para la búsqueda de eventos',
    example: '-34.603722',
  })
  @IsString({ message: 'La latitud del usuario es requerida y tiene que ser un string' })
  @IsNotEmpty({ message: 'La latitud del usuario no puede estar vacía' })
  lat: string;

  @ApiProperty({
    description: 'Longitud de la ubicación del usuario para la búsqueda de eventos',
    example: '-58.381592',
  })
  @IsString({ message: 'La longitud del usuario es requerida y tiene que ser un string' })
  @IsNotEmpty({ message: 'La longitud del usuario no puede estar vacía' })
  lon: string;
}