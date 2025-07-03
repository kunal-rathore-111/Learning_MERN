import { useState } from 'react'

import './App.css'
import { CreateT } from './components/Createtodo';
import { FetchT } from './components/FetchTodos';

function App() {

  const [tD, setTd] = useState([]);

  // async function fetc() {
  //   const render = await fetch("http://localhost:3000/fetch");
  //   const ans = await render.json();
  //   setTd(ans);
  // }

  // fetc();

  return <div>
    <CreateT></CreateT>
    <FetchT todos={tD}></FetchT>
  </div >
}


export default App
