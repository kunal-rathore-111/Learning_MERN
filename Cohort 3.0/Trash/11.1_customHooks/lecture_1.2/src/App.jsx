import { use, useEffect, useState } from "react";
import { usePrev } from "./hooks/usePrev";
import { useDebounce } from "./hooks/useDebounce";


 // usePrevHook
// export default function App(){

//   const [value,setValue]  = useState(0);
//   const prevValue =  usePrev(value);

//   function increaseValue(){
//     setValue(value => value+1);
//   }
//   return <div>
//   <button onClick={increaseValue}>
//     Current value- {value}
//   </button>
//   <div>Previous value- {prevValue}</div>
//   </div> 
  

// }


// useDebounce

// export default function App(){
//   function SendRequestTo_Backend(){
//     console.log("Request send");
//   }

//   const debounceFun= useDebounce(SendRequestTo_Backend);

//   return <input type="text" onChange={debounceFun} />

// }


// useDebounce 2.0
export default function App(){
  function SendRequestTo_Backend(){
    console.log("Request send");
  }
  const [value,setValue] = useState("");


  const debouncedValue = useDebounce(value,1000);

  function updateValue(event){
    setValue(event.target.value);
  }

  useEffect(()=>{SendRequestTo_Backend()},[debouncedValue]);

  return <input type="text" onChange={updateValue} />

}


// flow => render-> input changes-> updateValue-> re-render-> call useDebounce-> useDebounce=> render use effect cause value changed -> starttime -> input change again do same things -> timer cleared because the useEffect returned or no input change till timer then deboucne value changes and due to which call useEffect which depends on debouncedValue and sendRequestTo_backend called