
export default async function NestedDynamicRoutingFunc(props: any) {

    const value = await props?.params;


    return <div>
        Hi from Nested Dynamic Route
        <br />
        Route is= {value['dynamic-routing']}
        <br />
        NestedRoute is= {value['nested-dynamic-routing']}
    </div>
}