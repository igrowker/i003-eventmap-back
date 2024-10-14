import { IsEmail, Matches, IsString, IsNotEmpty, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ForgotPasswordDto {
  @ApiProperty({
    description: 'El correo electrónico del usuario para el que se solicita el restablecimiento de la contraseña.',
    example: 'user@example.com',
  })
  @IsString()
  @IsNotEmpty({ message: 'Correo electrónico es obligatorio' })
  @IsEmail({}, { message: 'El correo electrónico debe ser una dirección de correo válida y tener un dominio permitido.' })
  @MaxLength(70, { message: 'El número máximo de caracteres ha sido excedido.' })
  @Matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { message: 'El correo debe tener un formato válido (sin espacios y con un dominio correcto).' })
  email: string;
}
