"use server"

import { db } from "@/config/db";
import { user } from "@/config/schema";

export async function clientAction(previousState: any, formData: FormData) {
    try {
        const { name, email } = Object.fromEntries(formData);
        if (typeof name !== "string" || typeof email !== "string") throw new Error("Invalid input") // zod will be better option ;)
        await db.insert(user).values({ name, email });
    } catch (error) {
        console.log("error----- ", error)
    }
}