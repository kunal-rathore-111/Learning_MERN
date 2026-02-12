
"use client"

import { useSearchParams } from "next/navigation"

export default function ListComp() {

    const searchParams = useSearchParams();


    const value = searchParams.getAll("value");
    const type = searchParams.getAll("type");

    const entries = Object.fromEntries(searchParams.entries());

    console.log(value, type, entries)
    return <div>
        Hi from List comp (a client component)
        <br />
        <div className=" flex gap-5 ">
            Value = {value.map((x, i) => <li key={i}>{x}</li>)}
        </div>
        <br />
        type= {type}
    </div>
}