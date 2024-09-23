import { ConflictException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthLoginDto } from './dto/auth.dto';
import { PrismaService } from '../../prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../users/dto/create-user.dto';


@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) { }


  async signUp(createUserDto: CreateUserDto) {
    try {
      const errors = [];

      const existingUserEmail = await this.prisma.user.findUnique({ where: { email: createUserDto.email } });
      if (existingUserEmail) {
        errors.push('Email already in use');
      }
  
      const existingUserCuit = await this.prisma.user.findUnique({ where: { cuit: createUserDto.cuit } });
      if (existingUserCuit) {
        errors.push('CUIT already in use');
      }
  
      // busca exepciones si hay errores
      if (errors.length > 0) {
        throw new ConflictException(errors);
      }
  
      const passwordHash: string = await bcrypt.hash(createUserDto.password, 10);
  
      console.log("llego 1");

      console.log(createUserDto);
      console.log(createUserDto.rol);

      const newUser = await this.prisma.user.create({
        data: {
          name: createUserDto.name,
          lastName: createUserDto.lastName,
          email: createUserDto.email,
          password: passwordHash,
          cuit: createUserDto.cuit,
          // rol: createUserDto.rol || "",
          lastLogin: "",
          state: createUserDto.state || true,
        },
      });

      console.log("llego 2");
  
      return {message : `Usuario creado con éxito. ¡Bienvenido, ${newUser.name}!`};
      
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }
      throw new InternalServerErrorException('Error al crear el usuario');
    }
  }
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
        throw new UnauthorizedException('Los datos ingresados no son correctos');
      }

      const passwordValid = await bcrypt.compare(password, user.password)
      if (!passwordValid) {
        throw new UnauthorizedException('Los datos ingresados no son correctos');
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
