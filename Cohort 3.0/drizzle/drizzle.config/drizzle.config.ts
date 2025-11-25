
import { defineConfig } from 'drizzle-kit'

if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL not found");

export default defineConfig({
    out: './src/drizzle/migrations',
    schema: './src/drizzle/schema.ts',
    dbCredentials: {
        url: process.env.DATABASE_URL as string
    },
    dialect: "postgresql",
    strict: true,
    verbose: true
});