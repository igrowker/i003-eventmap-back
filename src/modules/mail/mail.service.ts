import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { createTransporter } from './config/nodemailer.config';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { PrismaService } from '../../prisma.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import * as nodemailer from 'nodemailer';
import * as fs from 'fs';
import * as path from 'path';
import { SubscribeDto } from './dto/subscribe.dto';
import { EventsService } from '../events/events.service';

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly eventsService: EventsService
  ) {
    this.transporter = createTransporter();
  }

  async sendResetPasswordEmail(to: string, token: string) {
    const resetLink = `${process.env.FRONTEND_URL}/restore-password/reset-password?token=${token}`;
    const templatePath = path.join(process.cwd(), 'src', 'utils', 'emailTemplate.html');

    let emailTemplate = fs.readFileSync(templatePath, 'utf-8');
    emailTemplate = emailTemplate.replace('{{resetLink}}', resetLink);

    const mailOptions = {
      from: '"Event Map" <no-reply@eventmap.com>',
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

  async sendNotificationsToEmail(to: string, events: any) {
    try {
      const templatePath = path.join(process.cwd(), 'src', 'utils', 'notificationTemplate.html');
      let emailTemplate = fs.readFileSync(templatePath, 'utf-8');
  
      // Filtrar los eventos y tomar los tres primeros
      const eventsHighAmount = events.filter((event: any) => event.amount >= 0.8).slice(0, 3);
  
      // Genera el HTML de la lista de eventos
      const eventList = eventsHighAmount.map((event: any) => `
<tr>
<td style="display: inline-block; width: 80%; vertical-align: top; background-color: #f9f9f9; border-radius: 10px; margin-bottom:20px;">
    <!-- Texto a la izquierda -->
    <table cellpadding="0" cellspacing="0" align="left" class="es-left" role="none" style="width:48%; float:left; padding-right:2%;">
      <tr>
        <td align="left">
          <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
            <tr>
              <td align="left" style="padding-bottom:0px">
                <h5 class="es-m-txt-l" style="color:#333333;font-size:20px;font-weight:bold;">${event.name}</h5>
              </td>
            </tr>
            <tr>
              <td align="left" style="padding-bottom:0px">
                <p style="color:#666666;font-size:16px; margin:px">Fecha: ${event.date} | Tipo: ${event.type} | Cantidad: ${event.amount}</p>
              </td>
            </tr>
            <tr>
              <td align="left" style="padding-bottom:0px">
                <p style="color:#666666;font-size:14px">${event.description}</p>
              </td>
            </tr>
            <tr>
              <td align="left" style="padding-top:10px">
                <a href="https://i003-eventmap-front.vercel.app/events/${event.id}" target="_blank" style="color:#ffffff;font-size:16px;padding:10px 20px;background-color:#5C68E2;border-radius:5px;text-decoration:none;display:inline-block;">Ver más</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    
    <!-- Imagen a la derecha -->
    <table cellspacing="0" align="right" class="es-right" role="none" style="width:48%; float:right;">
      <tr>
        <td align="center" style="width:100%;border-radius:8px;overflow:hidden;">
          <img src="${event.photos[0]}" alt="${event.name}" width="60%" style="display:block;border:0;outline:none;text-decoration:none;border-radius:8px;">
        </td>
      </tr>
    </table>
  </td>
</tr>

      `).join('');
  
      // Busca y reemplaza el <tbody> con la nueva lista de eventos
      const tbodyRegex = /<tbody id="eventList">(.*?)<\/tbody>/s;
      emailTemplate = emailTemplate.replace(tbodyRegex, `<tbody id="eventList">${eventList}</tbody>`);
  
      const mailOptions = {
        from: '"Event Map" <your-email@example.com>',
        to,
        subject: 'Notificaciones de Eventos',
        html: emailTemplate,
      };
  
      // Enviar el correo
      await this.transporter.sendMail(mailOptions);
    } catch (error) {
      console.error('Error al enviar el correo:', error);
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

  async subscribe(sub: SubscribeDto) {
    const { email } = sub;

    //xq el modulo de mail necesita del service de cloudinary si getEvents no usa cloudinary ?, osea usa las url generadas por cloudinary pero no crea ni elimina nada
    try {
      //guardarlo en una tabla de emails (esto capaz implementarlo a futuro)s

      const events = await this.eventsService.getEventsWhitoutFilter();

      await this.sendNotificationsToEmail(email, events);

    } catch (error) {
      console.log(error);
    }

    return true;
  }

}
