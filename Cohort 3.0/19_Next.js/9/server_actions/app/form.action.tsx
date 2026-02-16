

"use server"
import { db } from "@/config/db";
import { user } from "@/config/schema";

// to make the entire form.action.tsx as server action file

export default async function ServerActionFunc(formData: FormData) {

    const name = formData.get('name');
    const email = formData.get('email');

    if (typeof name !== 'string' || typeof email !== 'string') throw new Error("Invalid inputs")

    console.log(name, email)
    //now just make a db call to store
    await db.insert(user).values({ name, email })
    const d = await db.select().from(user);
    console.log(d)
}