

import { useState } from "react";

import { useFetch } from "./hooks/useFetch";

export default function App() {

    const [value, setValue] = useState(1);

    const url = "https://jsonplaceholder.typicode.com/todos/", method = "GET";

    const { data, loading } = useFetch((url + value), method);

    if (loading) { return <h2>Loading...</h2> }
    return <div>

        <button onClick={() => { setValue(1) }}>1</button>
        <button onClick={() => { setValue(2) }}>2</button>
        <button onClick={() => { setValue(3) }}>3</button>
        <button onClick={() => { setValue(4) }}>4</button>

        <MapData title={data.title} completed={data.completed}></MapData>

    </div>
}

function MapData(props) {
    return <div>
        <h2>{props.title}</h2>
        <h2>{props.completed ? "Done" : "Not done"}</h2>
    </div>
}