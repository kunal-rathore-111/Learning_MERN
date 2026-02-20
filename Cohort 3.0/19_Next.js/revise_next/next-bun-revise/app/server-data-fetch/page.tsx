import LoadingComp from "../loading";


interface dataDTO {
    title: string
}
export default async function ServerDataFetchComp() {
    const respond = await fetch('https://jsonplaceholder.typicode.com/todos', { method: "GET" })
    const data: dataDTO[] = await respond.json();
    console.log(data);
    // to see loader animation
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve(undefined)
        }, 3000)
    })

    return <div className="flex  gap-10">
        <section>
            {/* it gives full page loading*/}
            <ol className="list-decimal">
                {data.map((x, i) => <li key={i}>{x.title}</li>)}
            </ol>
        </section>

    </div>
}
