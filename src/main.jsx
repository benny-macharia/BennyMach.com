import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './routes/home';
import Layout from './components/layout';
import Notes from './routes/notes';
import NoteDetails, { NoteDetailsLoader } from './routes/NoteDetails';
import { notesLoader } from './loaders';
import Bio from './routes/bio';
import Quotes from './routes/quotes';
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
      element: <Home />, 
      loader: notesLoader
     }, 
     {
      path: "notes", 
      element: <Notes />, 
      loader: notesLoader
     }, 
     {
      path: "notes/:id", 
      element: <NoteDetails/>, 
      loader: NoteDetailsLoader
     }, 
     {
      path: "bio", 
      element: <Bio /> 
     }, 
     {
      path: "quotes", 
      element: <Quotes /> 
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
