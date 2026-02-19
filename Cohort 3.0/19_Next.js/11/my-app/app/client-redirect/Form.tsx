"use client"

import { useActionState } from "react";
import { clientAction } from "./form-action";
import { useRouter } from "next/navigation";




export function Form() {

    const router = useRouter();
    const [state, action, isPending] = useActionState(CallClientAction, null);

    async function CallClientAction(previousState: any, formData: FormData) {
        await clientAction(previousState, formData);
        router.refresh();
    }


    return <div className="flex flex-col gap-14 m-10">
        <section className="flex flex-col gap-15">
            <p className="flex w-full justify-center text-2xl">
                Here is the example of router.refresh() of useRouter() in server components
            </p>
            <form className="flex flex-col items-center gap-8" action={action}>
                <div className="flex flex-col gap-5">
                    <input type="text" name="name" placeholder="Enter your name" className="text-center text-md border px-3 py-1.5 rounded-xl focus:border-amber-400 focus:outline-0" />
                    <input name="email" type="email" placeholder="Enter email" className="text-center text-md border px-3 py-1.5 rounded-xl focus:border-amber-400 focus:outline-0" />
                    <input type="date" className="text-center text-md border px-3 py-1.5 rounded-xl focus:border-amber-400 focus:outline-0" />
                </div>
                <button className="text-center text-md border px-3 py-1.5 rounded-xl focus:border-amber-400 focus:outline-0" disabled={isPending} type="submit" >Submit</button>
            </form>
        </section>


    </div >
}