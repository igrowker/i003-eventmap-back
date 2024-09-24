import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, HttpException, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDto } from './dto/auth.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async create(@Res({ passthrough: true}) res: Response, @Body() createUserDto: CreateUserDto) {
    try {
      return await this.authService.signUp(createUserDto);
    } catch (error) {
      throw new HttpException('Error al intentar registrarse', HttpStatus.BAD_REQUEST)
    }
  }

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
