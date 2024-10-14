import { 
  IsEmail, 
  IsNotEmpty, 
  IsString, 
  IsBoolean, 
  IsOptional,
  MinLength,
  Matches,
  IsArray,
  MaxLength,
  IsEnum
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/utils/enum';

export class CreateUserDto {
  @ApiProperty({
    description: 'Nombre del usuario',
    example: 'Juan',
  })
  @IsString()
  @IsNotEmpty({ message: 'Nombre es obligatorio' })
  @MinLength(1, { message: 'La nombre debe tener al menos 1 caracteres.' })
  @MaxLength(50, { message: 'El número máximo de dígitos ha sido excedido.' })
  @Matches(/^[A-Za-z\s]+$/, { message: 'El nombre debe contener sólo letras y espacios' })
  name: string;

  @ApiProperty({
    description: 'Apellido del usuario',
    example: 'Pérez',
  })
  @IsString()
  @IsNotEmpty({ message: 'Apellido es obligatorio' })
  @MinLength(1, { message: 'La apellido debe tener al menos 1 caracteres.' })
  @MaxLength(50, { message: 'El número máximo de dígitos ha sido excedido.' })
  @Matches(/^[A-Za-z\s]+$/, { message: 'El apellido debe contener solo letras y espacios' })
  lastName: string;

  @ApiProperty({
    description: 'Correo electrónico del usuario',
    example: 'juan.perez@example.com',
  })
  @IsString()
  @IsNotEmpty({ message: 'Correo electrónico es obligatorio' })
  @IsEmail({}, { message: 'El correo electrónico debe ser una dirección de correo válida y tener un dominio permitido.' })
  @MinLength(1, { message: 'La apellido debe tener al menos 1 caracteres.' })
  @MaxLength(70, { message: 'El número máximo de caracteres ha sido excedido.' })
  @Matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { message: 'El correo debe tener un formato válido (sin espacios y con un dominio correcto).' })
  email: string;

  @ApiProperty({
    description: 'Contraseña del usuario',
    example: 'MyStrongP@ssw0rd',
  })
  @IsString()
  @IsNotEmpty({ message: 'Contraseña es obligatorio' })
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres.' })
  @MaxLength(30, { message: 'El número máximo de dígitos ha sido excedido.' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,30}$/, {
    message: 'La contraseña debe tener entre 8 y 30 caracteres, incluir al menos una mayúscula, una minúscula, un número y un carácter especial.',
  })
  password: string;

  @ApiProperty({
    description: 'CUIT del usuario',
    example: '20-12345678-9',
  })
  @IsString()
  @IsNotEmpty({ message: 'Cuit es obligatorio' })
  @Matches(/^\d{2}-\d{8}-\d{1}$/, { message: 'La CUIT deberá seguir el formato XX-XXXXXXXXX-X' })
  cuit: string;

  @ApiProperty({
    description: 'Rol del usuario (opcional)',
    example: 'Company',
    required: false,
  })
  @IsOptional()
  @IsEnum(Role, { message: "El rol debe ser 'Company' o 'Admin'" })
  rol: Role;

  @ApiProperty({
    description: 'Eventos asociados al usuario (opcional)',
    type: [String],
    required: false,
  })
  @IsOptional()
  @IsArray()
  events?: any[];

  @ApiProperty({
    description: 'Estado del usuario (opcional)',
    example: true,
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  state?: boolean;
}