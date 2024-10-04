import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from 'src/prisma.service';
import { MailModule } from '../mail/mail.module';

@Module({
  imports:[MailModule],
  controllers: [AuthController],
  providers: [AuthService, PrismaService],
})
export class AuthModule { }
