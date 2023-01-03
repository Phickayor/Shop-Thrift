import React from 'react'
import Image from 'next/image'
import Avatar from '../images/bgAvatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
function Index() {
    const rightArrow = <FontAwesomeIcon icon={faAngleRight} />
    return (
        <>
            <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white flex'>
                <div className='w-3/5 flex flex-col justify-center'>
                    <div className='mx-auto w-4/5'>
                        <h1 className="text-6xl leading-[72px] font-mono font-semibold inline">SHOP FOR THE BEST QUALITY AT IT'S LOWEST PRICES</h1>
                        <button className='inline-block ml-5 hover:bg-inherit bg-white hover:text-white text-purple-600 text-5xl w-20 h-20 rounded-full border-2 p-4 '>{rightArrow}</button>
                    </div>
                </div>
                <div className='w-2/5 flex justify-center'>
                    <Image src={Avatar} className='object-cover h-full z-10 opacity-90' />
                </div>
            </div>
        </>
    )
}

export default Index