import React from 'react';
import { FaHeartbeat } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { RiMicroscopeLine } from "react-icons/ri";
import Button from '../layouts/Button';
import ServicesCard from '../layouts/ServicesCard';

const Services = () => {

    const icon1 = (
        <RiMicroscopeLine size={35} className=" text-yellow-300" />
    );

    const icon2 = (
        <MdHealthAndSafety size={35} className=" text-yellow-300" />
    );

    const icon3 = <FaHeartbeat size={35} className=" text-yellow-300" />;

    return (
        <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16'>
            <div>
                <div>
                    <h1 className='text-4xl font-semibold text-center lg:text-start'>Our Servicess</h1>
                    <p className='mt-2 text-center lg:text-start'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
                        quidem.
                    </p>
                </div>

                <div className='mt-4 lg:mt-0'>
                    <Button title='See Servicess' />
                </div>

                <div className='flex flex-col lg:flex-row gap-5 pt-14'>
                    <ServicesCard icon={icon1} title="Lab Test" />
                    <ServicesCard icon={icon2} title="Helth Check" />
                    <ServicesCard icon={icon3} title="Hert Helth" />
                </div>
            </div>
        </div>
    )
}

export default Services