import { Event } from "src/modules/events/entities/events.entity";

export class User {
    id: number;
    name: string;
    lastName: string;
    email: string;
    password: string;
    cuit: string;
    rol: string;
    events: Event[];
    state: boolean;
    createdAt: Date;
    updatedAt: Date;
    lastLogin: string;
}