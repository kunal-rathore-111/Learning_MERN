// for the revalidatePath 
"use server"


import { db } from "@/config/db"
import { user } from "@/config/schema"
import { revalidatePath } from "next/cache";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { redirect } from "next/navigation";

export default async function ServerActionFormRevalidatePath(formData: FormData) {

    try {
        const { name, email } = Object.fromEntries(formData);
        if (typeof name !== "string" || typeof email !== "string") throw new Error("Invalid input") // or we can use zod

        await db.insert(user).values({ name, email });

        revalidatePath('/'); // purge the cache and let next to fetch new data
        redirect('/');
    } catch (error: unknown) {
        if (isRedirectError(error)) {
            throw error;
        }
        const message = error instanceof Error ? error.message : 'Something went wrong'
        console.log("\n\nForm-action error ", error, "\n\n")
        redirect(`/?message=${encodeURIComponent(message)}`)
    }
}