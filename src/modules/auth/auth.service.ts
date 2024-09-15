import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthLoginDto } from './dto/auth.dto';
import { PrismaService } from 'src/prisma.service'; // Suponiendo que tienes un servicio Prisma para acceder a la DB

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService
  ) {}

  async login(loginDto: AuthLoginDto) {
    const { email, password } = loginDto;
    
    // Busca al usuario por correo electrónico
    const user = await this.prisma.user.findUnique({
      where: { email },
      include: {
        profile: true, // Asegúrate de tener la relación de perfil en el modelo
        events: true,  // Asegúrate de tener la relación de eventos en el modelo
      },
    });

    // Validar la existencia del usuario y su contraseña
    if (!user || user.password !== password) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    // Generar el token JWT
    const payload = { sub: user.id, email: user.email };
    const token = this.jwtService.sign(payload);

    // Devolver el perfil del usuario y el token
    return {
      profile: {
        name: user.profile.name,
        lastName: user.profile.lastName,
        email: user.email,
        cuil: user.profile.cuil,
        rol: user.role, // Asumiendo que tienes un rol definido
        state: user.profile.state,
        events: user.events, // Eventos asociados al usuario
      },
      token,
    };
  }
}
