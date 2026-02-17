
"use server"

import { db } from "@/config/db";
import { user } from "@/config/schema";


export const formActionforClient = async (
    previousState: { success: boolean, message: string } | null,
    formData: FormData
) => {

    try {
        const { name, email } = Object.fromEntries(formData.entries()) as {
            name?: string;
            email?: string;
        };

        // form data mae toh kuch bhi aa saktan hae
        //or can do zod validation
        if (typeof name !== 'string' || typeof email !== 'string') return { success: false, message: "Name or email is not in string" }

        await db.insert(user).values({ name, email });

        return { success: true, message: "Form submitted successfully" }
    } catch (error) {
        console.log("Form Action error: ", error);
        return { success: false, message: "Something went wrong" }
    }
}