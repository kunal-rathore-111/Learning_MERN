
import { defineConfig } from "drizzle-kit"

const url = process.env.DBURI;
if (!url) throw new Error("DB url not found in .env");


export default defineConfig({
    dialect: "postgresql",
    schema: "./drizzle/schema.ts",
    out: "./drizzle",
    dbCredentials: {
        url: url
    }
})