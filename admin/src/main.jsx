import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import ViewSubscribe from './components/ViewSubscribe/ViewSubscribe.jsx'
import AllCard from './components/allCard/AllCard.jsx'
import AllRegisterUser from './components/allRegisterUser/AllRegisterUser.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='viewSubscribe' element={<ViewSubscribe />} />
      <Route path='allcard' element={<AllCard/>} />
      <Route path='allusers' element={<AllRegisterUser/>} />
      <Route path='allusers' element={<AllRegisterUser/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)