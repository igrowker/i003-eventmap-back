import { Role, TypeEvents } from "./enum";

export type DateStringFormat = `${string}-${string}-${string}`;

export type TimeStringFormat = `${string}:${string}`;

export type QueryEvents = {
    // type: string, 
    // startDate: string, 
    // endDate: string,
    lat: string,
    lon: string
};

export interface Location {
    location: [
        {
            lat: number,
            lon: number
        }
    ]
}

export interface EventQuerys {
    type: TypeEvents,
    startDate: DateStringFormat,
    endDate: DateStringFormat
}

export interface UserInfo {
    id: number,
    name: string,
    lastName: string,
    email: string,
    password : string,
    cuit: string,
    rol: string,
    state: boolean,
    createdAt: Date,
    updatedAt: Date,
    lastLogin: string,
    events: object[]
} 

export type UserWithoutPass = Omit<UserInfo,'password'>