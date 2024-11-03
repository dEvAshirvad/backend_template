import { config } from 'dotenv';

config();

const PORT = process.env.PORT || 3030;
const HOST = process.env.HOST || 'localhost';
const PROTOCOL = HOST === 'localhost' ? 'http' : 'https';
const DB_URL = process.env.DB_URL as string;
const allowedOrigins = ['http://localhost:3000'];

const SERVER_URL = `${PROTOCOL}://${HOST}${HOST === 'localhost' ? `:${PORT}` : ``}`;
const COOKIE_DOMAIN = HOST === 'localhost' ? 'localhost' : `.${HOST}`;

export {
  PORT,
  HOST,
  PROTOCOL,
  SERVER_URL,
  DB_URL,
  COOKIE_DOMAIN,
  allowedOrigins,
};
