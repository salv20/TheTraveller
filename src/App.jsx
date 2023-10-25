import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Leftbar from "./components/Leftbar"
import Rightbar from "./components/Rightbar"

function App() {

  return (
    <main className="md:flex justify-between">
      <Leftbar />

      <section>
        <Header />
        <Outlet />
      </section>

      <Rightbar />
    </main>
  )
}

export default App
