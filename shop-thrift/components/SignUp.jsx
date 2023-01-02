import React from 'react'
import Logo from '../images/shop_thrift_logo.png'
import Link from 'next/link'
function SignUp() {
    return (
        <div className='flex'>
            <div className='w-full h-screen lg:w-1/2 lg:flex flex-col justify-center overflow-y-auto'>
                <img src={Logo} alt="Shop Thrift" className='lg:absolute sticky m-10 lg:top-0 text-3xl font-semibold font-serif text-slate-700' />

                <div className='container mx-auto lg:w-3/5 w-4/5'>
                    <h1 className='text-4xl font-semibold'>Sign Up</h1>
                    <p className='text-lg font-semibold mt-2 text-violet-600 mb-10 font-mono'>Create an account with us today</p>
                    <form action="http://localhost:8080/signUp" method="post" className='space-y-5'>
                        <label className='font-semibold text-slate-800'>Name<i className='text-violet-600 text-lg font-bold'>*</i></label>
                        <input className='rounded-xl block border w-full p-2' type="text" name="name" placeholder="Your Name" required />
                        <label className='block font-semibold text-slate-800'>Email<i className='text-violet-600 text-lg font-bold'>*</i></label>
                        <input
                            className='block rounded-xl border w-full p-2'
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                        />
                        <label className='block font-semibold text-slate-800'>Password<i className='text-violet-600 text-lg font-bold'>*</i></label>
                        <input
                            className='block rounded-xl border w-full p-2'
                            type="password"
                            name="pswd"
                            placeholder="Input your password..."
                            required
                        />

                        <input type="checkbox" className='bg-violet-600' />
                        <label className='font-semibold text-slate-700'>&nbsp; I agree to the</label>
                        <Link href="/termsAndConditions" className='text-violet-600 font-semibold'>&nbsp; Terms & Conditions</Link>

                        <button className='rounded-xl text-center bg-violet-500 text-white w-full mt-10 p-3 font-bold text-xl'>Create Account</button>
                        <div className='mt-10'>
                            <p className='text-md inline'>Already have an account?</p><Link href="/login" className='inline text-violet-600 font-semibold'>&nbsp; Login</Link>
                        </div>
                    </form>
                </div>
            </div>
            <div className='hidden flex flex-col justify-center lg:block w-1/2 h-full flex flex-col justify-center container mx-auto bg-slate-900'>
                <img className='object-cover h-screen w-full opacity-70' src="https://images.pexels.com/photos/14823052/pexels-photo-14823052.jpeg?auto=compress&cs=tinysrgb&w=2000" />
            </div>
        </div>



    )
}

export default SignUp