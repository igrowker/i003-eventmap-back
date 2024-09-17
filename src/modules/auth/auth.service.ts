import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthLoginDto } from './dto/auth.dto';
import { PrismaService } from '../../prisma.service';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
  constructor(
    private  prisma: PrismaService,
    private  jwtService: JwtService
  ) {}

  async login(loginDto: AuthLoginDto) {
    const { email, password } = loginDto;

    
    // Busca al usuario por correo electrónico
    let user = await this.prisma.user.findUnique({
      where: { email },
      // select: {
      //   id: true,        // Necesario para el payload JWT
      //   password: true,
      //   name: true,
      //   lastName: true,
      //   email: true,
      //   cuit: true,
      //   rol: true,
      //   state: true,
      //   events: true, // Si 'events' es un campo de texto
      // },
    });
    
      // Si no se encuentra el usuario, arrojar una excepción
  if (!user) {

    // throw new UnauthorizedException('Credenciales incorrectas');
    user = {
       email: "user@gmail.com",
       password: "Pass1234",
       name: "ulises",
       lastName: "rodriguez",
       id: 1,
       cuit: "258976156",
       rol: "usuario",
       state: true,
       events: [],
       createdAt: new Date(),
       updatedAt: new Date(),
       lastLogin: new Date()
    }
  }
    // Validar la existencia del usuario y su contraseña
    // if (!user || user.password !== password) {
    //   throw new UnauthorizedException('Credenciales incorrectas');
    // }

    const passwordValid = await bcrypt.compare(password, user.password);
    console.log(password)
    console.log(user.password)
    console.log(passwordValid)
    console.log('llego 1')
    if(passwordValid) {
      // hasta que los usuario no esten creados, probarlo sin el !
      throw new UnauthorizedException('Credenciales incorrectas')
    }
    console.log('llego 2')
    // Generar el token JWT
    const payload = { sub: user.id, email: user.email };
    const token = this.jwtService.sign(payload);

    console.log('llego 3')
  
    // Devolver el perfil del usuario y el token
    return {
      profile: {
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        cuil: user.cuit,
        rol: user.rol,
        state: user.state,
        events: user.events, // Eventos asociados al usuario
      },
      token,
    };
  }

  async hashPassword(password: string): Promise<string>{
    return await bcrypt.hash(password, 10);
  }
}
