first lecture code was on replit-
link-> https://replit.com/@kunaldell01/NonstopWirelessDecagon#src/App.jsx


Code->

import { useState } from "react";
import "./App.css";
import { toEditorSettings } from "typescript";

export default function App() {
  const [todos, setTodo] = useState([
    {
      title: "Gym",
      isCompleted: false,
    },
  ]);

  function addTodo() {
    const tod = [
      ...todos,
      {
        title: document.querySelector("#title").value,
        isCompleted: Math.random() > 0.5 ? true : false,
      },
    ];
    setTodo(tod);
  }

  return (
    <div>
      <input id="title" placeholder="enter title"></input>
      <button onClick={addTodo}>Add todo</button>
      <br></br> <br></br>
      {
        todos.map((todo) => {
          return (
            <Todo title={todo.title} isCompleted={todo.isCompleted}></Todo>
          );
        }) // call todo function for all todos
      }
    </div>
  );
}

function Todo(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <h2>{props.isCompleted ? "completed" : "not completed"}</h2>
    </div>
  );
}
