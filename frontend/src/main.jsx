 import React from 'react'
 import { StrictMode } from 'react'
 import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements,} from 'react-router-dom'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Home from './Components/Home.jsx'
import Mobiles from './Components/Mobiles.jsx'
import Earbuds from './Components/Earbuds.jsx'
import Smartwatch from './Components/Smartwatch.jsx'
import Speakers from './Components/Speakers.jsx'
import TV from './Components/TV.jsx'
import Login from './Components/Login.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
    <Route path='/' element={<Home/>}/>
    <Route path='Mobiles' element={<Mobiles/>}/>
    <Route path='Earbuds' element={<Earbuds/>}/>
    <Route path='Smartwatch' element={<Smartwatch/>}/>
    <Route path='Speakers' element={<Speakers/>}/>
    <Route path='TV' element={<TV/>}/>
    <Route path='Login' element={<Login/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
