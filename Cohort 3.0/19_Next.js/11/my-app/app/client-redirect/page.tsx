import { db } from "@/config/db";
import { Form } from "./Form";
import { user } from "@/config/schema";

export default async function ServerComp() {

    const state = await db.select().from(user);
    // console.log(state);
    return <div className="flex flex-col gap-14 m-10">
        <Form />

        <section className="flex flex-col mt-5 items-center w-full">
            <div className="flex flex-col gap-5">
                <span className="text-2xl ">Data</span>
                <ol>
                    {state.map((x, i) =>
                        <li className="flex gap-2 flex-col" key={i + x.id}>
                            {i}-{x.email}
                        </li>)}
                </ol>
            </div>
        </section>
    </div>
}