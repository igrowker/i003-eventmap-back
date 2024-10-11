import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength } from "class-validator";

export class SubscribeDto{
    @IsString()
    @IsNotEmpty({ message: 'Correo electrónico es obligatorio' })
    @IsEmail({}, { message: 'El correo electrónico debe ser una dirección de correo válida y tener un dominio permitido.' })
    @MaxLength(70, { message: 'El número máximo de caracteres ha sido excedido.' })
    @Matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { message: 'El correo debe tener un formato válido (sin espacios y con un dominio correcto).' })
    email: string;
}