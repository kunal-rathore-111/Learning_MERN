import { useEffect, useState } from "react"



export const Counter = () => {

    if (!localStorage.getItem("co")) {
        localStorage.setItem("co", 0);
    }

    const c = Number(localStorage.getItem("co"));


    const [count, setCount] = useState(c);

    useEffect(() => {
        localStorage.setItem("co", count);
    }, [count]);

    return <div>
        <ShowCount count={count} ></ShowCount>
        <Increase setCount={setCount} ></Increase>
        <Decrease setCount={setCount} ></Decrease>
    </div>
}

const ShowCount = (props) => {

    return <div>
        {props.count}
    </div>
}

const Increase = (props) => {

    function IncreaseCount() {
        props.setCount(count => count + 1);
    }

    return <div>
        <button onClick={IncreaseCount}>Increase</button>
    </div>
}

const Decrease = (props) => {
    function DecreaseCount() {
        props.setCount(count => count - 1);
    }

    return <div>
        <button onClick={DecreaseCount}>Decrease</button>
    </div>
}
