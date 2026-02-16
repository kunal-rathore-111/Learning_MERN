

export const dynamic = "force-dynamic"


import { db } from "@/config/db"
import { users } from "@/config/schema";



export default async function DynamicPage() {

    const randomNumber = Math.round((Math.random() * 100 + Math.random() * 10));

    const result = await db.insert(users).values({ username: 'kunal', email: 'kunal' + randomNumber + '@gmail.com' }).returning();

    console.log(result);

    console.log('dynamic')

    return <div> <h1>HI </h1> <br />

        {JSON.stringify(result[0])}

    </div>
}
