


/* Lists and keys

function App() {

  const todos = [{
    title: "Study", done: false, id: 1
  }, { title: "Sleep", done: true, id: 2 }];

  console.log("ho");

  return <div>
    {todos.map((todo) => { return <Todos key={todo.id} title={todo.title} done={todo.done}></Todos> })}
  </div>
}

function Todos(props) {
  console.log("ho2");
  return <div>
    {props.title} ={props.done ? "Done!!" : "Not done!!"}
  </div>
} */

import React from "react";

class ErrorBoundery_component extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(err, info) { console.log("Error caught- ", err, info); }
  render() {
    if (this.state.hasError) {
      return <h2 style={{ background: "grey", height: "250px", width: "250px" }}>Something went wrong </h2>
    }
    return this.props.children;
  }
}

function App() {
  return <div>
    <ErrorBoundery_component> <Card1></Card1> </ErrorBoundery_component>
    <Card2></Card2>
  </div>
}

function Card1() {
  const err = new Error("Error in card 1");
  err.type = Card1;

  throw err;

  return <div style={{ background: "grey", height: "250px", width: "250px" }}><h2>This is card 1</h2></div>
}

function Card2() {
  return <div style={{ background: "grey", height: "250px", width: "250px" }}><h2>This is card 2</h2></div>
}

export default App;



//3rd -> Fragments => <> </> // baki toh tu smzdar hae shyd