import { useEffect, useRef } from "react";



export function usePrev(value) {

    const val = useRef();

    useEffect(() => {
        val.current = value;
    }, [value])

    return val.current;    // here the useEffect execute after the returning
}