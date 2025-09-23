
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ErrorComponent } from "./utils/ErrorBoundary";
import { Nav } from "./components/nav";

import { Landing, Home, Services, Webdesign, Devops } from "./components/Pages"

export default function App() {

    return <div>
        <BrowserRouter>
            <ErrorComponent>
                <Nav></Nav>
            </ErrorComponent>

            <ErrorComponent>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/services/web-design" element={<Webdesign />} />
                    <Route path="/services/devops" element={<Devops />} />
                </Routes>
            </ErrorComponent>
        </BrowserRouter>
    </div>

}