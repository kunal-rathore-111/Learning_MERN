import { useEffect, useRef } from "react";



export function usePrev(valuw) {

    const val = useRef({ prv: valuw, new: valuw });
    if (val.current.new != valuw) {
        val.current.prv = val.current.new;
        val.current.new = valuw;
    }
    return val.current.prv;    // here the useEffect execute after the returning
}