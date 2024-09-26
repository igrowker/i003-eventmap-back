import { IsEmail, Matches, IsNotEmpty } from 'class-validator';

export class AuthLoginDto {
  @IsEmail({}, { message: 'Formato de correo electrónico no válido' })
  @IsNotEmpty({ message: 'Correo electrónico es obligatorio' })
  email: string;

  @IsNotEmpty({ message: 'Contraseña es obligatoria' })
  @Matches(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/, {  //cambiar la regx para q acepte caracteres especiales en el medio passar
    message: 'La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número' 
  })
  password: string;
}