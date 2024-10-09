import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { PrismaService } from '../../prisma.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import * as nodemailer from 'nodemailer';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class MailService { // pasar congig de nodemailer a una carpeta config
  private transporter: nodemailer.Transporter;

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService
  ) {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async sendResetPasswordEmail(to: string, token: string) {
    const resetLink = `${process.env.FRONTEND_URL}/restore-password/reset-password?token=${token}`;
    const templatePath = path.join(process.cwd(), 'src', 'utils', 'emailTemplate.html');

    let emailTemplate = fs.readFileSync(templatePath, 'utf-8');
    emailTemplate = emailTemplate.replace('{{resetLink}}', resetLink);

    const mailOptions = {
      from: 'EventMap',
      to,
      subject: 'Recuperación de contraseña',
      html: emailTemplate,
    };

    try {
      await this.transporter.sendMail(mailOptions);
    } catch (error) {
      console.error('Error al enviar correo electrónico:', error);
      throw new Error('Error enviando el correo');
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

      await this.sendResetPasswordEmail(user.email, token);

      return { message: 'Correo de recuperación enviado' };
    } catch (error) {
      console.error('Error en la solicitud de restablecimiento de contraseña:', error);
      throw new InternalServerErrorException('Ocurrió un error al procesar tu solicitud.');
    }
  }

  async verifyToken(token: string): Promise<User> {
    try {
      const decoded = this.jwtService.verify(token);
      const user = await this.prisma.user.findUnique({ where: { id: decoded.userId } });
      if (!user) {
        throw new NotFoundException('Usuario no encontrado');
      }
      return user;
    } catch (error) {
      throw new UnauthorizedException('Token inválido o expirado.');
    }
  }

  async resetPassword(token: string, resetPasswordDto: ResetPasswordDto) {
    try {
      const decodedUser = await this.verifyToken(token);

      const user = await this.prisma.user.findUnique({ where: { id: decodedUser.id } });

      if (!user) {
        throw new NotFoundException('Usuario no encontrado.');
      }

      if (resetPasswordDto.newPassword !== resetPasswordDto.repeatPassword) {
        throw new BadRequestException('Las contraseñas no coinciden.');
      }

      const hashedPassword = await bcrypt.hash(resetPasswordDto.newPassword, 10);

      await this.prisma.user.update({
        where: { id: user.id },
        data: { password: hashedPassword },
      });

      return { message: 'Contraseña actualizada correctamente.' };
    } catch (error) {
      throw new InternalServerErrorException('Ocurrió un error al procesar la solicitud de restablecimiento de contraseña.');
    }
  }
}
