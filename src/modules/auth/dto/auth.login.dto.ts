import { IsEmail, Matches, IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthLoginDto {
  @ApiProperty({
    description: 'El correo electrónico del usuario',
    example: 'juan.perez@example.com',
  })
  @IsString()
  @IsNotEmpty({ message: 'Correo electrónico es obligatorio' })
  @IsEmail({}, { message: 'El correo electrónico debe ser una dirección de correo válida y tener un dominio permitido.' })
  @MaxLength(70, { message: 'El número máximo de caracteres ha sido excedido.' })
  @Matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { message: 'El correo debe tener un formato válido (sin espacios y con un dominio correcto).' })
  email: string;

  @ApiProperty({
    description: 'La contraseña del usuario',
    example: 'MyStrongP@ssw0rd',
  })
  @IsString()
  @IsNotEmpty({ message: 'Contraseña es obligatoria' })
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres.' })
  @MaxLength(30, { message: 'El número máximo de dígitos ha sido excedido.' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,30}$/, {
    message: 'La contraseña debe tener entre 8 y 30 caracteres, incluir al menos una mayúscula, una minúscula, un número y un carácter especial.',
  })
  password: string;
}