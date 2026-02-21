
export const dynamic = "force-dynamic"


import { db } from "@/drizzle/db";
import { userTable } from "@/drizzle/schema";


export default async function SqlFunction() {
    try {
        const email = Math.round(Math.random() * 1000) + '@gmail.com';
        console.log(email);
        await db.insert(userTable).values({ username: "Kunal", email: email })
        const data = await db.select().from(userTable);
        console.log('data stored');

        return <div className="flex flex-col gap-15">
            <p>Hi from sql page</p>

            <ul>
                {data.map((x, i) => <li key={i}>{x.email}</li>)}
            </ul>

        </div>
    } catch (error) {
        console.log("Error in sql route- ", error);
        return <div>
            Something went wrong
        </div>
    }


}