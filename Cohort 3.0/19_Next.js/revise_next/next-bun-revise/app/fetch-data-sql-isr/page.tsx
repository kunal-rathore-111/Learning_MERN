import { db } from "@/drizzle/db";
import { userTable } from "@/drizzle/schema";
import { cache } from "react";

export const revalidate = 10; // if someone comes to this page after 10seconds then it refetch the data
export default async function SqlFunction() {
    return <div>
        <LoadDataComp />
        <LoadDataComp />
    </div>
}

async function LoadDataComp() {
    const data = await getData();
    return <div className="flex flex-col gap-15">
        <p>Hi from sql page</p>
        <ul>
            {data.map((x, i) => <li key={i}>{x.email}</li>)}
        </ul>
    </div>
}

const getData = cache(async () => {

    try {
        const data = await db.select().from(userTable);
        console.log("hi")
        return data;
    } catch (error) {
        console.log("Error in sql route- ", error);
        return []
    }
})