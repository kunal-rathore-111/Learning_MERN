"use client"


import { useActionState } from "react";
import formActionFunc from "./form.action";



export default function ServerActionComp() {

    const [state, actionFunc, pending] = useActionState(formActionFunc, null);

    return <div className="m-20 ">
        This is clientcomp-form action form
        <form action={actionFunc} className="p-12" >
            <input type="text" name="username" placeholder="Enter your username" />
            <input type="email" name="email" placeholder="Enter your email" />
            <button type="submit" disabled={pending} className="disabled:cursor-not-allowed">Submit</button>
        </form>
        <p className={`${state?.success ? 'bg-green-500' : 'bg-red-500'}` + 'p-3'} >
            {state?.message}
        </p>
    </div >
}