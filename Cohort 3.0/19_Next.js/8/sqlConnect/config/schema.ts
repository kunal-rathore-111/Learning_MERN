import { pgTable, text } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    username: text().notNull(),
    email: text().notNull().unique(),
    surname: text()
})