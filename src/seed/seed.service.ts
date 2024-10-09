import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { eventos } from '../helper/events.helper';
import * as bcrypt from 'bcrypt';
import { Type } from '@prisma/client';
import { randomDay } from '../utils/randomDay.util';

@Injectable()
export class SeedService {

  constructor(private prisma: PrismaService) { }

  async onModuleInit() {
    await this.preloadUserAdmin();
    await this.preloadDataEvents();
  }

  async preloadUserAdmin() {
    try {
      await this.executeAdminUser();

      Logger.log(
        'Usuario Admin cargado correctamente',
        'PreloadData- EventMap',
      );
    } catch (error) {
      throw error;
    }
  }

  private async executeAdminUser() {
    const passAdmin = process.env.ADMIN_PASS;
    const emailAdmin = process.env.ADMIN_EMAIL;
    
    try {
      const userAdmin  = await this.prisma.user.findUnique({
        where: { email: emailAdmin },
      });

      if (!userAdmin) {

        const passwordHash: string = await bcrypt.hash(passAdmin, 10);

        await this.prisma.user.create({
          data: {
            name: "Admin",
            lastName: "Admin",
            email: emailAdmin,
            password: passwordHash,
            cuit: "1234567890",
            lastLogin: "",
            rol: "Admin",
            state: true,
          },
        });
      }
    } catch (error) {
      throw error;
    }
  }

  async preloadDataEvents() {
    try {
      await this.executeSeedEvents();

      Logger.log(
        'Seed de Eventos cargado correctamente',
        'PreloadData- EventMap',
      );

    } catch (error) {
      throw error;
    }
  }  

  private async executeSeedEvents() {
    
    const emailAdmin = process.env.ADMIN_EMAIL;
    
    try {
      const userAdmin  = await this.prisma.user.findUnique({
        where: { email: emailAdmin },
      });

      for await (const event of eventos) {
        const eventFinded = await this.prisma.event.findFirst(
          { where: { name: event.name } }
        )
        if (eventFinded) continue;

        await this.prisma.event.create({
          data: {
            ...event,
            user: {
              connect: { id: userAdmin.id },
            },
            date: randomDay(),
            type: event.type as Type
          },
        });
      }

    } catch (error) {
      throw error;
    }
  }
}
