import Link from "next/link";
import ServerActionFormRevalidatePath from "./form-action";
import { db } from "@/config/db";
import { user } from "@/config/schema";

interface HomePage {
    searchParams: Promise<{ message?: string }>
}
export default async function HomePage({ searchParams }: HomePage) {
    const { message } = await searchParams;

    const data = await db.select().from(user);


    return <div className="flex flex-col gap-14 m-10">
        <nav className="w-full">
            <div className="p-2 flex justify-center">
                <div className="border p-4 flex gap-15">
                    <Link href={'/client-form'}>client-form</Link>
                    <Link href={'/server-form'}>server-form</Link>
                    <Link href={'/client-redirect'}>client-redirect</Link>
                    <Link href={'/server-redirect'}>server-redirect</Link>
                    <Link href={'/error'}>error-page</Link>
                </div>
            </div>
        </nav>
        <section className="flex flex-col gap-15">
            <p className="flex w-full justify-center text-2xl">
                Here is the example of RevalidatePath in server components
            </p>
            <form className="flex flex-col items-center gap-8" action={ServerActionFormRevalidatePath}>
                <div className="flex flex-col gap-5">
                    <input type="text" name="name" placeholder="Enter your name" className="text-center text-md border px-3 py-1.5 rounded-xl focus:border-amber-400 focus:outline-0" />
                    <input name="email" type="email" placeholder="Enter email" className="text-center text-md border px-3 py-1.5 rounded-xl focus:border-amber-400 focus:outline-0" />
                    <input type="date" className="text-center text-md border px-3 py-1.5 rounded-xl focus:border-amber-400 focus:outline-0" />
                </div>
                <button className="text-center text-md border px-3 py-1.5 rounded-xl focus:border-amber-400 focus:outline-0" type="submit" >Submit</button>
            </form>
        </section>

        {message ? <div>{message} </div> : ""}


        <section className="flex flex-col mt-5 items-center w-full">
            <div className="flex flex-col gap-5">
                <span className="text-2xl ">Data</span>
                <ol>
                    {data.map((x, i) =>
                        <li className="flex gap-2 flex-col" key={i + x.id}>
                            {i}-{x.email}
                        </li>)}
                </ol>
            </div>
        </section>
    </div>
}