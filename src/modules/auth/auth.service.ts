import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthLoginDto } from './dto/auth.dto';
import { PrismaService } from '../../prisma.service';
import * as bcrypt from 'bcrypt';
import dotenvOptions from 'src/config/dotenvConfig';


@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) { }

  async login(loginDto: AuthLoginDto) {
    const { email, password } = loginDto;

    try {
      const user = await this.prisma.user.findUnique({
        where: { email },
        include: {
          events: true,
        }
      });


      //reemplazar los mensajes por algo generico para no dar pistas en q se equivoco
      if (!user) {
        throw new UnauthorizedException('No esta registrado ese email');
      }

      const passwordValid = await bcrypt.compare(password, user.password)
      if (!passwordValid) {
        throw new UnauthorizedException('Contraseña incorrecta');
      }

      const payload = { sub: user.id, email: user.email, rol: user.rol };
      const token = this.jwtService.sign(payload);

      await this.prisma.user.update({
        where: { id: user.id },
        data: { lastLogin: new Date().toISOString() }
      });

      return {
        profile: {
          name: user.name,
          lastName: user.lastName,
          email: user.email,
          cuil: user.cuit,
          rol: user.rol,
          state: user.state,
          events: user.events
        },
        token
      }
    } catch (error) {
      throw error
    }
  }
}
