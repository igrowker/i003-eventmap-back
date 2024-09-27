import { IsEmail, Matches, IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class AuthLoginDto {
  @IsString()
  @IsNotEmpty({ message: 'Correo electrónico es obligatorio' })
  @IsEmail({}, { message: 'El correo electrónico debe ser una dirección de correo válida y tener un dominio permitido.' })
  @MaxLength(70, { message: 'El número máximo de caracteres ha sido excedido.' })
  @Matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { message: 'El correo debe tener un formato válido (sin espacios y con un dominio correcto).' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Contraseña es obligatoria' })
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres.' })
  @MaxLength(25, { message: 'El número máximo de dígitos ha sido excedido.' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,16}$/, {
    message: 'La contraseña debe tener entre 8 y 16 caracteres, incluir al menos una mayúscula, una minúscula y un carácter especial.',
  })  
  password: string;
}