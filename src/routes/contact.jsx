const contact = () => {
    return (
        <section className='bg-heading h-screen pt-10'>
            <article className="w-5/6 md:w-3/5 mx-auto text-center space-y-4">
                <div>
                    <h1 className="uppercase text-lg font-bold pb-2">Easy<span className='text-orange'>travel</span></h1>
                    <h2 className='font-semibold text-lg tracking-wider'>Contact us.</h2>
                </div>

                <form action="" className='space-y-6'>
                    <div>
                        <label className='capitalize font-bold text-left block'>Your name</label>
                        <input type="text"
                            className='w-full h-10 outline-none rounded-lg border-2 indent-2 '
                            placeholder='Enter name'
                            required
                        />
                    </div>

                    <div>
                        <label className='capitalize font-bold text-left block'>email address</label>
                        <input type='email'
                            className='w-full h-10 outline-none rounded-lg border-2 indent-2 '
                            placeholder='Enter email address'
                            required
                        />
                    </div>

                    <div>
                        <label className='font-bold text-left capitalize block'>user name</label>
                        <textarea rows="6"
                            className='w-full outline-none rounded-lg border-2 indent-2 '
                            placeholder='Your message'
                        />
                    </div>
                    <button type="submit"
                        className='bg-orange text-white font-bold  w-full py-2 uppercase rounded-xl'
                    >send message</button>

                </form>
            </article>
        </section>
    )
}

export default contact
