import React from 'react'

const ServicesCard = ({ icon, title }) => {
    return (
        <div className='group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out'>
            <div className='bg-green-300 p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]'>
                {icon}
            </div>
            <h1 className='font-semibold text-lg'>
                {title}</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                praesentium asperiores unde veniam, perspiciatis neque!
            </p>

            <h3 className='text-yellow-400 cursor-pointer hover:text-blue-200 transition duration-300 ease-in-out'>Lern More</h3>
        </div>
    )
}

export default ServicesCard
