import { 
  IsEmail, 
  IsNotEmpty, 
  IsString, 
  IsBoolean, 
  IsOptional,
  MinLength,
  Matches,
  IsArray, 
  IsEnum
} from 'class-validator';

import { Role } from 'src/utils/enum';

export class CreateUserDto {
    @IsString()
    @MinLength(2)
    @Matches(/^[A-Za-z\s]+$/, { message: 'El nombre debe contener sólo letras y espacios' })
    name: string;
  
    @IsString()
    @Matches(/^[A-Za-z\s]+$/, { message: 'El apellido debe contener solo letras y espacios' })
    lastName: string;

    @IsEmail({}, { message: 'El correo electrónico debe ser una dirección de correo electrónico válida y tener un dominio permitido' })
    @Matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    email: string;

    @IsString()
    @Matches(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/, { message: 'La contraseña debe tener entre 8 y 16 caracteres, al menos una letra mayúscula, una letra minúscula y un número' })
    @Matches(/^(?!.*(password|123456|admin))/, { message: 'La contraseña no puede ser "password", "123456" o "admin"' })
    password: string;
  
    @IsNotEmpty()
    @IsString()
    @Matches(/^\d{2}-\d{8}-\d{1}$/, { message: 'La CUIT deberá seguir el formato XX-XXXXXXXXX-X' })
    cuit: string;
  
    @IsOptional()
    @IsNotEmpty()
    @IsEnum(Role, { message: "El rol debe ser 'Company' o 'Admin'" })
    rol: Role;
  
    @IsOptional()
    @IsArray()
    events?: any[];
    
    @IsBoolean()
    @IsOptional()
    state?: boolean;
}