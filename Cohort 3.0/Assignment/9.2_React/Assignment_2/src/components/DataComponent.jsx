import { useEffect, useState } from "react"


export const DataComponent = () => {

    async function getData() {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
        const data = await res.json();
        return data;
    }

    const [todos, setTodos] = useState([{}]);

    const [isLoading, setLoading] = useState(false);

    const [error, setError] = useState(null);

    useEffect(() => {

        setLoading(true);
        async function getTodos() {
            try {
                const t = await getData();
                setTodos(t);
                setLoading(false);
            } catch (error) {
                setError(error.message);
            }
        }
        getTodos();


    }, []);

    if (error) {
        return <>{error}</>
    }

    return <>
        {isLoading ? "Loading..." : <MapTodos todos={todos}></MapTodos>}
    </>

}


const MapTodos = (props) => {

    const MappedTodos = props.todos.map(t => <MappingTodo title={t.title} completed={t.completed}></MappingTodo>)
    return <>
        {MappedTodos}
    </>
}

const MappingTodo = (props) => {

    return <div style={{ border: "3px solid black" }}>
        <h3>Title- {props.title}</h3>
        <h3>Completed- {props.completed ? "Completed" : "Not completed"}</h3>
    </div>
}