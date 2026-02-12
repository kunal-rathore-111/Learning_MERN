

export default async function DynamicRoutingFunc(props: any) {

    console.log(props)
    const value = await (props.params)

    return <div>
        Hi from Dynamic Route
        <br />
        Route is- {value['dynamic-routing']}
    </div>
}