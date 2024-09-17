import * as dotenv from 'dotenv';

export const dotenvFun = ()=>{
    dotenv.config();
}

const PRUEBA = process.env.PRUEBA;
const DATABASE_URL_LOCAL = process.env.DATABASE_URL;
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_TOKEN_EXPIRED = process.env.JWT_TOKEN_EXPIRED;

const dotenvOptions = {
    PRUEBA,
    DATABASE_URL_LOCAL,
    JWT_SECRET,
    JWT_TOKEN_EXPIRED
}

export default dotenvOptions;