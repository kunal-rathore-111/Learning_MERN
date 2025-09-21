import { BrowserRouter, Link, Routes, Route, Outlet, useNavigate, useNavigationType } from "react-router-dom"


export const Nav = () => {
    return <nav>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavBarElements />} >
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/Home" element={<Home />}></Route>
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/services/web-design" element={<Webdesign />} />
                    <Route path="/services/devops" element={<Devops />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>

            </Routes>
        </BrowserRouter>
    </nav >
}


const NavBarElements = () => {
    return <>
        <div>
            <div style={{ display: "flex", gap: "20px" }}>
                <Link to='/'>Logo</Link>
                |
                <Link to="/home">Home</Link>
                |
                <OnServices />
            </div>
            <Outlet></Outlet>
            <div>
                footer
            </div>
        </div>
    </>
}

const LandingPage = () => {
    return <div>
        <h2>This is landing page come by outlet</h2 >
    </div>
}
const Home = () => {
    return <div>
        <h2>This is home page</h2>
    </div>
}


const OnServices = () => {


    const navigate = useNavigate();

    function onselect(e) {
        navigate(`/services/${e.target.value}`);
    }

    return <div>
        <select name="Services" onClick={onselect}>
            <option value="">Service</option>
            <option value="web-design">Web-design</option>
            <option value="devops">Devops</option>
        </select>
    </div>
}

const ServicesPage = () => {
    return <h2>This is page data for services page</h2>
}

const Webdesign = () => {
    return <h2>This is Webdesign page</h2>
}
const Devops = () => {
    return <h2>This is Devops page</h2>
}


const ErrorPage = () => {

    const navigate = useNavigate();
    function navigatefunction() {
        navigate("/");
    }

    return <div>
        <h2>This is error page </h2>
        <h3> <button onClick={navigatefunction}>Click </button> to redirect at landing page </h3>
    </div>

}