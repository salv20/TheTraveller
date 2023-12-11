
const Ticket = () => {
    return (
        <section className='grid-cols-3 w-11/12'>

            <article className=' col-span-2 space-y-4 bg-heading'>
                <div className=" grid grid-cols-3 gap-x-5 text-center bg-orange h-10 pt-1">
                    <h1 className="uppercase text-lg font-bold col-span-2">Easy<span className="text-white">travel</span></h1>
                    <img src="boeing.png" alt="" className=' relative -top-2 w-20 ' />
                </div>
                <div className="grid grid-cols-4 pl-2 ">
                    <div className="capitalize font-semibold space-y-4 col-span-3">
                        <p>name: amoke salvation</p>
                        <div className='grid grid-cols-2 gap-y-2'>
                            <p>from:</p>
                            <p>date:</p>
                            <p>to:</p>
                            <p>class:</p>
                        </div>
                    </div>
                    <img src="Scan.png" alt="" className='relative top-4 w-20' />
                </div>
                <div className=' capitalize font-bold grid-cols-3 grid pl-2'>
                    <p>flight num:</p>
                    <p>seat:</p>
                    <p>boarding time:</p>
                </div>
                <p className=' bg-orange h-6'></p>
            </article>
        </section>
    )
}

export default Ticket
