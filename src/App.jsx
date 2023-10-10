import { useState } from 'react'
import Header from './assets/components/layout/Header'
import Footer from './assets/components/layout/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
