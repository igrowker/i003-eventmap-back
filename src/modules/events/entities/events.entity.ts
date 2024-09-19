
import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';
import { User } from 'src/modules/users/entities/user.entity';
//OJO aca puede q en ves de User de entity sea el de prisma (o capaz sean lo mismo)

export class Event {
    id: number;
    name: string;
    type: string;
    date: Date;
    time: string;
    location: string[];
    photos: string[];
    description: string;
    amount: number;
    createdAt: Date;
    user: User; // Assuming you have a User entity defined
    userId: number;
}

