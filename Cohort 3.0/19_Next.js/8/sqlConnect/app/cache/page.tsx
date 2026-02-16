import { db } from "@/config/db"
import { users } from "@/config/schema"
import { cache } from "react";



export default function CacheServerComp() {

    return <div>
        <h1>Hi from CacheServerComp, the cache is only applicable in server comp </h1>
        <br />
        <LoadDataComp />
        <LoadDataComp />
    </div>
}

async function LoadDataComp() {

    const data = await LoadDataFunc();
    return <div>
        {data.map((x, i) => <li key={i}>{JSON.stringify(x)} <br /></li>)}
    </div>
}

const LoadDataFunc = cache(async () => {

    const data = await db.select().from(users);
    console.log(data);
    return data;
});