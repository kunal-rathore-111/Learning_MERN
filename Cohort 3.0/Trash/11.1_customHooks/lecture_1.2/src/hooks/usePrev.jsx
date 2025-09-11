import { useEffect, useRef } from "react";






export function usePrev(value){

    const prevValue = useRef();

    useEffect(()=>{
        prevValue.current=value;
    },[value])

    return prevValue.current; // first return then the useEffect execute therefore it will hold previous value
}


