import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Provider } from 'react-redux'
import store from './redux/user/userReducer.jsx'

import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import emptypg from './components/404.jsx'
import Landingroute from './routes/landing.route.jsx'
import Explore from './routes/explore.route.jsx'
import Booking from './routes/booking.jsx'
import Favorite from './routes/favorite.jsx'
import contact from './routes/contact.jsx'
import Weather from './routes/weather.jsx'
import Itinenary from './routes/itinenary.jsx'
import Login from './Pages/Auth/login.jsx'
import Signup from './Pages/Auth/signup.jsx'
import Ticket from './Pages/booking/Ticket.jsx'
import BookingEdit from './Pages/booking/bookingEdit.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index Component={Landingroute} />
      <Route Component={App}>
        <Route path='discover' Component={Explore} />
        <Route path='bookings' Component={Booking} />
        <Route path='favorite' Component={Favorite} />
        <Route path='weather' Component={Weather} />
        <Route path='itinerary' Component={Itinenary} />
        <Route path='tickets' Component={Ticket} />
      </Route>
      <Route path='updatebooking' Component={BookingEdit} />
      <Route>
        <Route path='contact' Component={contact} />
        <Route path='login' Component={Login} />
        <Route path='signup' Component={Signup} />
      </Route>

      <Route path='*' Component={emptypg} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
