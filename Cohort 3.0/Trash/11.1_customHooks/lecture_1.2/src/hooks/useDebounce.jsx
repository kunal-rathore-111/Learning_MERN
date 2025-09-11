import { useEffect, useRef, useState } from "react";

// useDebounce
// export function useDebounce(SendRequestTo_Backend){
//    const timer = useRef();  // so we can update the same and no render happens
     
//     function debounceFun(){
//         console.log("timer called");
//          clearTimeout(timer.current);
//          timer.current = setTimeout(SendRequestTo_Backend,3000);

//        }

//     return debounceFun;
    
// }

// useDebounce 2.0

export function useDebounce(value,timer){

    const [debouncedValue, setDebounce] = useState(0);

    function setDebouncedValue(){
        console.log("SetDebouncedValue called");
        setDebounce(value);
        return;
    }

    useEffect(()=>{
        console.log("Effect called");

    const clock= setTimeout(()=>{
        setDebouncedValue();
    },timer);

        return ()=>{
            console.log("clear called");
            clearTimeout(clock);
        }
    },[value]);
    return debouncedValue;
}