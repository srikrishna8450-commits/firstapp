// import { useState } from 'react'
import Counter from "./counter/counter"
// import Welcome from "./counter/card"
import Fname from "./counter/fname";
import Lname from "./counter/lname";

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import data from "./Apicalls/apicall"


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h4>total visitors</h4>
      <Counter v={50}></Counter>
      <h4>Total activities </h4>
      <Counter v={100}></Counter>
      <Fname></Fname>
      <Lname></Lname>
      <data></data>
      
    </>
  )
}



export default App
