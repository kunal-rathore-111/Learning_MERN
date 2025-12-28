import 'dotenv/config'

import { db } from './config/db.js';
import { userPreferencesTable, usersTable } from './drizzle/schema.js';
import { sql } from 'drizzle-orm';



async function main() {
    /* 
        const data = await db.insert(usersTable).values([
            {
                username: 'kunal',
                email: 'kunal@gmail.com',
                age: 230
            },
            {
                username: 'radheshyam',
                email: 'radhe@gmail.com',
                age: 213
            }
        ]).returning({
            id: usersTable.id,
            username: usersTable.username
        }).onConflictDoUpdate({
            target: usersTable.email,
            set: { username: sql`EXCLUDED.username` }
            })
            console.log(data);
     */
    await db.delete(userPreferencesTable);

    await db.insert(userPreferencesTable).values([{
        emailUpdats: true,
        referUser: '441b5ddb-7657-4010-8450-77649db4f5a3'
    }])

    const data2 = await db.query.usersTable.findMany({
        columns: { email: false },
        with: { prefrences: true }
        /* extras: { lowercaseName: sql<string>`lower(${usersTable.username})`.as('lowercaseName') } */
    });

    const data3 = await db.query.userPreferencesTable.findMany();
    console.log(data3);

}


main();