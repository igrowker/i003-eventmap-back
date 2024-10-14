import { IsString, IsNotEmpty, IsDateString, Matches, IsNumber, Min, Max, IsOptional, IsDate } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { TypeEvents } from 'src/utils/enum';
import { DateStringFormat, TimeStringFormat } from 'src/utils/types';

export class CreateEventDto {
  @ApiProperty({
    description: 'ID del usuario que crea el evento',
    example: '4ca24b91-70c2-47ca-aee9-4f54b8f8eec5',
  })
  @IsNotEmpty()
  @IsString()
  userId: string;

  @ApiProperty({
    description: 'Nombre del evento',
    example: 'Torneo rugby',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Tipo de evento: Deportivo, Artistico o Gastronomico',
    example: 'Deportivo',
  })
  @IsString()
  @IsNotEmpty()
  @Matches(/^(Deportivo|Artistico|Gastronomico)$/i, { message: 'El evento debe de ser una de estas opciones: Deportivo, Artistico, Gastronomico' })
  type: TypeEvents;

  @ApiProperty({
    description: 'Fecha del evento en formato YYYY-MM-DD',
    example: '2024-10-12',
  })
  @IsDateString()
  @IsNotEmpty()
  date: DateStringFormat;

  @ApiProperty({
    description: 'Hora del evento en formato HH:MM',
    example: '15:30',
  })
  @IsNotEmpty()
  @Matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)
  time: TimeStringFormat;

  @ApiProperty({
    description: 'Latitud de la ubicación del evento',
    example: -34.603722,
  })
  @IsNumber()
  @IsNotEmpty()
  lat: number;

  @ApiProperty({
    description: 'Longitud de la ubicación del evento',
    example: -58.381592,
  })
  @IsNumber()
  @IsNotEmpty()
  lon: number;

  @ApiProperty({
    description: 'Descripción del evento',
    example: 'Partido de rugby amistoso',
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({
    description: 'intensidad',
    example: 0.5,
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(0, { message: 'El valor debe ser mayor o igual a 0' })
  @Max(1, { message: 'El valor debe ser menor o igual a 1' })
  amount: number;
  

  @ApiPropertyOptional({ description: 'Fecha de creación del evento', example: '2024-09-30' })
  @IsOptional()
  @IsDate()
  createdAt?: Date;

  
  @ApiProperty({
    description: 'Capacidad máxima de personas para el evento',
    example: '100',
  })
  @IsString()
  @IsNotEmpty()
  capacity: string;

  @ApiProperty({
    description: 'Dirección del evento',
    example: 'Los Laureles, Buenos Aires',
  })
  @IsString()
  @IsNotEmpty()
  addres: string;

  @ApiProperty({
    description: 'Archivos de imágenes relacionados al evento',
    type: 'array',
    items: { type: 'string', format: 'binary' },
  })
  @IsOptional()
  files?: Array<Express.Multer.File>;
}
