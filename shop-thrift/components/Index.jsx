import React from 'react'
import Image from 'next/image'
import Avatar from '../images/bgAvatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
function Index() {
    const rightArrow = <FontAwesomeIcon icon={faAngleRight} />
    return (
        <>
            <div className='h-[88vh] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white flex'>
                <div className='lg:w-3/5 z-20 flex flex-col justify-center'>
                    <div className='mx-auto w-4/5 lg:text-left text-center'>
                        <h1 className="lg:text-6xl text-5xl leading-[65px] lg:leading-[72px] font-mono font-semibold inline">SHOP FOR THE BEST QUALITY AT IT'S LOWEST PRICES</h1>
                        <button className='hidden lg:inline-block ml-5 hover:bg-inherit bg-white hover:text-white text-purple-600 text-5xl w-20 h-20 rounded-full border-2 p-4 '>{rightArrow}</button>
                        <Link href="/login" className='lg:hidden inline-block ml-5 hover:bg-inherit bg-[#fffeee] hover:text-white text-purple-600 text-3xl w-4/5 rounded-full mt-5 hover:border-2 p-4 font-semibold font-mono'>SHOP NOW</Link>

                    </div>
                </div>
                <div className='absolute lg:relative lg:w-2/5 flex justify-center w-full h-[85vh]'>
                    <Image src={Avatar} className='object-cover w-full h-full z-10 lg:opacity-90 opacity-40' />
                </div>
            </div>
        </>
    )
}

export default Index