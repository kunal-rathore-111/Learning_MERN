import { createContext, useContext, useState } from "react"
import { usePrev } from "./hooks/usePrev";


const CounterContext = createContext();

function CounterContextProvider({ children }) {

    const [count, setCount] = useState(0);
    return <CounterContext.Provider value={{ count, setCount }}>
        {children}
    </CounterContext.Provider>
}

export default function App() {
    const [value, setValue] = useState(0);


    function glitchFunction() {
        setValue(1);
    }
    return <div>
        <button onClick={glitchFunction}>CLikc to se glitch</button>
        <CounterContextProvider>
            <Counter></Counter>
            <Button></Button>
        </CounterContextProvider>
    </div>
}

const Counter = () => {

    const { count } = useContext(CounterContext);
    const prv = usePrev(count, 0);
    return <div>
        <h3>Count- {count}</h3>
        <h3>Prev- {prv}</h3>
    </div>
}


const Button = () => {

    const { setCount } = useContext(CounterContext);

    function IncreaseFunction() {
        setCount(count => count + 1);
    }
    function DecreaseFunction() {
        setCount(count => count - 1);
    }

    return <div>
        <button onClick={IncreaseFunction}> Increase</button>
        <button onClick={DecreaseFunction}> Increase</button>
    </div>
}