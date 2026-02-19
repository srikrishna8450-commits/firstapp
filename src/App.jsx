// import { useState } from 'react'
import React from "react";
import { createRoot } from "react-dom/client";
import { Link, Outlet } from "react-router-dom";
import Counter from "./counter/counter"

// import Welcome from "./counter/card"
import Fname from "./counter/fname";
import Lname from "./counter/lname";

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Product from "./Apicalls/apicall"

// import


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <h5>Navbar</h5>
      
      <Link to="/counter">Counter</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/fname">Fname</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/lname">Lname</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/apicall">Product</Link>&nbsp;&nbsp;&nbsp;
      {/* <Counter v={50}></Counter>
      <h4>Total activities </h4>
      <Counter v={100}></Counter>
      <Fname></Fname>
      <Lname></Lname>
      <data></data> */}
      <Outlet />
    </>
  )
}



export default App
