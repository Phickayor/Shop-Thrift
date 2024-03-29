import React, { useState, useRef } from 'react'
import Logo from '../images/shop_thrift_logo.png'
import Link from 'next/link'
// import Image from 'next/image'
function Login() {
    const emailValue = useRef(null)
    const pswdValue = useRef(null)
    const [email, setEmail] = useState("");
    const [pswd, setPswd] = useState("");

    function HandleSubmit(e) {
        e.preventDefault()
        setEmail(emailValue.current.value)
        setPswd(pswdValue.current.value)
        fetch("http://localhost:8080/signIn", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, pswd })
        });
        fetch('http://localhost:8080/signIn').then(function (response) {
            return response.json()
        }).then(function (data) {
            console.log(data)
        })
    }
    return (
        <div className='flex'>
            <div className='w-full h-screen lg:w-1/2 flex flex-col overflow-y-auto'>
                {/* <img src={Logo} alt="Shop Thrift" className='absolute m-10 text-3xl font-semibold font-serif text-slate-700' /> */}
                <div className=' sticky top-0 backdrop-blur-lg'>
                    <h1 className=' px-10 py-10 text-3xl font-semibold font-serif text-slate-700'>Shop Thrift</h1>
                </div>
                <div className='container mx-auto lg:w-3/5 w-4/5'>
                    <h1 className='text-4xl font-semibold'>Login</h1>
                    <p className='text-lg font-semibold mt-2 text-violet-600 mb-10 font-mono'>Welcome back we are glad to see you again</p>
                    <form onSubmit={HandleSubmit} method="post" className='space-y-5'>
                        <label className='font-semibold text-slate-800'>Email<i className='text-violet-600 text-lg font-bold'>*</i></label>
                        <input
                            className='rounded-xl block border w-full p-2'
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            ref={emailValue}
                            required
                        />
                        <label className='block font-semibold text-slate-800'>Password<i className='text-violet-600 text-lg font-bold'>*</i></label>
                        <input
                            className='block rounded-xl border w-full p-2'
                            type="password"
                            name="pswd"
                            placeholder="Input your password..."
                            ref={pswdValue}
                            required
                        />
                        <div className='flex w-full font-semibold'>
                            <div className='w-8/12'>
                                <input type="checkbox" className='bg-violet-600' />
                                <label className=' text-slate-700'>&nbsp; Remember me</label>
                            </div>
                            <Link href="/forgetpassword" className='inline-block w-4/12 text-center text-violet-600'>Forgot password?</Link>
                        </div>
                        <button className='rounded-xl text-center bg-violet-500 text-white w-full mt-10 p-3 font-bold text-xl'>Login</button>
                        <div className='mt-10'>
                            <p className='text-md inline'>Don't have an account?</p><Link href="/signup" className='inline text-violet-600 font-semibold'>&nbsp; Create account</Link>
                        </div>
                    </form>
                </div>
            </div>
            <div className='hidden lg:block w-1/2 h-full flex flex-col justify-center container mx-auto bg-slate-900'>
                <img className='object-cover h-screen w-full opacity-70' src="https://images.pexels.com/photos/14823052/pexels-photo-14823052.jpeg?auto=compress&cs=tinysrgb&w=2000" />
            </div>
        </div>
    )
}

export default Login