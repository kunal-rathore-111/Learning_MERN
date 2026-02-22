

import { userTable } from "@/drizzle/schema";


export default async function formActionFunc(previousState: any, formData: FormData) {

    try {
        const { username, email } = Object.fromEntries(formData);

        if (typeof username !== 'string' || typeof email !== 'string') throw new Error("Username or email is invalid not string");
        console.log(username, email);

        await new Promise((resolve) => {
            setTimeout(() => {
                resolve(undefined)
            }, 3000);
        })
        return { success: true, message: "Data Saved" }
    } catch (error) {
        return { success: false, message: "Something went wrong, data not saved" }
    }

} 