import { 
  IsEmail, 
  IsNotEmpty, 
  IsString, 
  IsBoolean, 
  IsOptional,
  MinLength,
  Matches,
  IsArray 
} from 'class-validator';

export class CreateUserDto {
    @IsString()
    @MinLength(2)
    @Matches(/^[A-Za-z\s]+$/, { message: 'El nombre debe contener sólo letras' })
    name: string;
  
    @IsString()
    @Matches(/^[A-Za-z\s]+$/, { message: 'El apellido debe contener solo letras' })
    lastName: string;

    @IsEmail({}, { message: 'El correo electrónico debe ser una dirección de correo electrónico válida y tener un dominio permitido' })
    @Matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    email: string;

    @IsString()
    @Matches(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,20}$/, { message: 'La contraseña debe tener entre 8 y 16 caracteres, al menos una letra mayúscula, una letra minúscula y un número' })
    @Matches(/^(?!.*(password|123456|admin))/, { message: 'La contraseña no puede ser "password", "123456" o "admin"' })
    password: string;
  
    @IsNotEmpty()
    @IsString()
    @Matches(/^\d{2}-?\d{8}-?\d{1}$/, { message: 'La CUIT deberá seguir el formato XX-XXXXXXXXX-X o XXXXXXXXXXX' })
    cuit: string;
  
    @IsNotEmpty()
    @IsString()
    rol?: string;
  
    @IsOptional()
    @IsArray()
    events?: any[];
    
    @IsOptional()
    @IsBoolean()
    state?: boolean;
}