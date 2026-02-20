
interface DynamicUsersComp {
    params: Promise<{ slug: string[] }>
}
export default async function DynamicUsersComp({ params }: DynamicUsersComp) {

    const slug = (await params).slug;
    return <div className="flex flex-col gap-20">
        Hi from catch all segment (catches all the dynamic route like fashion/men/jeans/range in one route no need to create multiple route folders)
        <br />
        <section>
            <p>The catch all segments values are= </p>
            {slug.map((x, i) => <li key={i}> {x}</li>)}
        </section>
    </div>
} 