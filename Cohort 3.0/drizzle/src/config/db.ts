import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from '../drizzle/schema.js';



if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL not found");

const postgresClient = postgres(process.env.DATABASE_URL as string);

export const db = drizzle(postgresClient, { schema, logger: true })


