import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from '../../prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async create(createUserDto: CreateUserDto) {
    const { name, lastName, email, cuit, rol } = createUserDto;
    const passwordHash = await bcrypt.hash(createUserDto.password, 10);
  
    const user = await this.prisma.user.create({
      data: {
        name,
        lastName,
        email,
        password: passwordHash,
        cuit,
        rol,
        state: true,
        events: [],
      },
    });
    
    const payload = { id: user.id, username: user.name, rol: user.rol };
    const jwt = await this.jwtService.signAsync(payload);
    console.log(jwt);
    return user;
  }

  async findAll() {
    const users = await this.prisma.user.findMany();
    if (users.length === 0) throw new NotFoundException('No users in the database');
    return users;
  }

  async findOne(id: number) {
    const userFound = await this.prisma.user.findUnique({ where: { id } });
    if (!userFound) throw new NotFoundException('User not found');
    return userFound;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const userFound = await this.prisma.user.update({
        where: { id },
        data: {
          ...updateUserDto,
        },
      });
      return userFound; 
    }
    catch(error) {
      if (error.code === 'P2025') throw new NotFoundException('User not found');
      throw error;
    }
  }

  async remove(id: number, res: Response) {
    try {
      await this.prisma.user.delete({ where: { id } });
      return res.status(200).json({ message: 'User deleted successfully'});
    }
    catch(error) {
      if (error.code === 'P2025') throw new NotFoundException('User not found');
      throw error;
    }
  }
}
