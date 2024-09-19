import { IsEmail, Matches, IsNotEmpty } from 'class-validator';

export class AuthLoginDto {
  @IsEmail({}, { message: 'Formato de correo electrónico no válido' })
  @IsNotEmpty({ message: 'Correo electrónico es obligatorio' })
  email: string;

  @IsNotEmpty({ message: 'Contraseña es obligatoria' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/, { 
    message: 'La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número' 
  })
  password: string;
}