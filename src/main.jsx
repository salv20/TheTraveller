import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import noPage from './Pages/noPage.jsx'
import Social from './Pages/Social.jsx'
import Landingroute from './routes/landing.route.jsx'
import Explore from './routes/explore.route.jsx'
import Booking from './routes/booking.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index Component={Landingroute} />
      <Route Component={App}>
        <Route path='social' Component={Social} />
        <Route path='discover' index Component={Explore} />
        <Route path='bookings' Component={Booking} />
      </Route>

      <Route path='*' Component={noPage} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
