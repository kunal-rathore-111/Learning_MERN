

export function PostComponent(props) {

    return <div style={{ width: "350px", height: "180px", border: "3px red solid", backgroundColor: "whitesmoke", borderRadius: "10px" }}>

        <div style={{ display: "flex", margin: "10px", gap: "10px" }}>
            <img src={props.img} style={{ width: "45px", height: "45px", borderRadius: "50%", border: "2px solid black" }} />

            <div>
                <b>{props.name}</b>
                <p style={{ margin: "0px" }}>{props.subtitle}</p>

                {props.time ? // conditional rerendering
                    <p style={{ margin: "0px", alignItems: 'center', display: 'flex' }}>
                        {props.time}
                        <img src="https://www.shutterstock.com/image-vector/vector-illustration-two-oclock-icon-260nw-2209885727.jpg" style={{ height: "20px", width: "20px" }} />
                    </p> : null
                }

            </div>
        </div>
        <div >
            <p style={{ fontSize: "16 px", margin: "7px" }}>{props.data}</p>
        </div>
    </div >
}
