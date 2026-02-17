
"use client"

import { useActionState } from "react";
import { formActionforClient } from "./form.action";




export default function ClientComp() {

    const [state, formAction, isPending] = useActionState(formActionforClient, null);

    return <div className="flex flex-col w-full min-h-screen items-center justify-center">
        <form className="flex flex-col gap-4 w-[25vw] items-center" action={formAction}>

            <input type="text" name="name" placeholder="Please enter your name" className="text-center px-3 py-2.5 border" />

            <input type="email" name="email" placeholder="Please enter your email" className="text-center px-3 py-2.5 border" />

            <span>
                <button type="submit"
                    disabled={isPending} className="bg-amber-300 
                derounded border border-white text-black p-2">
                    {isPending ? "Loading..." : "Submit"}

                </button>
            </span>

            <div className={`${state?.success ? "bg-green-500" : "bg-red-500"} p-2 border mt-1`}>
                {state?.message}
            </div>

        </form>
    </div>
}