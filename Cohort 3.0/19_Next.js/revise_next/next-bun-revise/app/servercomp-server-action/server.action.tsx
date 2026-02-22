"use server"


import { db } from "@/drizzle/db";
import { userTable } from "@/drizzle/schema";


export default async function serverActionFunc(formData: FormData) {

    const { username, email } = Object.fromEntries(formData);

    if (typeof username !== 'string' || typeof email !== 'string') throw new Error("Username or email is invalid not string");
    console.log(username, email)
    await db.insert(userTable).values({ username, email });

} 