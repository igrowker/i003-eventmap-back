import { IsEmail, IsNotEmpty, IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name: string;
  
    @IsNotEmpty()
    @IsString()
    lastName: string;
  
    @IsEmail()
    email: string;
  
    @IsNotEmpty()
    @IsString()
    password: string;
  
    @IsNotEmpty()
    @IsString()
    cuit: string;
  
    @IsNotEmpty()
    @IsString()
    rol: string;

    @IsOptional()
    lastLogin?: Date;
  
    @IsOptional()
    events?: any[];
  
    @IsBoolean()
    @IsOptional()
    state?: boolean;
}
