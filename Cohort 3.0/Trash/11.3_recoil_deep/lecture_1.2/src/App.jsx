import { RecoilRoot, useRecoilValue } from "recoil"
import { todoAtomFamily } from "./atomFamily"




export default function App() {

  return <RecoilRoot>
    <LoadTodo></LoadTodo>
  </RecoilRoot>

}


function LoadTodo() {
  return <div>
    <Todo id={1}></Todo>
    <Todo id={2}></Todo>
    <Todo id={3}></Todo>
  </div>
}


function Todo({ id }) {

  const todos = useRecoilValue(todoAtomFamily(id));
  console.log(todos);
  return <div className="todo">
    <h2>Id- {todos.id}</h2>
    <h2>{todos.title}</h2>
    <h2> {todos.isDone ? "Done" : "Not Done"}</h2>
  </div>
}