import { Controller, Post, Body, Query, Res } from '@nestjs/common';
import { MailService } from './mail.service';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { SubscribeDto } from './dto/subscribe.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('mail')
@Controller('restore-password')
export class MailController {
  constructor(private readonly mailService:  MailService) { }

  @Post('forgot-password')
  async forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto) {
    return await this.mailService.requestPasswordReset(forgotPasswordDto);
  }

  @Post('reset-password')
  async resetPassword(@Query('token') token: string, @Body() resetPasswordDto: ResetPasswordDto) {
    return await this.mailService.resetPassword(token, resetPasswordDto);
  }

  @Post('subscribe')
  async subscribe(@Body() sub : SubscribeDto){
    return await this.mailService.subscribe(sub);
  }
}
