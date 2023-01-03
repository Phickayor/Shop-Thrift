import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../images/shop_thrift_logo.png'
import Link from 'next/link'
import { faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons'
function Navbar() {
    const downArrow = <FontAwesomeIcon icon={faAngleDown} />
    const search = <FontAwesomeIcon icon={faSearch} />
    return (
        <div className='flex fixed w-full backdrop-blur-lg z-20'>
            <img src={Logo} alt="Shop Thrift" className=' px-5 py-5 text-3xl w-2/12  font-semibold font-serif text-slate-100' />
            <div className='flex flex-col justify-center  w-4/12'>
                <ul className='flex space-x-10 text-slate-100 justify-center font-semibold font-mono text-xl'>
                    <li>Home</li>
                    <li>Categories<i>&nbsp;{downArrow}</i></li>
                    <li>Help<i>&nbsp;{downArrow}</i></li>
                    <li>Cart&nbsp;
                        <sup className=' bg-white rounded-full text-violet-600 text-lg py-1 px-2 text-center'>2</sup></li>
                </ul>
            </div>
            <div className='flex flex-col justify-center w-6/12'>
                <div className='flex justify-between'>
                    <div className='w-1/2 h-full flex'>
                        <h1 className='w-1/6 h-full text-slate-100 px-5 py-5 text-2xl '>{search}</h1>
                        <input type="text" className='w-full h-full bg-transparent text-slate-100 placeholder:text-slate-200 focus:outline-none' placeholder='Search for anything...' />
                    </div>

                    <div className='w-1/2 space-x-5 font-bold font-mono text-slate-100 text-xl'>
                        <Link href="/login"><button className=' px-10 py-5'>Login</button></Link>
                        <Link href="/signup"><button className='border-2 px-10 py-5 rounded-xl'>Get Started</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar