import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';
import { UserInfo, UserWithoutPass } from 'src/utils/types';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAllUsers() {
    try {
      const users = await this.prisma.user.findMany({
        include: {
          events: true,
        },
      });

      if (!users) throw new NotFoundException('No se logro obtener los usuarios en la DB');

      if (users.length === 0) throw new NotFoundException('No existen usuarios en la DB');

      const usersFilterPass = [];

      for (let index = 0; index < users.length; index++) {
        const user = users[index];
        const {password, ...objectAux} = user;

        const userFilterPass : UserWithoutPass = objectAux;

        usersFilterPass.push(userFilterPass);
      }
      
      return usersFilterPass;
    } catch (error) {
      throw new NotFoundException('Error al recuperar usuarios');
    }
  }

  async findOneUser(id: number) {
    try {
      
      const userFound : UserInfo = await this.prisma.user.findUnique({
        where: { id },
        include: {
          events: true,
        },
      });
      
      if (!userFound) throw new NotFoundException('Usuario no encontrado');

      const {password, ...objectAux} = userFound;

      const userFilterPass : UserWithoutPass = objectAux;

      return userFilterPass;
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
