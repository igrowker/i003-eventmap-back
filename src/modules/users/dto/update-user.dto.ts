import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsString, IsBoolean, IsOptional } from 'class-validator';
import { Role } from 'src/utils/enum';

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
    role?: Role;

    @IsOptional()
    @IsString()
    lastLogin?: string;

    @IsOptional()
    events?: any[];

    @IsOptional()
    @IsBoolean()
    state?: boolean;
}