import { db } from "@/config/db"
import { users } from "@/config/schema";

export const revalidate = 5;

export default async function StaticPage() {

    const randomNumber = Math.round((Math.random() * 100 + Math.random() * 10));

    const result = await db.insert(users).values({ username: 'kunal', email: 'kunal' + randomNumber + '@gmail.com' }).returning();

    console.log(result);

    console.log('static')

    return <div> <h1>HI </h1> <br />

        {JSON.stringify(result[0])}

    </div>
}
