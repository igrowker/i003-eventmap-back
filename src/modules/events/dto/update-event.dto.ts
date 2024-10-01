import { IsOptional, IsString, IsNotEmpty, IsArray, IsNumber, Matches, IsDateString } from 'class-validator';
import { TypeEvents } from 'src/utils/enum';

export class UpdateEventDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsString()
  @Matches(/^(Deportivo|Artistico|Gastronomico)$/i, { message: 'El tipo de evento debe ser uno de los siguientes: Deportivo, Artistico, Gastronomico' })
  type?: TypeEvents;

  @IsOptional()
  @IsDateString()
  date?: string;

  @IsOptional()
  @Matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, { message: 'El formato de hora debe ser HH:MM (24 horas)' })
  time?: string;

  @IsOptional()
  location?: { lat: string; log: string };

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  photos?: string[];

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  amount?: number;

  @IsOptional()
  @IsString()
  comment?: string;
}
