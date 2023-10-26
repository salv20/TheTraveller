import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Leftbar from "./components/Leftbar"
import Rightbar from "./components/Rightbar"
import { useState } from "react"

function App() {
  const [nav, setNav] = useState(false)
  const navFunc = () => (
    setNav(!nav)
  )
  return (
    <main className="md:flex justify-between">
      <Leftbar nav={nav} navFunc={navFunc} />

      <section className="md:w-3/5 lg:w-1/2">
        <Header nav={nav} navFunc={navFunc} />
        <Outlet />
      </section>

      <Rightbar />
    </main>
  )
}

export default App


//  className="w-3/5 rounded-lg bg-heading m-2.5 border-2"
// className="md:flex justify-between"