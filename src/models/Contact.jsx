import React from 'react'
import Button from '../layouts/Button'

const Contact = ({ closeForm }) => {
    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='popup-form absolute mt-12 text-black'>
                <form className='w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl'>
                    <h1 className='text-4xl font-semibold text-center text-green-400'>Book Now</h1>
                    <div className='flex flex-col'>
                        <input type="text" name='userFirstName' id='userFirstName' placeholder='First Name' className='py-3 px-2 bg-green-100 rounded-lg' />
                    </div>
                    <div className='flex flex-col'>
                        <input type="text" name='userLasttName' id='userLasttName' placeholder='Lastst Name' className='py-3 px-2 bg-green-100 rounded-lg' />
                    </div>
                    <div className='flex flex-col'>
                        <input type="email" name='userEmail' id='userEmail' placeholder='Email' className='py-3 px-2 bg-green-100 rounded-lg' />
                    </div>
                    <div className='flex flex-col'>
                        <input type="number" name='userNumber' id='userNumber' placeholder='Mobile Number' className='py-3 px-2 bg-green-100 rounded-lg' />
                    </div>
                    <div className='flex gap-5'>
                        <Button title="Book Appoinment" />


                        <button className='bg-green-400 text-white px-10 rounded-md active:bg-red-500' onClick={closeForm}>
                            Close
                        </button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
