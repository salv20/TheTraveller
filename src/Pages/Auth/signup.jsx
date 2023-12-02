import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <section className='bg-heading h-screen pt-10'>
            <article className="w-5/6 md:w-3/5 mx-auto text-center space-y-6">
                <div>
                    <h1 className="uppercase text-lg font-bold pb-3">Easy<span className='text-orange'>travel</span></h1>
                    <h2 className='font-semibold text-lg tracking-wider'>Create an account with us.</h2>
                    <p className='text-sm'>already have an account <Link to='/login' className='text-orange font-semibold'>login</Link></p>
                </div>

                <form action="" className='space-y-6'>
                    <div>
                        <label className='capitalize font-bold text-left block'>full name</label>
                        <input type="text"
                            className='w-full h-10 outline-none rounded-lg border-2 indent-2 '
                            placeholder='Enter full name'
                            required
                        />
                    </div>

                    <div >
                        <label className='capitalize font-bold text-left block'>email address</label>
                        <input type='email'
                            className='w-full h-10 outline-none rounded-lg border-2 indent-2 '
                            placeholder='Enter email address'
                            required
                        />
                    </div>

                    <div >
                        <label className='capitalize font-bold text-left block'>user name</label>
                        <input type="text"
                            className='w-full h-10 outline-none rounded-lg border-2 indent-2 '
                            placeholder='Enter user name'
                            required
                        />
                    </div>

                    <div>
                        <label className='capitalize font-bold text-left block'>password</label>
                        <input type='text'
                            className='w-full h-10 outline-none rounded-lg border-2 indent-2 '
                            placeholder='Enter password'
                            required
                        />
                    </div>

                    <button type="submit" className='bg-orange text-white font-bold text-lg w-full py-2 uppercase rounded-xl'>sign up</button>

                </form>
            </article>
        </section>
    )
}

export default Signup
