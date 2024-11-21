import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'
import CardDetailPage from './components/CardDetailPage/CardDetailPage.jsx'
import CardBuy from './components/CardBuy/CardBuy.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='craddetailpage' element={<CardDetailPage />} />

      <Route path='cradbuy' element={<CardBuy />} />
   </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
