import { Controller, Get, Body, Patch, Param, Delete, ParseIntPipe, Res, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';
import { RoleGuard } from 'src/guards/role/role.guard';
import { AdminCheckGuard } from 'src/guards/admin-check/admin-check.guard';
import { Roles } from 'src/decorators/Roles.decorator';
import { Role } from 'src/utils/enum';
import { JwtAuthGuard } from 'src/guards/auth/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(Role.Admin, Role.Company)
  async findAll() { //solo admin
    return await this.usersService.findAllUsers();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) { //admin y company --> q el id dentro del token cooicide con el id de la peticion
    return await this.usersService.findOneUser(id);
  }

  @Patch(':id') //idem q get id
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
    return await this.usersService.updateUser(id, updateUserDto);
  }

  @Delete(':id') //admin
  async remove(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
    return await this.usersService.removeUser(id, res);
  }
}
