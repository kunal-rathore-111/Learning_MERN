
import { RecoilRoot, useRecoilStateLoadable, useRecoilValue } from "recoil";
import { todoFamilyAtom } from "./atomFamily";


// Recoil selector family in atomFamily

export default function App() {

  return <RecoilRoot>
    <LoadTodos></LoadTodos>
  </RecoilRoot>
}

function LoadTodos() {
  return <div>
    <Todos id={1}></Todos>
    <Todos id={2}></Todos>
    <Todos id={3}></Todos>
  </div>
}

function Todos({ id }) {
  // const Todos = useRecoilValueLoadable(todoAtom(id));
  const [Todos, setTodo] = useRecoilStateLoadable(todoFamilyAtom(id));
  console.log(Todos);

  if (Todos.state === "loading") {
    return <div>Loading...</div>
  }
  else if (Todos.state === "hasError") {
    return <h2>404 Error</h2>

  }
  else if (Todos.contents) {

    return <div>
      <h3>{Todos.contents.title}</h3>
      <h3>{Todos.contents.completed ? "Completed" : "Not completed"}</h3>
      <h3>{Todos.contents.userId}</h3>
    </div>
  }
}