import * as nodemailer from 'nodemailer';

export const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    from: '"Event Map" <no-reply@eventmap.com>',
  });
};
