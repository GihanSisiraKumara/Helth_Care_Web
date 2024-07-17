import React from 'react'
import { Link } from "react-scroll"

const Navibar = () => {
    return (
        <div className='fixed w-full z-10 text-white'>
            <div>
                <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-green-400 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                    <div className='flex flex-row items-center cursor-pointer'>
                        <Link to='home' spy={true} duration={500} >
                            <h1 className='text-2xl font-semibold'>Wellcome To Helthcare</h1>
                        </Link>
                    </div>
                    <nav className='hidden lg:flex flex-row items-center text-lg font-medium gap-8'>
                        <Link to='home' spy={true} duration={500} className='hover:text-yellow-400 transition-all cursor-pointer'>Home</Link>
                        <Link to='about' spy={true} duration={500} className='hover:text-yellow-400 transition-all cursor-pointer'>About Us</Link>
                        <Link to='servicess' spy={true} duration={500} className='hover:text-yellow-400 transition-all cursor-pointer'>Servicess</Link>
                        <Link to='doctors' spy={true} duration={500} className='hover:text-yellow-400 transition-all cursor-pointer'>Doctors</Link>
                        <Link to='blog' spy={true} duration={500} className='hover:text-yellow-400 transition-all cursor-pointer'>Blog</Link>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navibar
