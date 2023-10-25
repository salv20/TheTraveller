import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Leftbar from "./components/Leftbar"
import Rightbar from "./components/Rightbar"

function App() {

  return (
    <main className="md:flex justify-between">
      <Leftbar />

      <section className="md:w-3/5 lg:w-1/2">
        <Header />
        <Outlet />
      </section>

      <Rightbar />
    </main>
  )
}

export default App


//  className="w-3/5 rounded-lg bg-heading m-2.5 border-2"
// className="md:flex justify-between"