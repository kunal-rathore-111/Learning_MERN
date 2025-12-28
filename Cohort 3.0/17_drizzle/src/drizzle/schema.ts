import { relations } from "drizzle-orm";
import { boolean, index, integer, pgEnum, pgTable, primaryKey, timestamp, unique, uuid, varchar } from "drizzle-orm/pg-core";

export const userRole = pgEnum('userRole', ['Admin', 'Basic']);

export const usersTable = pgTable('userstable', {
    id: uuid('id').primaryKey().defaultRandom(),
    username: varchar('username', { length: 230 }).notNull(),
    age: integer('age').notNull(),
    email: varchar('email', { length: 400 }).unique().notNull(),
    role: userRole("userRole").default("Basic").notNull()
}, table => {
    return {
        emailIndex: index('emailIndex').on(table.email),
        uniqueNameandAge: unique('uniqueNameandAge').on(table.age, table.username)
    }
})

export const userPreferencesTable = pgTable('userPreferencesTable', {
    id: uuid('id').primaryKey().defaultRandom(),
    emailUpdats: boolean('emailUpdates').notNull().default(false),
    referUser: uuid('referUser').references(() => usersTable.id).notNull()
})

export const postTable = pgTable('postTable', {
    id: uuid('id').primaryKey().defaultRandom(),
    caption: varchar('caption', { length: 400 }).notNull(),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
    updatedAt: timestamp('updatedAt').defaultNow().notNull(),
    authorId: uuid('autorId').references(() => usersTable.id).notNull()
})

export const categoryTable = pgTable('categoryTable', {
    id: uuid('id').primaryKey().notNull(),
    categoryName: varchar('categoryName', { length: 400 }).notNull()
})

export const postCategoryTable = pgTable("postCategoryTable", {
    postId: uuid('postId').references(() => postTable.id).notNull(),
    categoryId: uuid('categoryId').references(() => categoryTable.id).notNull()
}, table => {
    return {
        pk: primaryKey({ columns: [table.categoryId, table.postId] })
    }
})





//RELATIONS-

export const usersTableRelations = relations(usersTable, ({ one, many }) => {
    return {
        prefrences: one(userPreferencesTable),
        posts: many(postTable)
    }
})

export const userPreferencesTableRelations = relations(userPreferencesTable, ({ one }) => {
    return {
        users: one(usersTable, {
            fields: [userPreferencesTable.referUser],
            references: [usersTable.id]
        })
    }
})

export const postsTableRelations = relations(postTable, ({ one, many }) => {
    return {
        author: one(usersTable, {
            fields: [postTable.authorId],
            references: [usersTable.id]
        }),
        postCategories: many(postCategoryTable)
    }
})

export const categoryTableRelations = relations(categoryTable, ({ one, many }) => {
    return {
        category: one(postCategoryTable)
    }
})


export const postCategoryTableRelations = relations(postCategoryTable, ({ one }) => {
    return {
        post: one(postTable, {
            fields: [postCategoryTable.postId],
            references: [postTable.id]
        }),
        category: one(categoryTable, {
            fields: [postCategoryTable.categoryId],
            references: [categoryTable.id]
        })
    }
})