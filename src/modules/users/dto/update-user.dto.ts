import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsNotEmpty, IsString, IsBoolean, IsOptional } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    name: string;
  
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    lastName: string;
  
    @IsEmail()
    @IsOptional()
    email: string;
  
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    password: string;
  
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    cuit: string;
  
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    rol: string;

    @IsOptional()
    lastLogin?: Date;
  
    @IsOptional()
    events?: any[];
  
    @IsBoolean()
    @IsOptional()
    state?: boolean;
}
