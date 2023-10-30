import { useState } from "react"
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Subscription = () => {
    const [email, setmail] = useState('')

    const notify = (e) => {
        e.preventDefault()
        if (email && email.toLowerCase().includes('@' && '.com')) {
            return toast.success('subscription successful. Thanks for subscribing.', setmail(''))
        } else return (
            toast.error('Please enter a valid email.', setmail('')))



    }

    return (
        <section className='py-8 bg-places text-center space-y-5 px-2'>
            <div className="bg-subscribe py-10 rounded-lg border-2 mx-3 sm:w-3/4 sm:mx-auto lg:w-1/2 text-center">
                <p className="text-lightgray font-semibold leading-loose">Subscribe to get information, latest news and other <span className='md:block'>interesting offers about easyTravel.</span></p>
                <form className="space-y-2 sm:space-x-3 sm:space-y-0 sm:flex sm:px-5">
                    <input type="email"
                        placeholder="your email"
                        className=" bg-dawhite outline-none py-1.5 w-11/12 text-center rounded-sm" required value={email}
                        onChange={e => (setmail(e.target.value))}
                    />
                    <button type="submit" aria-label="subscription"
                        className="bg-darkpink w-1/2 py-1.5 rounded-sm"
                        onClick={notify}
                    > Subscribe </button>
                    <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={true}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="colored"
                        transition={Slide}
                        className='font-bold capitalize'
                    />
                </form>
            </div>

        </section>
    )
}

export default Subscription


