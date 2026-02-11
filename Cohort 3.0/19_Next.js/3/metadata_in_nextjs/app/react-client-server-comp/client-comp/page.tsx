
"use client"

import { useEffect, useState } from "react"

const url = "https://json-placeholder.mock.beeceptor.com/posts"


export default function ReactClientComp() {

    const [data, setData] = useState<any[]>([]);

    useEffect(() => {


        async function fetchData(url: string) {

            const response = await fetch(url, {
                method: "GET"
            })

            const data = await response.json();
            console.log(data)
            setData(data)
        }
        fetchData(url);
    }, [])

    return <div className="flex flex-col gap-6">
        <h3>
            THis is the client comp
        </h3>
        <ul className="grid grid-cols-2 gap-4">
            {data.map((x, i) => <li key={i}>{x.title}</li>)}
        </ul>
    </div>
} 