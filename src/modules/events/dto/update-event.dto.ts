import { IsOptional, IsString, IsArray, IsNumber, Matches, IsDateString, IsNotEmpty, IsDate } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { TypeEvents } from 'src/utils/enum';

export class UpdateEventDto {
  @ApiProperty({
    description: 'ID del evento',
    example: '4ca24b91-70c2-47ca-aee9-4f54b8f8eec5',
    required: false,
  })
  @IsString()
  @IsOptional()
  id?: string;

  @ApiProperty({
    description: 'Nombre del evento',
    example: 'Torneo rugby',
    required: false,
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({
    description: 'Tipo de evento: Deportivo, Artistico o Gastronomico',
    example: 'Deportivo',
    required: false,
  })
  @IsString()
  @Matches(/^(Deportivo|Artistico|Gastronomico)$/i, { message: 'El tipo de evento debe ser uno de los siguientes: Deportivo, Artistico, Gastronomico' })
  @IsOptional()
  type?: TypeEvents;

  @ApiProperty({
    description: 'Fecha del evento en formato YYYY-MM-DD',
    example: '2024-10-12',
    required: false,
  })
  @IsOptional()
  @IsDateString()
  date?: string;

  @ApiProperty({
    description: 'Hora del evento en formato HH:MM',
    example: '15:30',
    required: false,
  })
  @IsOptional()
  @Matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, { message: 'El formato de hora debe ser HH:MM (24 horas)' })
  time?: string;

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
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'Intensidad del evento',
    example: 0.5,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  amount?: number;
  
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
    description: 'Archivos relacionados al evento',
    type: 'array',
    items: { type: 'string', format: 'binary' },
    required: false,
  })
  @IsOptional()
  files?: Array<Express.Multer.File>;
}
