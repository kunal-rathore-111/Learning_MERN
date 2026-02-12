"use client"

import { use } from "react";

interface ClientParams {
    "client-dynamic": string
}

interface ClientCompDynamicRoutingProps {
    params: Promise<ClientParams>
}


export default function ClientCompDynamicRouting(props: ClientCompDynamicRoutingProps) {
    const value = use(props.params);
    console.log(value)
    return <div>
        Hi from client comp
        <br />
        {value["client-dynamic"]}
    </div>
}