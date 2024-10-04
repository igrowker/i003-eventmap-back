import { ConflictException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException,  BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthLoginDto } from './dto/auth.login.dto';
import { PrismaService } from '../../prisma.service';
import { CreateUserDto } from './dto/auth.register.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { MailService } from '../mail/mail.service';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { v4 as uuidv4 } from 'uuid';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private mailService: MailService
  ) { }


  async signUp(createUserDto: CreateUserDto) {
    try {
      const errors = [];

      const existingUserEmail = await this.prisma.user.findUnique({ where: { email: createUserDto.email } });
      if (existingUserEmail) {
        errors.push('Email already in use');
      }

      const existingUserCuit = await this.prisma.user.findUnique({ where: { cuit: createUserDto.cuit } });
      if (existingUserCuit) {
        errors.push('CUIT already in use');
      }

      if (errors.length > 0) {
        throw new ConflictException(errors);
      }

      const passwordHash: string = await bcrypt.hash(createUserDto.password, 10);

      const newUser = await this.prisma.user.create({
        data: {
          id: uuidv4(),
          name: createUserDto.name,
          lastName: createUserDto.lastName,
          email: createUserDto.email,
          password: passwordHash,
          cuit: createUserDto.cuit,
          lastLogin: "",
          state: createUserDto.state || true,
        },
      });


      return { message: `Usuario creado con éxito. ¡Bienvenido, ${newUser.name}!` };

    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }
      throw new InternalServerErrorException('Error al crear el usuario');
    }
  }

  async signIn(loginDto: AuthLoginDto) {
    const { email, password } = loginDto;

    try {
      const user = await this.prisma.user.findUnique({
        where: { email },
        include: {
          events: true,
        }
      });

      if (!user) {
        throw new UnauthorizedException('Los datos ingresados no son correctos');
      }

      const passwordValid = await bcrypt.compare(password, user.password);
      if (!passwordValid) {
        throw new UnauthorizedException('Los datos ingresados no son correctos');
      }

      const payload = { sub: user.id, email: user.email, rol: user.rol };
      const token = this.jwtService.sign(payload);

      await this.prisma.user.update({
        where: { id: user.id },
        data: { lastLogin: new Date().toISOString() }
      });

      return {
        profile: {
          name: user.name,
          lastName: user.lastName,
          email: user.email,
          cuil: user.cuit,
          rol: user.rol,
          state: user.state,
          events: user.events
        },
        token
      }
    } catch (error) {
      throw error
    }
  }

  async requestPasswordReset(forgotPasswordDto: ForgotPasswordDto) {
    const { email } = forgotPasswordDto;
  
    try {
      const user = await this.prisma.user.findUnique({ where: { email } });
      if (!user) {
        throw new NotFoundException('Usuario no encontrado');
      }
  
      const token = this.jwtService.sign({ userId: user.id }, { expiresIn: '2h' });
      await this.mailService.sendResetPasswordEmail(user.email, token);
  
      return { message: 'Correo de recuperación enviado' };
    } catch (error) {
      console.error('Error en el proceso de solicitud de restablecimiento de contraseña:', error);
      throw new InternalServerErrorException('Ocurrió un error al procesar tu solicitud.');
    }
  }

  async verifyToken(token: string): Promise<User> {
    try {
      console.log('Verificando token:', token); // Log del token recibido
      const decoded = this.jwtService.verify(token);
      console.log('Token verificado:', decoded); // Log del contenido del token decodificado
  
      const user = await this.prisma.user.findUnique({ where: { id: decoded.userId } });
      if (!user) {
        throw new NotFoundException('Usuario no encontrado');
      }
  
      console.log('Usuario encontrado:', user); // Log del usuario encontrado
      return user; // Retornar el usuario si se verifica correctamente
    } catch (error) {
      console.error('Error al verificar el token:', error); // Log del error
      throw new UnauthorizedException('Token inválido o expirado.');
    }
  }
  
  

  async resetPassword(token: string, resetPasswordDto: ResetPasswordDto) {
    try {
        console.log('Token recibido en resetPassword:', token); // Log para verificar el toke
        // Verifica el token y obtiene el usuario
        const decoded = this.jwtService.verify(token);
        console.log('Token verificado'); // Log de verificación exitosa
        console.log('Datos decodificados:', decoded); // Log de datos decodificados

        const user = await this.prisma.user.findUnique({ where: { id: decoded.userId } });
        
        if (!user) {
            throw new NotFoundException('Usuario no encontrado.');
        }

        // Comprobar que las contraseñas coincidan
        if (resetPasswordDto.newPassword !== resetPasswordDto.repeatPassword) {
            throw new BadRequestException('Las contraseñas no coinciden.');
        }

        // Hashear la nueva contraseña
        const hashedPassword = await bcrypt.hash(resetPasswordDto.newPassword, 10);

        // Actualizar la contraseña en la base de datos
        await this.prisma.user.update({
            where: { id: user.id },
            data: { password: hashedPassword },
        });

        return { message: 'Contraseña actualizada correctamente.' };

    } catch (error) {
        console.error('Error al restablecer la contraseña:', error); // Log de error
        throw new InternalServerErrorException('Ocurrió un error al procesar la solicitud de restablecimiento de contraseña.');
    }
}
}

