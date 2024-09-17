import { 
  IsEmail, 
  IsNotEmpty, 
  IsString, 
  IsBoolean, 
  IsOptional, 
  IsNumber, 
  IsDate, 
  Matches,
  IsArray 
} from 'class-validator';

export class CreateUserDto {
    @IsString()
    @Matches(/^[A-Za-z\s]+$/, { message: 'El nombre debe contener sólo letras y espacios' })
    name: string;
  
    @IsString()
    @Matches(/^[A-Za-z\s]+$/, { message: 'El apellido debe contener solo letras y espacios' })
    lastName: string;

    @IsEmail({}, { message: 'El correo electrónico debe ser una dirección de correo electrónico válida' })
    email: string;

    @IsString()
    @Matches(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/, { message: 'Los requisitos de contraseña incluyen una longitud de entre 8 y 16 caracteres, con al menos un dígito, una letra minúscula y una letra mayúscula' })
    password: string;
  
    @IsNotEmpty()
    @IsString()
    @Matches(/^\d{2}-\d{8}-\d{1}$/, { message: 'La CUIT deberá seguir el formato XX-XXXXXXXXX-X' })
    cuit: string;
  
    @IsNotEmpty()
    @IsString()
    rol: string;

    @IsOptional()
    @IsString()
    lastLogin?: string;
  
    @IsOptional()
    @IsArray()
    events?: any[];
    
    @IsBoolean()
    @IsOptional()
    state?: boolean;
}