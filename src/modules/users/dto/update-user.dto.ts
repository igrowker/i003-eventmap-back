import { IsOptional, IsString, MinLength, MaxLength, Matches, IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
    @ApiProperty({
        description: 'Nombre del usuario',
        example: 'Juan',
        required: false,
    })
    @IsString()
    @IsOptional()
    @MinLength(1, { message: 'La nombre debe tener al menos 1 caracteres.' })
    @MaxLength(50, { message: 'El número máximo de dígitos ha sido excedido.' })
    @Matches(/^[A-Za-z\s]+$/, { message: 'El nombre debe contener sólo letras y espacios' })
    name?: string;

    @ApiProperty({
        description: 'Apellido del usuario',
        example: 'Pérez',
        required: false,
    })
    @IsString()
    @IsOptional()
    @MinLength(1, { message: 'La apellido debe tener al menos 1 caracteres.' })
    @MaxLength(50, { message: 'El número máximo de dígitos ha sido excedido.' })
    @Matches(/^[A-Za-z\s]+$/, { message: 'El apellido debe contener solo letras y espacios' })
    lastName?: string;

    @ApiProperty({
        description: 'Correo electrónico del usuario',
        example: 'juan.perez@example.com',
        required: false,
    })
    @IsString()
    @IsOptional()
    @IsEmail({}, { message: 'El correo electrónico debe ser una dirección de correo válida y tener un dominio permitido.' })
    @MaxLength(70, { message: 'El número máximo de caracteres ha sido excedido.' })
    @Matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { message: 'El correo debe tener un formato válido (sin espacios y con un dominio correcto).' })
    email?: string;

    @ApiProperty({
        description: 'Contraseña del usuario',
        example: 'MyNewStrongP@ssw0rd',
        required: false,
    })
    @IsString()
    @IsOptional()
    @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres.' })
    @MaxLength(30, { message: 'El número máximo de dígitos ha sido excedido.' })
    @Matches(/^(?!.*(password|123456|admin))/, { message: 'La contraseña no puede ser "password", "123456" o "admin"' })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,30}$/, {
        message: 'La contraseña debe tener entre 8 y 30 caracteres, incluir al menos una mayúscula, una minúscula, un número y un carácter especial.',
    })
    password?: string;

    @ApiProperty({
        description: 'CUIT del usuario',
        example: '20-12345678-9',
        required: false,
    })
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    @Matches(/^\d{2}-\d{8}-\d{1}$/, { message: 'La CUIT deberá seguir el formato XX-XXXXXXXXX-X' })
    cuit?: string;
}

