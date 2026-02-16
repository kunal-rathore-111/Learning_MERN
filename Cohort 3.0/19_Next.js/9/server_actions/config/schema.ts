import { pgTable, serial, text, uuid } from "drizzle-orm/pg-core";



export const user = pgTable('users', {
    id: uuid("id").defaultRandom().primaryKey(),
    name: text("name").notNull(),
    email: text().notNull().unique()
})