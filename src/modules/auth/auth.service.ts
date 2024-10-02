import { ConflictException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthLoginDto } from './dto/auth.login.dto';
import { PrismaService } from '../../prisma.service';
import { CreateUserDto } from './dto/auth.register.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { MailService } from '../mail/mail.service';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { v4 as uuidv4 } from 'uuid';
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

  
      return {message : `Usuario creado con éxito. ¡Bienvenido, ${newUser.name}!`};
      
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

    const user = await this.prisma.user.findUnique({ where: { email }});
    if(!user) {
      throw new NotFoundException('Usuario no encontrado');
    }

    const token = this.jwtService.sign({ userId: user.id }, { expiresIn: '1h' }); // menos tiempo de expiracion
    await this.mailService.sendResetPasswordEmail(user.email, token);

    return { message: 'Correo de recuperacion enviado' };

  }

  async resetPassword(token: string, resetPassword: ResetPasswordDto) {

    try {
      const decoded = this.jwtService.verify(token); // agregar mensaje 
   
      const user = await this.prisma.user.findUnique({ where: { id: decoded.userId } });
      if(!user) {
        throw new NotFoundException('Usuario no encontrado');
      }

      const hashedPassword = await bcrypt.hash(resetPassword.newPassword, 10);
      //validacion si el hasheo es correcto
      await this.prisma.user.update({
        where: { id: user.id },
        data: { ...user, password: hashedPassword },

      });

      return { message: 'Contraseña actualizada correctamente' };
    } catch (error) {
       throw new UnauthorizedException('Token invalido o expirado');
    }
  }
}
