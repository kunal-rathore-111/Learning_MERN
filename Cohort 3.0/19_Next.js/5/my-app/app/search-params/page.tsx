
interface searchParams {
    category?: string;
    type?: string;
    range?: string;
}

interface SearchParamServerCompProps {
    searchParams: Promise<searchParams>
}

export default async function SearchParamsServerComp({ searchParams }: SearchParamServerCompProps) {

    const value = await searchParams;
    console.log(value)

    const category = value?.category ?? 'all';
    const range = value?.range ?? '0';
    const type = value?.type ?? 'default';
    console.log(category, range, type)

    return <div>
        <h1>SearchParamsServerComp</h1>
        <br />
        Category : {category}
        <br />
        Range : {range}
        <br />
        Type : {type}
        <br />


    </div>
}