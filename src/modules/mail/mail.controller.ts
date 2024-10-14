import { Controller, Post, Body, Query, Res } from '@nestjs/common';
import { MailService } from './mail.service';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { SubscribeDto } from './dto/subscribe.dto';
import { Response } from 'express';
import { ApiBody, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('mail')
@Controller('restore-password')
export class MailController {
  constructor(private readonly mailService: MailService) { }

  @Post('forgot-password')
  @ApiBody({
    description: 'Solicita un enlace para restablecer la contraseña.',
    type: ForgotPasswordDto,
  })
  @ApiResponse({ status: 200, description: 'Correo enviado exitosamente.' })
  @ApiResponse({ status: 400, description: 'Petición inválida.' })
  async forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto) {
    return await this.mailService.requestPasswordReset(forgotPasswordDto);
  }

  @Post('reset-password')
  @ApiQuery({
    name: 'token',
    description: 'Token para validar el restablecimiento de la contraseña.',
    required: true,
  })
  @ApiBody({
    description: 'Datos necesarios para restablecer la contraseña.',
    type: ResetPasswordDto,
  })
  @ApiResponse({ status: 200, description: 'Contraseña restablecida exitosamente.' })
  @ApiResponse({ status: 400, description: 'Token inválido o datos incorrectos.' })
  async resetPassword(@Query('token') token: string, @Body() resetPasswordDto: ResetPasswordDto) {
    return await this.mailService.resetPassword(token, resetPasswordDto);
  }

  @Post('subscribe')
  @ApiBody({
    description: 'Datos para suscribirse a la lista de correos.',
    type: SubscribeDto,
  })
  @ApiResponse({ status: 200, description: 'Suscripción exitosa.' })
  @ApiResponse({ status: 400, description: 'Datos de suscripción inválidos.' })
  async subscribe(@Body() sub: SubscribeDto) {
    return await this.mailService.subscribe(sub);
  }
}

