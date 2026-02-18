
"use client"

import { useActionState } from "react";
import { formActionforClient } from "./form.action";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";

export default function ClientComp() {

    const [state, formAction, isPending] = useActionState(formActionforClient, null);

    return <div className="flex flex-col w-full min-h-screen items-center gap-5 justify-center">
        <form className="flex flex-col gap-4 w-[25vw] items-center" action={formAction}>

            <input type="text" name="name" placeholder="Please enter your name" className="text-center px-3 py-2.5 border" />

            <input type="email" name="email" placeholder="Please enter your email" className="text-center px-3 py-2.5 border" />

            <SubmitComp />

            {isPending ? <div className={`${state?.success ? "bg-green-500" : "bg-red-500"}  border mt-1`}>
                {state?.message}
            </div> : ""}
        </form>

        <span>
            <RedirectComp />
        </span>
    </div>
}


const SubmitComp = () => {

    const { pending } = useFormStatus();
    return <>
        <span>
            <button type="submit"
                disabled={pending} className="bg-amber-300 
                derounded border border-white text-black p-2">
                {pending ? "Loading..." : "Submit"}
            </button>
        </span>
    </>
}

const RedirectComp = () => {
    const router = useRouter();

    return <div className="p-4 bg-gray-500">
        <button className="" onClick={() => { router.push('/client-redirect') }}>Click to redirect to /client-redirect page</button>
    </div>
}