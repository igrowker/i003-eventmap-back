import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsString, IsBoolean, IsOptional } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    lastName?: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @IsString()
    password?: string;

    @IsOptional()
    @IsString()
    cuit?: string;

    @IsOptional()
    @IsString()
    rol?: string;

    @IsOptional()
    @IsString()
    lastLogin?: string;

    @IsOptional()
    events?: any[];

    @IsOptional()
    @IsBoolean()
    state?: boolean;
}