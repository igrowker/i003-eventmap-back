import { Module } from '@nestjs/common';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';
import { PrismaService } from 'src/prisma.service';
import { EventsService } from '../events/events.service';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Module({
  controllers: [MailController],
  providers: [MailService, EventsService, CloudinaryService, PrismaService],
})
export class MailModule { }