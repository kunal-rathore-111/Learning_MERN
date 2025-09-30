/* // useState,useEffect, clear previous render, dependencyArray, conditional re-rendering

import { useState, useEffect } from "react";


function App() {

  const [value, setValue] = useState(0);
  const [isShow, setShow] = useState(false);



  useEffect(() => {

    if (!isShow) { return };
    const timer = setInterval(() => {
      setValue(value => value + 1);
    }, 1000)

    return function () {
      setValue(0);
      clearInterval(timer);
    }
  }, [isShow]);


  return <div>

    {<span>Value- {value}</span>}
    <button onClick={() => { setShow(true) }} >StartTimer</button>
    <button onClick={() => { setShow(false) }}>StopTimer</button>
  </div>
}


export default App; */



//     BrowserRouter, Routes, Route, Link, useNavigate, Outlet

import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function App() {

  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/neet/coaching" element={<NeetCoaching />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
}

const Main = () => {
  return <div>
    <Link to="/">Landing</Link> _|-
    <Link to="/neet/coaching">NeetCoaching</Link> _|-
    <Link to="*">Error</Link>
    <Outlet />
    Fotter
  </div>
}

const Landing = () => { return <div><h2>This is landing page</h2></div> }

const NeetCoaching = () => {
  return <div>
    <h2>This is neet coaching page</h2>
  </div>
}


const ErrorPage = () => {
  const navigate = useNavigate();

  return <div>
    <h2>This is error page</h2>
    <button onClick={() => { navigate("/") }}> Click here to go Landing Page</button>
  </div >
}



export default App;