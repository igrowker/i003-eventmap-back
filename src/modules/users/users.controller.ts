import { Controller, Get, Body, Patch, Param, Delete, Res, UseGuards, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';
import { RoleGuard } from 'src/guards/role/role.guard';
import { Roles } from 'src/decorators/Roles.decorator';
import { Role } from 'src/utils/enum';
import { JwtAuthGuard } from 'src/guards/auth/jwtAuth.guard';
import { userSelf } from 'src/guards/auth/userSelf.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }
  @ApiBearerAuth()
  @Get()
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(Role.Admin)
  async findAllUsers() {
    return await this.usersService.findAllUsers();
  }
  
  @ApiBearerAuth()
  @Get(':id')
  @UseGuards(JwtAuthGuard, RoleGuard, userSelf)
  @Roles(Role.Admin, Role.Company)
  async findOneUser(
    @Param('id') id: string,
    @Query('userid') userId: string,
  ) {
    
    return await this.usersService.findOneUser(userId);
  }
  
  @ApiBearerAuth()
  @Patch(':id')
  @UseGuards(JwtAuthGuard, RoleGuard, userSelf)
  @Roles(Role.Admin, Role.Company)
  async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.usersService.updateUser(id, updateUserDto);
  }
  
  @ApiBearerAuth()
  @Delete(':id')
  @UseGuards(JwtAuthGuard, RoleGuard, userSelf)
  @Roles(Role.Admin)
  async removeUser(
    @Param('id') id: string,
    @Res() res: Response,
    @Query('userid') userId: string,
  ) {
    return await this.usersService.removeUser(userId, res);
  }
}