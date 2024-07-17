import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from "react-scroll";

const Navibar = () => {

    const [menu, setMenu] = useState(false);

    const handleChange = () => {
        setMenu(!menu);
    }

    const closeMenu = () => {
        setMenu(false);
    }

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
                    <div className='hidden lg:flex'>
                        <button className='bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-300 transition duration-300 ease-in-out'>
                            Contact Us
                        </button>
                    </div>
                    <div className='lg:hidden flex items-center'>
                        {menu ? (
                            <AiOutlineClose size={28} onClick={handleChange} />
                        ) : (
                            <AiOutlineMenu size={28} onClick={handleChange} />
                        )}
                    </div>
                </div>
                <div className={'${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-green-400 text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300'}>
                    <Link to='home' spy={true} duration={500} className='hover:text-yellow-400 transition-all cursor-pointer'>Home</Link>
                    <Link to='about' spy={true} duration={500} className='hover:text-yellow-400 transition-all cursor-pointer'>About Us</Link>
                    <Link to='servicess' spy={true} duration={500} className='hover:text-yellow-400 transition-all cursor-pointer'>Servicess</Link>
                    <Link to='doctors' spy={true} duration={500} className='hover:text-yellow-400 transition-all cursor-pointer'>Doctors</Link>
                    <Link to='blog' spy={true} duration={500} className='hover:text-yellow-400 transition-all cursor-pointer'>Blog</Link>
                    <div className='lg:hidden'>
                        <button className='bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-300 transition duration-300 ease-in-out'>
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navibar
