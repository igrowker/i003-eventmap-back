import { Controller, Post, Body, HttpCode, HttpStatus, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDto } from './dto/auth.login.dto';
import { CreateUserDto } from './dto/auth.register.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('register')
  @ApiBody({
    description: 'Cuerpo de la solicitud para crear un nuevo usuario',
    type: CreateUserDto, // Referencia al DTO aquí
  })
  async create(@Res({ passthrough: true }) res: Response, @Body() createUserDto: CreateUserDto) {
    return await this.authService.signUp(createUserDto);
  }

  @Post('login')
  @ApiBody({
    description: 'Cuerpo de la solicitud para iniciar sesión',
    type: AuthLoginDto, 
  })
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: AuthLoginDto) {
    return await this.authService.signIn(loginDto);
  }
}