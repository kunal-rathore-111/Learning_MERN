import './App.css';
import { useState } from "react";

/*
// state, count


function App() {

  const [count, setCount] = useState(0);
  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  )
}

// creating own DOM component

function CustomButton(props) {
  function update() {
    props.setCount(props.count + 1);
  }

  return <button onClick={update}>
    Count {props.count}
  </button>
}

 */


// todo
/* 
function App() {


  const [todos, setTodo] = useState(
    [{ title: "GYM", discription: "Gym at 5PM" },
    { title: "Study", discription: "Study at 10PM" }]
  );

  function addTodo() {
    setTodo([...todos, { title: "random one", discription: "random" }])
  }

  return (
    <div>
      <button onClick={addTodo}>
        Click to add Random todo
      </button>

      {todos.map(traverse)}

    </div>
  )
}

function traverse(t) {
  return (<Todo title={t.title} discription={t.discription} ></Todo>)
}

function Todo(props) {
  return (<div>
    <h1> {props.title}</h1>
    <h2> {props.discription}</h2>
  </div>)
}
 */

//revising todo

function App() {
  const [todos, setTodo] = useState([
    { title: "DSA", discription: "4PM" },
    { title: "Gym", discription: "7PM" }
  ]);

  function set() {
    setTodo([...todos, { title: "new", discription: "NEW" }]);
  }

  return (
    <div>
      <button onClick={set}>Click to add random todo</button>
      {todos.map(traverse)}
    </div>
  )

}


function traverse(t) {
  return <Todo title={t.title} discription={t.discription}></Todo >
}


function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.discription}</h2>
  </div>
}

export default App
