
const Rightbar = () => {
    const fullName = JSON.parse(localStorage.getItem('userDetails'))[0].fullName

    return (
        <section className=' sect overflow-y-scroll h-screen bg-heading text-center px-5 capitalize pt-8 font-bold space-y-6 hidden md:block'>
            <h1 className='text-lg md:text-xl'>my profile</h1>
            <img src="/user.png" alt="" className='w-24 mx-auto border-2 border-orange rounded-full ' />

            <div>
                <h1>{fullName}</h1>
            </div>

            <div className=" space-y-5 pb-5">
                <h2>destination trips</h2>
                <article className='flex bg-orange py-7 px-4 space-x-3 rounded-xl hover:-translate-y-1.5 transition-all duration-1000'>
                    <img src="/obudu.jpg" alt="" className='w-24' />
                    <div>
                        <h3>obudu</h3>
                        <h4>25 octomber,2023</h4>
                    </div>
                </article>

                <article className='flex bg-orange  py-7 px-4 space-x-3 rounded-xl hover:-translate-y-1.5 transition-all duration-1000'>
                    <img src="/obudu.jpg" alt="" className='w-24' />
                    <div>
                        <h3>obudu</h3>
                        <h4>25 octomber,2023</h4>
                    </div>
                </article>

                <article className='flex bg-orange  py-7 px-4 space-x-3 rounded-xl hover:-translate-y-1.5 transition-all duration-1000'>
                    <img src="/obudu.jpg" alt="" className='w-24' />
                    <div>
                        <h3>obudu</h3>
                        <h4>25 octomber,2023</h4>
                    </div>
                </article>


            </div>
        </section>
    )
}

export default Rightbar
