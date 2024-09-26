import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAllUsers() {
    try {
      const users = await this.prisma.user.findMany();
      if (users.length === 0) throw new NotFoundException('No existen usuarios en la DB');
      return users;
    } catch (error) {
      throw new NotFoundException('Error al recuperar usuarios');
    }
  }

  async findOneUser(id: number) {
    try {
      const userFound = await this.prisma.user.findUnique({
        where: { id },
        include: {
          events: true,
        },
      });

      if (!userFound) throw new NotFoundException('Usuario no encontrado');
      return userFound;
    } catch (error) {
      throw new NotFoundException('Error al recuperar el usuario');
    }
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    try {
      const { events, ...dataToUpdate } = updateUserDto;

      const userFound = await this.prisma.user.update({
        where: { id },
        data: {
          ...dataToUpdate,
        },
      });
      return userFound;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('Usuario no encontrado');
      }
      throw new NotFoundException('Error al actualizar el usuario');
    }
  }

  async removeUser(id: number, res: Response) {
    try {
      await this.prisma.user.delete({ where: { id } });
      return res.status(200).json({ message: 'Usuario eliminado exitosamente' });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('Usuario no encontrado');
      }
      throw new NotFoundException('Error al eliminar el usuario');
    }
  }
}
