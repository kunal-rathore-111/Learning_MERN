

interface BlogSlugComp {
    params: Promise<{ catchall: string[] }>
}

export default async function BlogSlugComp(props: BlogSlugComp) {

    const { catchall } = await props.params;
    console.log(catchall)

    return <div>
        Hi from a nested page using slug- [...foldername]
        <br />
        The routes it contains are-
        <ul className="flex gap-3">
            {catchall.map((x, i) => <li key={i}>{x}</li>)}
        </ul>
    </div>
}