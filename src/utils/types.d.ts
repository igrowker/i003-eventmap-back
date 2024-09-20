export type DateStringFormat = `${string}-${string}-${string}`;

export type TimeStringFormat = `${string}:${string}`;

export interface Location {
    location : [
        {
            lat : number,
            lon : number
        }
    ]
}