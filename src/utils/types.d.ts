import { TypeEvents } from "./enum";

export type DateStringFormat = `${string}-${string}-${string}`;

export type TimeStringFormat = `${string}:${string}`;

export type QueryEvents = { 
    type: string, 
    startDate: string, 
    endDate: string,
    lat: string, 
    lon : string 
};

export interface Location {
    location : [
        {
            lat : number,
            lon : number
        }
    ]
}

export interface EventQuerys {
        type : TypeEvents,
        startDate : DateStringFormat,
        endDate : DateStringFormat
}