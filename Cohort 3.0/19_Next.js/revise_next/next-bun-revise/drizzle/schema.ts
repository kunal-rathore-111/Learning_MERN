import { pgTable, text, uuid } from "drizzle-orm/pg-core";



export const userTable = pgTable("userTable", {
    id: uuid("id").defaultRandom().primaryKey(),
    username: text("username").notNull(),
    email: text("email").notNull().unique(),
});