

"use client"

import { use } from "react";

interface ClientCompForUseAPIProps {
    searchParams: Promise<{
        value: string,
        type: string,
        gender: string,
    }>
}

export default function ClientCompForUseAPI({ searchParams }: ClientCompForUseAPIProps) {

    const searchParamsValues = use(searchParams);
    console.log(searchParamsValues)


    const value = searchParamsValues.value;
    const type = searchParamsValues.type;
    const gender = searchParamsValues.gender;

    return <div>
        <h1>Trying to fetch the url query using use api in client comp</h1>
        <br />
        Value= {value}
        <br />
        Type= {type}
        <br />
        Gender= {gender}

    </div>
}