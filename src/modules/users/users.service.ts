import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from '../../prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async create(createUserDto: CreateUserDto, res) {
    const errors = [];

    const existingUserEmail = await this.prisma.user.findUnique({ where: { email: createUserDto.email } });
    if (existingUserEmail) errors.push('Email already in use');

    const existingUserCuit = await this.prisma.user.findUnique({ where: { cuit: createUserDto.cuit } });
    if (existingUserCuit) errors.push('CUIT already in use');

    if (errors.length > 0) throw new ConflictException(errors);

    const passwordHash : string = await bcrypt.hash(createUserDto.password, 10);

    // const newUser = await this.prisma.user.create({
    //   data: {
    //     ...createUserDto, password: passwordHash, lastLogin: new Date().toLocaleString(),
    //   },
    // });

    const newUser = {
      name : "pepe",
      lastName : "pepe2"
    }
    
    // const payload = { id: newUser.id, username: newUser.name, rol: newUser.rol };
    // const jwt = await this.jwtService.signAsync(payload);
    // res.cookie('token', jwt);
    
    return `¡¡¡Bienvenid@ ${newUser.name + ' ' + newUser.lastName}, gracias por registrarte!!!`;
  }

  async findAll() {
    const users = await this.prisma.user.findMany();
    if (users.length === 0) throw new NotFoundException('No existen usuarios en la DB');
    return users;
  }

  async findOne(id: number) {
    const userFound = await this.prisma.user.findUnique({ where: { id } ,
      include: {
        events: true,
      }, });

    if (!userFound) throw new NotFoundException('Usuario no encontrado');
    return userFound;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      // const userFound = await this.prisma.user.update({
      //   where: { id },
      //   data: {
      //     ...updateUserDto
      //   },
      // });
      // return userFound; 

      return {}
    }
    catch(error) {
      if (error.code === 'P2025') throw new NotFoundException('Usuario no encontrado');
      throw error;
    }
  }

  async remove(id: number, res: Response) {
    try {
      await this.prisma.user.delete({ where: { id } });
      return res.status(200).json({ message: 'Usuario eliminado exitosamente'});
    }
    catch(error) {
      if (error.code === 'P2025') throw new NotFoundException('Usuario no encontrado');
      throw error;
    }
  }
}
