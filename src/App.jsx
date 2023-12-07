import Mainarea from "./components/mainarea"
import Leftbar from "./components/Leftbar"
import Rightbar from "./components/Rightbar"
import { useState } from "react"
import { Link } from "react-router-dom"
function App() {
  const [nav, setNav] = useState(false)
  const [search, setSearch] = useState('')
  const navFunc = () => (
    setNav(!nav)
  )
  const activeUser = JSON.parse(localStorage.getItem('userActiveState'))

  return (
    <main className="">
      <section className={`${!activeUser ? 'block' : 'hidden'} w-3/5 md:w-1/2 mx-auto mt-48`}>
        <button>
          <Link to='/login'
            className=" bg-orange px-10 uppercase text-white font-bold py-4 rounded-xl"
          >please login</Link>
        </button>
      </section>
      <section className={`${activeUser ? 'block' : 'hidden'} md:flex justify-between`}>
        <Leftbar nav={nav} navFunc={navFunc} />
        <Mainarea search={search} setSearch={setSearch} navFunc={navFunc} />
        <Rightbar />
      </section>
    </main>
  )
}

export default App