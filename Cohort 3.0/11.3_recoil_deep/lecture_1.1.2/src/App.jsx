

// async data queries-
// 1 naive way 

import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { networkAtom, totalSelector } from "./atoms";
import { useEffect } from "react";


export default function App() {



    return <div>
        <RecoilRoot>
            <MainComponent></MainComponent>
        </RecoilRoot>
        hi
    </div>
}


function MainComponent() {

    const [networkCount, setNetworkCount] = useRecoilState(networkAtom);
    const total = useRecoilValue(totalSelector);


    return <>
        <button>network ({networkCount.newtork})</button>
        <button>jobs ({networkCount.jobs})</button>
        <button>notification ({networkCount.notification})</button>
        <button>messages ({networkCount.messages})</button>
        <button>Total ({total})</button>
    </>
}