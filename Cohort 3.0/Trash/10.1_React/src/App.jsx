/*      BrowserRouter, Routes, Route, Link, useNavigate, Outlet

import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";



function App() {

 return <div>
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<Layout />} >
         <Route path="/" element={<Landing />} />
         <Route path="/neet/coaching" element={<CoachingComponent />} />
         <Route path="/neet/coaching/class-11" element={<Class11_Component />} />
         <Route path="*" element={<ErrorPage />} />
       </Route>
     </Routes>

   </BrowserRouter>
 </div >

}
function CoachingComponent() {
 return <h1>Coaching component</h1>
}
function Class11_Component() {

 const navigate = useNavigate();
 function redirectUser() {
   navigate("/");
 }

 return <div>
   <h1>Class 11th</h1>
   <button onClick={redirectUser}>go to landing page</button>
 </div>
}

const Landing = () => {
 return <h1>This is landing page</h1>
}

const ErrorPage = () => {
 const navigate = useNavigate();
 return <h2>Error page
   <button onClick={() => { navigate("/") }}>go to home</button>
 </h2>
}

const Layout = () => {
 return <div>
   <Link to="/">KRYLL</Link>
   |
   <Link to="/neet/coaching">NEET</Link>
   |
   <Link to="/neet/coaching/class-11">CLASS-11</Link>

   <Outlet />
   footer
 </div>
}
export default App; */

import { useState, useRef } from "react";


// useRef


function App() {

  const [count, setCount] = useState(0);
  const timer = useRef();


  function startClock() {

    const value = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    timer.current = value;   // store the timer 

  }

  function stopClock() {
    console.log(timer);
    setCount(0);
    clearInterval(timer.current);
  }


  return <div>
    <h2>{count}</h2>
    <button onClick={startClock}>Start</button>
    <button onClick={stopClock}>Stop</button>
  </div>
}

export default App;