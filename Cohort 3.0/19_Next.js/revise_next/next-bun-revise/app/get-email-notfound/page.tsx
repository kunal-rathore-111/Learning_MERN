import { db } from "@/drizzle/db";
import { userTable } from "@/drizzle/schema";
import { notFound } from "next/navigation";

interface ShowemailIfPresent {
    searchParams: Promise<{ email: string }>
}
export default async function ShowemailIfPresent({ searchParams }: ShowemailIfPresent) {

    const emailToFind = (await searchParams).email;

    if (!emailToFind) return <div>Please enter email in route as searchParams</div>

    const data = await db.select().from(userTable);
    console.log(data);
    const isFound = data.find(x => x.email === emailToFind)

    //not found page
    if (!isFound) notFound();

    return <div>
        Email is found
    </div>
}