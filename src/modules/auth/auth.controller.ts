import { Controller, Post, Body, Get, HttpCode, HttpStatus, HttpException, Res, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDto } from './dto/auth.login.dto';
import { CreateUserDto } from './dto/auth.register.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { JwtAuthGuard } from '../../guards/auth/jwtAuth.guard'
import { userSelf } from '../../guards/auth/userSelf.guard'
import { User } from '@prisma/client';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('register')
  async create(@Res({ passthrough: true }) res: Response, @Body() createUserDto: CreateUserDto) {
    return await this.authService.signUp(createUserDto);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: AuthLoginDto) {
    return await this.authService.signIn(loginDto);
  }
}

