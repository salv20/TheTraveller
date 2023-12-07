import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux'
let accounts = []

const Signup = () => {

    const [inputData, setInputData] = useState({
        fullName: '',
        email: '',
        userName: "",
        password: ''
    })



    const onSubmit = (event) => {
        event.preventDefault()
        const notify = () => toast.error(`Email already exist, please Log in.`);

        // SIGNUP FUNCTION
        const SignupFunc = () => {
            accounts.push(inputData),
                console.log(accounts),
                localStorage.setItem('userDetails', JSON.stringify(accounts))

            setInputData({
                ...inputData,
                fullName: '',
                email: '',
                userName: '',
                password: ''
            })
        }

        // REGEX
        const nameregex = /^[a-zA-Z]([-']?[a-zA-Z]+)+\s*( [a-zA-Z]([-']?[a-zA-Z]+)+\s*)+$/
        const emailregex = /\S+@\S+\.\S+/
        const userNameregex = /^[a-zA-Z]+\s*$/
        const passRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*].{5,16}$/

        // name validation
        !(inputData.fullName.match(nameregex)) && document.querySelector('.errorname').classList.remove('hidden')
        !(inputData.email.match(emailregex)) && document.querySelector('.erroremail').classList.remove('hidden')
        !(inputData.userName.match(userNameregex)) && document.querySelector('.erroruserName').classList.remove('hidden')
        !(inputData.password.match(passRegex)) && document.querySelector('.errorpassword').classList.remove('hidden')


        inputData.fullName.match(nameregex) &&
            (inputData.email.match(emailregex)) &&
            (inputData.userName.match(userNameregex)) &&
            (inputData.password.match(passRegex)) &&
            (
                accounts.length ?
                    accounts.map((user => {
                        if (inputData.email.toLocaleLowerCase() === user.email.toLocaleLowerCase()) {
                            console.log(user.email);
                            notify()
                        } else {
                            SignupFunc()
                        }
                    })) : SignupFunc()
            )
    }


    useEffect(() => {
        localStorage.userDetails ? (
            accounts = JSON.parse(localStorage.getItem('userDetails'))
        )
            : localStorage.setItem('userDetails', JSON.stringify(accounts))
    }, [])

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
                            className='w-full h-10 outline-none rounded-lg border-2 indent-2 capitalize'
                            placeholder='Enter full name'
                            required
                            value={inputData.fullName}
                            onChange={(e) => {
                                setInputData({ ...inputData, fullName: e.target.value });
                                document.querySelector('.errorname').classList.add('hidden')
                            }}
                        />
                        <p className="errorname normal-case text-red-600 text-left hidden">Please enter a valid name</p>
                    </div>

                    <div >
                        <label className='capitalize font-bold text-left block'>email address</label>
                        <input type='email'
                            className='w-full h-10 outline-none rounded-lg border-2 indent-2 '
                            placeholder='Enter email address'
                            required
                            value={inputData.email}
                            onChange={(e) => {
                                setInputData({ ...inputData, email: e.target.value });
                                document.querySelector('.erroremail').classList.add('hidden')
                            }}
                        />
                        <p className="erroremail normal-case text-red-600 text-left hidden">Please enter a valid email</p>
                    </div>

                    <div >
                        <label className='capitalize font-bold text-left block'>user name</label>
                        <input type="text"
                            className='w-full h-10 outline-none rounded-lg border-2 indent-2 capitalize '
                            placeholder='Enter user name'
                            required
                            value={inputData.userName}
                            onChange={(e) => {
                                setInputData({ ...inputData, userName: e.target.value });
                                document.querySelector('.erroruserName').classList.add('hidden')
                            }}
                        />
                        <p className="erroruserName normal-case text-red-600 text-left hidden">Please enter a valid user Name</p>
                    </div>

                    <div>
                        <label className='capitalize font-bold text-left block'>password</label>
                        <input type='text'
                            className='w-full h-10 outline-none rounded-lg border-2 indent-2 '
                            placeholder='Enter password'
                            required
                            value={inputData.password}
                            onChange={(e) => {
                                setInputData({ ...inputData, password: e.target.value });
                                document.querySelector('.errorpassword').classList.add('hidden')
                            }}
                        />
                        <p className="errorpassword normal-case text-red-600 text-left hidden">Password contain have a special character and a number and length more than 5</p>
                    </div>

                    <button type="submit"
                        className='bg-orange text-white font-bold text-lg w-full py-2 uppercase rounded-xl'
                        onClick={(e) => onSubmit(e)}
                    >sign up</button>
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
}

export default Signup
