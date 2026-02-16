

"use client"

import { notFound } from "next/navigation"
import { use } from "react";

interface PageeeProps {
    searchParams: Promise<{ name: string }>
}
export default function Pageeee(props: PageeeProps) {
    const sP = use(props.searchParams)
    const name = sP.name;
    if (!name) notFound();

    return <div>
        Ok you entered name in the search Params
    </div>
}