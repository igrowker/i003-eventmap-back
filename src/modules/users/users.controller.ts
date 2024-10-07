import { Controller, Get, Body, Patch, Param, Delete, ParseIntPipe, Res, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';
import { RoleGuard } from 'src/guards/role/role.guard';
import { Roles } from 'src/decorators/Roles.decorator';
import { Role } from 'src/utils/enum';
import { JwtAuthGuard } from 'src/guards/auth/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  // @UseGuards(JwtAuthGuard, RoleGuard)
  // @Roles(Role.Admin, Role.Company)
  async findAllUsers() { //solo admin
    return await this.usersService.findAllUsers();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(Role.Admin, Role.Company)
  async findOneUser(@Param('id', ParseIntPipe) id: number) { //admin y company --> q el id dentro del token cooicide con el id de la peticion
    return await this.usersService.findOneUser(id);
  }

  @Patch(':id') //idem q get id
  async updateUser(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
    return await this.usersService.updateUser(id, updateUserDto);
  }

  @Delete(':id') //admin
  async removeUser(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
    return await this.usersService.removeUser(id, res);
  }
}