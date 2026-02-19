import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css'
import App from './App.jsx'
import Counter from './counter/counter.jsx'
import Fname from './counter/fname.jsx'
import Lname from './counter/lname.jsx'
import Product from './Apicalls/apicall.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children :[
      {
        path:"/Counter",
        element: <Counter />
      },
      {
        path:"/fname",
        element: <Fname />
      },
      {
        path:"/lname",
        element: <Lname />
      },
      {
        path :"/apicall",
        element: <Product />
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} ></RouterProvider> 
)
