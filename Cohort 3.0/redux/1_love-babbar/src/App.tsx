import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount, reset } from "./features/counter/counter";
import type { RootState } from "./redux/store";
import { useRef } from "react";


export default function App() {

  const value = useRef<HTMLInputElement>(null);

  const counter = useSelector((state: RootState) => state.counterReducer.value); // fetch data
  const dispatch = useDispatch();// to use any reducer logic

  function handleIncrement() {
    dispatch(increment());
  }
  function handleDecrement() {
    dispatch(decrement());
  }
  function handleReset() {
    dispatch(reset(0));
  }
  function handleIncrementByAmount() {
    const val = Number(value.current?.value);  // if no. then well good else keep 0
    console.log(val);
    dispatch(incrementByAmount(val));
  }
  return <div className="h-[100vh] w-[100vw] bg-black flex flex-col justify-center items-center text-2xl text-white gap-10">
    <ButtonComp val={'+'} handleClickFunc={handleIncrement} />
    <p>Count: {counter} </p>
    <ButtonComp val={'-'} handleClickFunc={handleDecrement} />
    <ButtonComp val={'Reset'} handleClickFunc={handleReset} />
    <InputComp value={value}></InputComp>
    <ButtonComp val={`Increment`} handleClickFunc={() => { handleIncrementByAmount() }} />
  </div >
}

interface ButtonCompInterface {
  val: string,
  handleClickFunc?: () => void,
}

function ButtonComp({ val, handleClickFunc }: ButtonCompInterface) {
  return <button onClick={handleClickFunc} className="px-8 py-4 rounded border">{val}</button>
}

interface InputCompInterface {
  value: React.RefObject<HTMLInputElement | null>,
}
function InputComp({ value }: InputCompInterface) {
  return <input type="number" ref={value} placeholder="Enter the value" className="ring pl-4" />
}

// steps=
//1 create the store using configureStore
//2 wrap App in the provider having store
//3 create slice and export
//4 in store register the reducer