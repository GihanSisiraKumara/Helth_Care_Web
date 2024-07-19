import React, { useRef } from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Doctors = () => {


    const data = [
        {
            img: "/src/assets/img/doc1.jpg",
            name: "Dr. Senanayk viccram",
            specialties: "orthopdedic Surgeon"
        },
        {
            img: "/src/assets/img/doc2.jpg",
            name: "Dr. Julian Bennett",
            specialties: "Cardiologist",
        },
        {
            img: "/src/assets/img/doc3.jpg",
            name: "Dr. Camila Rodriguez",
            specialties: "Pediatrician",
        },
        {
            img: "/src/assets/img/doc4.jpg",
            name: "Dr. Victor Nguyen",
            specialties: "Neurologist",
        },
        {
            img: "/src/assets/img/doc5.jpg",
            name: "Dr. Ethan Carter",
            specialties: "Dermatologist",
        },
        {
            img: "/src/assets/img/doc6.jpg",
            name: "Dr. Olivia Martinez",
            specialties: "Ophthalmologist",
        },
    ];
    const slider = useRef(null);
    const settings = {
        accessibility: true,
        dots: true,
        speed: 500,
        arrow: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
                breakpoint: 1023,
                setting: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                setting: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,

                },
            },
            {
                breakpoint: 480,
                setting: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,

                },
            },

        ],


    };
    return (
        <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16'>
            <div className='flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0'>
                <div>
                    <h1 className='text-4xl font-semibold text-center lg:text-start'> Our Doctors</h1>
                    <p className='mt-2 text-center lg:text-start'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
                        quidem.
                    </p>
                </div>
                <div className='flex gap-5 mt-4 lg:mt-0'>
                    <button className='bg-green-200 text-blue-300 px-4 py-2 rounded-lg activate:bg-red-200'
                        onClick={() => slider.current.slickPrev()}
                    >
                        <FaArrowLeft size={25} />
                    </button>

                    <button className='bg-green-200 text-blue-300 px-4 py-2 rounded-lg activate:bg-red-200'
                        onClick={() => slider.current.slickNext()}
                    >
                        <FaArrowRight size={25} />
                    </button>
                </div>
            </div>

            <div className='mt-5'>
                <Slider ref={slider}{...settings}>{
                    data.map((e, index) => (
                        <div className='h-[350px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer'
                            key={index}
                        >
                            <div>
                                <img src={e.img} alt="img" className='h-56 rounded-t-xl w-full' />
                            </div>

                            <div className='flex flex-col justify-center items-center'>
                                <h1 className='font-semibold text-xl pt-4'>
                                    {e.name}
                                </h1>
                                <h3 className='pt-2'>
                                    {e.specialties}
                                </h3>
                            </div>
                        </div>
                    ))
                }
                </Slider>
            </div>
        </div>
    )
}

export default Doctors
