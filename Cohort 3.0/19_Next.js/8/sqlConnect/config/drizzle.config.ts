
import { defineConfig } from 'drizzle-kit'

const dbURL = process.env.DBURI;
if (!dbURL) throw new Error("DB URL not found in .env")

export default defineConfig({
    dialect: 'postgresql',
    out: "./drizzle",
    schema: "./config/schema.ts",
    dbCredentials: {
        url: dbURL
    }
})