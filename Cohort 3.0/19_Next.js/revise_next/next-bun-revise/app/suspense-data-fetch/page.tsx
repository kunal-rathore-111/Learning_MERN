import { Suspense } from "react";
import LoadingComp from "../loading";


interface dataDTO {
    title: string
}
export default async function ServerDataFetchComp() {


    return <div className="flex  gap-10">
        <section>
            hiii this is above suspense
            <div>
                <Suspense fallback={<LoadingComp />}>
                    <DataFetchComp />
                </Suspense>
            </div>
        </section>

    </div>
}

async function DataFetchComp() {

    const respond = await fetch('https://jsonplaceholder.typicode.com/todos', { method: "GET" })
    const data: dataDTO[] = await respond.json();
    console.log(data);
    // to see loader animation
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve(undefined)
        }, 3000)
    })
    {/* it gives full page loading*/ }
    return <ol className="list-decimal">
        {data.map((x, i) => <li key={i}>{x.title}</li>)}
    </ol>
}
