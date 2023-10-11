import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import mainlayout from './Layouts/mainlayout.jsx'
import Hero from './landing/Hero.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' Component={mainlayout}>
      <Route index Component={Hero} />
      <Route />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
