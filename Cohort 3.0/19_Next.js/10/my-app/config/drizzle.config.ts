
import { defineConfig } from "drizzle-kit"


const dbURL = process.env.DBURI;
if (!dbURL) throw new Error("NO db url found in .env")
export default defineConfig({
    dialect: "postgresql",
    schema: "./config/schema.ts",
    out: "./drizzle",
    dbCredentials: {
        url: dbURL
    }
})