import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import mainlayout from './Layouts/mainlayout.jsx'
import noPage from './Pages/noPage.jsx'
import Social from './Pages/Social.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' Component={mainlayout}>
      <Route index Component={App} />
      <Route path='social' Component={Social}>social</Route>

      <Route path='*' Component={noPage} />
      <Route />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
