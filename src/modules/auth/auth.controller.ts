import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, HttpException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: AuthLoginDto) {
    try {
      return await this.authService.login(loginDto);
      
    } catch (error) {
      throw new HttpException('Error al intentar iniciar sesion', HttpStatus.BAD_REQUEST)
    }
  }
}
