import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './routes/home';
import Layout from './components/layout';
import Bio from './routes/bio';
import Projects from './routes/projects';
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider, 
  Route,
} from "react-router-dom";




const router = createBrowserRouter([

  {
    path: "/BennyMach.com/", 
    element: <Layout />, 
    children: [
      {
      index: true, 
      element: <Home /> 
     }, 
     {
      path: "bio", 
      element: <Bio /> 
     }, 
     {
      path: "projects", 
      element: <Projects /> 
     }
    ]
  }])



 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
