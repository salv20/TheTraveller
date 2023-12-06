import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const notify = () => toast.error(`please sign up.`);
    const wrongDetails = () => toast.error('incorrect email or password')
    const [detail, setDetail] = useState([])
    const [loginData, setloginData] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        localStorage.userLogin && (
            JSON.parse(localStorage.getItem('userLogin')),
            setDetail(JSON.parse(localStorage.getItem('userLogin')))
        )
    }, [])
    const LoginFunc = (event) => {
        event.preventDefault()

        //REGEX
        const emailregex = /\S+@\S+\.\S+/
        const passRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*].{5,16}$/

        //FETCH LOCAL STORAGE
        if (detail.length) {
            const userACtive = detail.find(user => user.email.toLowerCase() === loginData.email.toLowerCase())
            console.log(userACtive);
            const activeEmail = userACtive?.email
            const activePassword = userACtive?.password
            console.log(activeEmail, activePassword);

            (activeEmail?.toLowerCase() === loginData.email?.toLowerCase()) &&
                (activePassword == loginData.password) ?
                console.log('success') :
                wrongDetails()

        } else {
            notify()
        }


        //ERROR CHECK
        !(loginData.password.match(passRegex)) && document.querySelector('.errorpassword').classList.remove('hidden')
        !(loginData.email.match(emailregex)) && document.querySelector('.erroremail').classList.remove('hidden')

    }


    return (

        <section className='bg-heading h-screen pt-28'>
            <div className='w-5/6 md:w-3/5 mx-auto text-center '>

                <h1 className="uppercase text-lg font-bold pb-2">Easy<span className='text-orange'>travel</span></h1>
                <h1 className='font-semibold text-lg tracking-wider'>Welcome back please Login</h1>

                <form action="" className='pt-8 space-y-5'>
                    <div>
                        <label className='capitalize font-bold text-left block'>email address</label>
                        <input
                            type='email'
                            className='w-full h-12 outline-none rounded-lg border-2 indent-2 '
                            placeholder='Enter email address'
                            value={loginData.email}
                            onChange={(e) => (
                                setloginData({ ...loginData, email: e.target.value }),
                                document.querySelector('.erroremial').classList.add('hidden')
                            )}
                        />
                        <p className="erroremail normal-case text-red-600 text-left hidden">Please enter a valid emial</p>
                    </div>

                    <div>
                        <label className='capitalize font-bold text-left block'>password</label>
                        <input type='text'
                            className='w-full h-12 outline-none rounded-lg border-2 indent-2 '
                            placeholder='Enter password'
                            value={loginData.password}
                            onChange={e => (
                                setloginData({ ...loginData, password: e.target.value }),
                                document.querySelector('.errorpassword').classList.add('hidden')
                            )}
                        />
                        <p className="errorpassword normal-case text-red-600 text-left hidden">Please enter a valid password</p>
                    </div>

                    <button type="submit"
                        className='bg-orange text-white font-bold text-lg w-full py-2 uppercase rounded-xl'
                        onClick={(e) => LoginFunc(e)}

                    >sign in</button>
                    <ToastContainer
                        hideProgressBar={true}
                        closeOnClick
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                    />

                </form>
                <p className='font-semibold pt-4'>or <Link className='text-orange' to='/signup'>sign up</Link> if you dont have an account yet.</p>
            </div >
        </section>
    )
}

export default Login
