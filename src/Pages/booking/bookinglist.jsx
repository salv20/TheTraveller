import { FaCircle, FaTrashAlt } from 'react-icons/fa'

const Bookinglist = () => {

    return (
        <article className="capitalize font-semibold space-y-3 bg-heading rounded-r-full p-3">
            <h1 className="font-bold text-lg pb-3">all bookings</h1>

            <div className="flex">
                <div className="w-full space-y-3">
                    <div className="grid grid-cols-3 gap-x-2">
                        <p> nigeria </p>
                        <div>
                            <p>5hrs 15min</p>
                            <div className="flex  relative right-1.5 sm:right-3.5"> <FaCircle className=" text-orange relative text-sm bottom-1.5 " /><hr className="w-20 h-0.5 bg-orange" />  <FaCircle className="relative bottom-1.5 text-sm text-orange" /></div>
                        </div>
                        <p> canada </p>
                    </div>
                    <hr className=" border-dotted bg-lightgray " />
                    <div className="grid grid-cols-3">
                        <p>america airlines</p>
                        <p>$20.50</p>
                        <button type="button" className="w-fit px-8 py-2 bg-orange rounded-3xl text-white capitalize font-bold relative right-5 sm:right-0">edit</button>
                    </div>
                </div>

                {/*  */}
                <div className="text-3xl text-orange h-fit mt-8">
                    <button type="button"><FaTrashAlt /></button>
                </div>
            </div>
        </article>
    )
}

export default Bookinglist
