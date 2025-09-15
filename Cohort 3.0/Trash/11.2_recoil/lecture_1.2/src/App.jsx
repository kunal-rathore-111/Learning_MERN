import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom, evenSelector } from "./store/atom/counterAtom";



export default function App() {
  return <div>
    <RecoilRoot>
      <Buttons></Buttons>
      <Counter></Counter>
      <IsEven></IsEven>
    </RecoilRoot>
  </div>
}

function Buttons() {

  const setCount = useSetRecoilState(counterAtom);
  function increase() {
    setCount(count => count + 2);
  }
  function decrease() {
    setCount(count => count - 1);
  }
  return <div>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
  </div>
}

function Counter() {
  const count = useRecoilValue(counterAtom);
  return <div>
    {count}
  </div>
}


function IsEven() {
  const even = useRecoilValue(evenSelector);
  return <div>
    {even ? "Even" : "Odd"}
  </div>
}