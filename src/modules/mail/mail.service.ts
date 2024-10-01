import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail', // Puedes cambiar el servicio de correo aquí
      auth: {
        user: process.env.EMAIL_USER, // Tu email
        pass: process.env.EMAIL_PASSWORD, // Contraseña de la cuenta de correo
      },
    });
  }

  async sendResetPasswordEmail(to: string, token: string) {
    const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;

    const mailOptions = {
      from: process.env.EMAIL_USER, // Desde qué email se enviará
      to,
      subject: 'Recuperación de contraseña',
      text: `Haz clic en el siguiente enlace para recuperar tu contraseña: ${resetLink}`,
      html: `<p>Haz clic en el siguiente enlace para recuperar tu contraseña:</p>
             <a href="${resetLink}">Recuperar Contraseña</a>`,
    };

    try {
      await this.transporter.sendMail(mailOptions);
    } catch (error) {
      console.error('Error al enviar correo electrónico:', error);
      throw new Error('Error enviando el correo');
    }
  }
}
