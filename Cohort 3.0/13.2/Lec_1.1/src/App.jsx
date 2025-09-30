
import { SideBar } from "./componenets/sideBar"
import { Content } from "./componenets/contents/content"

import { BrowserRouter } from "react-router-dom"

export default function App() {


    return <div className={` h-screen flex`} >
        <BrowserRouter>
            <SideBar></SideBar>
        </BrowserRouter>
        {/* <>
            <Content></Content>
        </> */}
    </div>
}