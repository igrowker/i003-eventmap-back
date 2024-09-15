import { IsEmail, IsString, MinLength, Matches } from 'class-validator';

export class AuthLoginDto {
  @IsEmail({}, { message: 'El email debe ser válido' })
  email: string;

  @IsString()
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
  @Matches(/[A-Z]/, { message: 'La contraseña debe contener al menos una letra mayúscula' })
  @Matches(/[a-z]/, { message: 'La contraseña debe contener al menos una letra minúscula' })
  @Matches(/[0-9]/, { message: 'La contraseña debe contener al menos un número' })
  password: string;
}