import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../images/shop_thrift_logo.png'
import Link from 'next/link'
import { faAngleDown, faBars, faCalendar, faClose, faSearch } from '@fortawesome/free-solid-svg-icons'
function Navbar() {
    const downArrow = <FontAwesomeIcon icon={faAngleDown} />
    const search = <FontAwesomeIcon icon={faSearch} />
    const menu = <FontAwesomeIcon icon={faBars} />
    const close = <FontAwesomeIcon icon={faClose} />
    const [sideMenuIcon, setSideMenuIcon] = useState(menu)
    const [width, setWidth] = useState("0")
    const [padding, setPadding] = useState("0")
    function SidemenuBar(e) {
        if (width === "0") {
            setWidth("20rem")
            e.currentTarget.classList.toggle('px-6');
            setSideMenuIcon(close)
            setPadding("5px")
        }
        else {
            setWidth("0")
            e.currentTarget.classList.toggle('px-6');
            setPadding("0")
            setSideMenuIcon(menu)
        }
    }

    return (
        <div className='sticky top-0 z-40 w-full h-[12vh] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            <div className=' flex justify-between sticky w-full backdrop-blur-lg z-20 '>
                <h1 className=' px-5 py-5 text-3xl lg:w-3/12  font-semibold font-serif text-slate-100'>Shop Thrift</h1>
                <div className='hidden lg:flex flex-col justify-center  w-6/12'>
                    <ul className='flex space-x-10 text-slate-100 justify-center font-semibold font-mono text-xl'>
                        <a href="#home"><li>Home</li></a>
                        <a href=""><li>Categories<i>&nbsp;{downArrow}</i></li></a>
                        <a href=""><li>Help<i>&nbsp;{downArrow}</i></li></a>
                        <a href="#">
                            <li>Cart&nbsp;
                                <sup className=' bg-white rounded-full text-violet-600 text-lg py-1 px-2 text-center'>2</sup>
                            </li>
                        </a>
                    </ul>
                </div>
                <div className='hidden lg:flex flex-col justify-center w-3/12 xl:w-6/12'>
                    <div className='flex justify-between'>
                        <div className='w-1/2 h-full xl:flex hidden'>
                            <h1 className='w-1/6 h-full text-slate-100 py-5 text-2xl'>{search}</h1>
                            <input autoFocus type="text" className='w-full h-full bg-transparent text-white font-semibold placeholder:text-slate-200 focus:outline-none' placeholder='Search for anything...' />
                        </div>

                        <div className='w-1/2 xl:w-full flex xl:justify-end space-x-5 font-bold font-mono text-slate-100 text-xl mr-4'>
                            <Link href="/login" className='rounded-2xl'><button className='px-5 py-5 mt-2 hover:border rounded-2xl'>Login</button></Link>
                            <Link href="/signup "><button className='px-5 py-5 mt-2 border rounded-2xl'>Get Started</button></Link>
                        </div>
                    </div>
                </div>
                <h1 onClick={SidemenuBar} className='mx-5 my-2 cursor-pointer  text-5xl lg:hidden border py-3 px-4 rounded-2xl shadow-2xl shadow-blue-500/50 font-semibold text-white'>{sideMenuIcon}</h1>
            </div>
            <ul style={{
                // transition: "1.5s",
                width: width,
                padding: padding
            }} className='bg-purple-50 duration-1000 text-purple-900 dark:bg-slate-700 dark:text-white h-[88vh] flex flex-col rounded-l-[20%] overflow-y-scroll text-2xl font-mono font-semibold  space-y-10 w-80 text-center absolute right-0 z-30'>
                <li className='hover:border p-5 rounded-2xl hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500'>HOME</li>
                <li className='hover:border p-5 rounded-2xl hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500'>CATEGORIES</li>
                <li className='hover:border p-5 rounded-2xl hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500'>SEARCH</li>
                <li className='hover:border p-5 rounded-2xl hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500'>HELP</li>
                <li className='hover:border p-5 rounded-2xl hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500'>CART</li>
                <li className='hover:border p-5 rounded-2xl hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500'>DARKMODE</li>
                <Link href={'/login'} className='p-1'>
                    <li className='hover:border rounded-2xl p-5 hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500'>SIGN IN/SIGN UP</li>
                </Link>
            </ul>
        </div>

    )
}

export default Navbar