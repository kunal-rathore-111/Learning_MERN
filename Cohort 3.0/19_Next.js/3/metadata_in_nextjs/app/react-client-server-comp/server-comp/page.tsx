

export default async function ServerComp() {

    const url = "https://json-placeholder.mock.beeceptor.com/posts"

    const response = await fetch(url);
    const data = await response.json();

    return <div className="flex flex-col gap-6">
        <h3>
            THis is the server comp
        </h3>
        <ul className="grid grid-cols-2 gap-4">
            {data.map((x, i) => <li key={i}> {x.title}</li>)}
        </ul>
    </div>
}