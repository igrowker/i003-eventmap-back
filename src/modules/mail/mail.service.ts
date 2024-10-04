import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail', 
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async sendResetPasswordEmail(to: string, token: string) {
    const resetLink = `${process.env.FRONTEND_URL}/auth/reset-password?token=${token}`;
    console.log(resetLink);

    const templatePath = path.join(process.cwd(), 'src', 'utils', 'emailTemplate.html');

    let emailTemplate = fs.readFileSync(templatePath, 'utf-8');

    emailTemplate = emailTemplate.replace('{{resetLink}}', resetLink);

    const mailOptions = {
      from: process.env.EMAIL_USER, 
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
}
