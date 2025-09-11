import { useEffect, useState, useRef } from "react";
import axios from "axios";

// custom hook
export function useFetch(url, method) {

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    async function getData() {
        setLoading(true);
        const result = await axios({
            url: url,
            method: method
        });
        const newData = result.data;
        setData(newData);
        setLoading(false);
    }

    useEffect(() => {
        getData();
        console.log("effet url")
    }, [url]);

    // const timer = useRef();
    // useEffect(() => {
    //     console.log("effet time")
    //     timer.current = setInterval(() => { getData() }, 5 * 1000);
    //     return () => {
    //         console.log("clear")
    //         clearInterval(timer.current)
    //     }

    // }, [url])

    return { data, loading };
}