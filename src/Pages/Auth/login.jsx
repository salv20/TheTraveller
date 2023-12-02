import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (

        <section className='bg-heading h-screen pt-28'>
            <div className='w-5/6 md:w-3/5 mx-auto text-center '>

                <h1 className="uppercase text-lg font-bold pb-2">Easy<span className='text-orange'>travel</span></h1>
                <h1 className='font-semibold text-lg tracking-wider'>Welcome back please Login</h1>

                <form action="" className='pt-8 space-y-5'>
                    <div>
                        <label className='capitalize font-bold text-left block'>email address</label>
                        <input type='email'
                            className='w-full h-12 outline-none rounded-lg border-2 indent-2 '
                            placeholder='Enter email address'
                            required
                        />
                    </div>

                    <div>
                        <label className='capitalize font-bold text-left block'>password</label>
                        <input type='text'
                            className='w-full h-12 outline-none rounded-lg border-2 indent-2 '
                            placeholder='Enter password'
                            required
                        />
                    </div>

                    <button type="submit"
                        className='bg-orange text-white font-bold text-lg w-full py-2 uppercase rounded-xl'
                    >sign in</button>

                </form>
                <p className='font-semibold pt-4'>or <Link className='text-orange' to='/signup'>sign up</Link> if you dont have an account yet.</p>
            </div >
        </section>
    )
}

export default Login
