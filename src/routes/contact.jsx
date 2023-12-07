
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const contact = () => {
    const form = useRef();
    const [emailData, setEmaildata] = useState({
        fullName: '',
        email: '',
        message: "",

    })

    const sendEmail = (e) => {
        e.preventDefault();
        const nameregex = /^[a-zA-Z]([-']?[a-zA-Z]+)+\s*( [a-zA-Z]([-']?[a-zA-Z]+)+\s*)+$/
        const emailregex = /\S+@\S+\.\S+/


        !(emailData.fullName.match(nameregex)) && document.querySelector('.errorname').classList.remove('hidden')
        !(emailData.email.match(emailregex)) && document.querySelector('.erroremail').classList.remove('hidden')
        !(emailData.message) && document.querySelector('.errormessage').classList.remove('hidden')

        emailData.fullName.match(nameregex) &&
            (emailData.email.match(emailregex)) &&
            (emailData.message) &&
            emailjs.sendForm('service_3ee8fgw', 'template_mfde9xd', form.current, 'lhb8k-wo5ui7qmfhC')
                .then(() => {
                    setEmaildata({
                        ...emailData,
                        fullName: '',
                        email: '',
                        message: '',
                    })
                    toast.success(`Message delivered. We will reach back to you as soon as possible.`);
                }, () => {
                    toast.error(`Please check you internet connection and try again.`);
                })
    };

    return (
        <section className='bg-heading h-screen pt-10'>
            <article className="w-5/6 md:w-3/5 mx-auto text-center space-y-4">
                <div>
                    <h1 className="uppercase text-lg font-bold pb-2">Easy<span className='text-orange'>travel</span></h1>
                    <h2 className='font-semibold text-lg tracking-wider'>Contact us.</h2>
                </div>

                <form ref={form} className='space-y-6' onSubmit={sendEmail}>
                    <div>
                        <label className='capitalize font-bold text-left block'>Your name</label>
                        <input
                            type="text" name="from_name"
                            className='w-full h-10 capitalize outline-none rounded-lg border-2 indent-2 '
                            placeholder='Enter name'
                            value={emailData.fullName}
                            onChange={(e) => {
                                document.querySelector('.errorname').classList.add('hidden');
                                setEmaildata({ ...emailData, fullName: e.target.value })
                            }}
                        />
                        <p className="errorname normal-case text-red-600 text-left hidden">Please enter a valid name</p>
                    </div>

                    <div>
                        <label className='capitalize font-bold text-left block'>email address</label>
                        <input
                            type="email" name="from_email"
                            className='w-full h-10 outline-none rounded-lg border-2 indent-2 '
                            placeholder='Enter email address'
                            value={emailData.email}
                            onChange={(e) => {
                                document.querySelector('.erroremail').classList.add('hidden');
                                setEmaildata({ ...emailData, email: e.target.value })
                            }}
                        />
                        <p className="erroremail normal-case text-red-600 text-left hidden">Please enter a valid email</p>
                    </div>

                    <div>
                        <label className='font-bold text-left capitalize block'>message</label>
                        <textarea rows="6"
                            className='w-full outline-none rounded-lg border-2 indent-2 '
                            placeholder='Your message'
                            name="message"
                            value={emailData.message}
                            onChange={(e) => {
                                document.querySelector('.errormessage').classList.add('hidden');
                                setEmaildata({ ...emailData, message: e.target.value })
                            }}

                        />
                        <p className="errormessage normal-case text-red-600 text-left hidden">Please enter message</p>
                    </div>
                    <button
                        type="submit"
                        value="Send"
                        className='bg-orange text-white font-bold  w-full py-2 uppercase rounded-xl'
                    >send message</button>
                    <ToastContainer
                        hideProgressBar={true}
                        closeOnClick
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                    />
                </form>
            </article>
        </section>
    )
};


export default contact
