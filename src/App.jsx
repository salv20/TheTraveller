import Mainarea from "./components/mainarea"
import Leftbar from "./components/Leftbar"
import Rightbar from "./components/Rightbar"
import { useState } from "react"

function App() {
  const [nav, setNav] = useState(false)
  const [search, setSearch] = useState('')
  const navFunc = () => (
    setNav(!nav)
  )

  return (
    <main className="md:flex justify-between">
      <Leftbar nav={nav} navFunc={navFunc} />
      <Mainarea search={search} setSearch={setSearch} navFunc={navFunc} />
      <Rightbar />
    </main>
  )
}

export default App