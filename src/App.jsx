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
  const userDetails = localStorage.userDetails
  return (
    <>
      {
        localStorage.userActiveState && userDetails ?
          <main>
            <section className={`${!JSON.parse(localStorage.getItem('userActiveState')) ? 'block' : 'hidden'} w-3/5 md:w-1/3 mx-auto mt-48`}>
              <button>
                <Link to={`${userDetails ? '/login' : '/signup'}`}
                  className=" bg-orange px-10 uppercase text-white font-bold py-4 rounded-xl"
                >
                  {userDetails ? 'please login' : 'please sign up'}
                </Link>
              </button>
            </section>
            <section className={`${JSON.parse(localStorage.getItem('userActiveState')) ? 'block md:grid grid-cols-3 lg:grid-cols-4' : 'hidden'}  justify-between`}>
              <Leftbar nav={nav} navFunc={navFunc} />
              <Mainarea search={search} setSearch={setSearch} navFunc={navFunc} />
              <Rightbar />
            </section>

          </main>
          :
          <button className="text-center w-full mt-72">
            <Link to='/signup'
              className=" bg-orange px-10 uppercase text-white font-bold py-4 rounded-xl"
            >
              please sign up
            </Link>
          </button>

      }
    </>
  )
}

export default App