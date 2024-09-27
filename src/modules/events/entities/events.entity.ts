import { User } from 'src/modules/users/entities/user.entity';

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
    user: User;
    userId: number;
}

