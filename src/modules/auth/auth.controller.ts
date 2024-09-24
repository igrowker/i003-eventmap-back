import { Controller,Post, Body, HttpCode, HttpStatus, HttpException, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDto } from './dto/auth.login.dto';
import { CreateUserDto } from './dto/auth.register.dto';

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
      return await this.authService.signIn(loginDto);
      
    } catch (error) {
      throw new HttpException('Error al intentar iniciar sesion', HttpStatus.BAD_REQUEST)
    }
  }
}
