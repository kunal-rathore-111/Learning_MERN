
// Recoil
/* 
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil"
import { counterAtom } from "./store/atom/count"


export default function App() {

  return <>
    <RecoilRoot>
      <CounterComponnent></CounterComponnent>
    </RecoilRoot>
  </>

}

function CounterComponnent() {
  return <div>
    <Counter></Counter>
    <Increase></Increase>
    <Decrease></Decrease>
  </div>
}

function Counter() {

  const count = useRecoilValue(counterAtom);
  return <div>
    {count}
  </div>
}

function Increase() {

  const setCount = useSetRecoilState(counterAtom);
  function increase() {
    setCount(count => count + 1);
  }
  return <button onClick={increase}>Increase</button>
}

function Decrease() {
``
  const setCount = useSetRecoilState(counterAtom);
  function decrease() {
    setCount(count => count - 1);
  }
  return <button onClick={decrease}>Decrease</button>
} */


// Memo

import { memo, useEffect, useState } from "react";


export default function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(count => count + 1);
    }, 2000);
  }, []);

  return <div>
    <CounterComponnent ></CounterComponnent>
    <Increase></Increase>
    <Decrease></Decrease>
  </div>
}

const CounterComponnent = memo(() => {
  return <p>1</p>
})
const Increase = memo(() => {
  return <button>Increase</button>
})

const Decrease = memo(() => {
  return <button>Decrease</button>
})