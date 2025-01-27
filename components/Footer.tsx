import React from 'react'
import Image from 'next/image'
const Footer = () => {
    return (
        <div className='w-full flex flex-col h-auto box-border p-4 md:p-10 bg-[#025c16]'>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center'>
                <div className='w-full md:w-[300px] mb-8 md:mb-0'>
                    <Image src='/Naijaclassroom white 1.svg' alt='logo' width={140} height={60} />
                    <p className='text-white mt-[30px] md:mt-[50px]'>Join our newsletter to be the first to get recent updates.</p>
                    <div className='w-full md:w-[300px] h-[40px] bg-transparent flex items-center rounded-lg mt-[20px]'>
                        <input type="text" placeholder='Enter Email Address' className='w-[70%] md:w-[200px] p-2 box-border text-[0.8rem] outline-none bg-white h-[40px] rounded-tl-lg rounded-bl-lg' />
                        <button className='w-[30%] md:w-[100px] h-[40px] rounded-tr-lg rounded-br-lg bg-[#c7421e] text-white hover:bg-[#c44927] cursor-pointer'>Subscribe</button>
                    </div>
                </div>
                <div className='w-full md:w-[500px] lg:w-[800px] md:ml-[60px] lg:ml-0 flex flex-col md:flex-row items-start md:items-center justify-between mt-8 md:mt-0'>
                    <div className='w-full md:w-[30%] mb-8 md:mb-0'>
                        <p className='text-white text-[1.4rem] font-semibold'>Quick Links</p>
                        <p className='text-white text-[1rem] mt-[15px] md:mt-[20px] hover:text-gray-300 cursor-pointer'>Home</p>
                        <p className='text-white text-[1rem] mt-[15px] md:mt-[20px] hover:text-gray-300 cursor-pointer'>Features</p>
                        <p className='text-white text-[1rem] mt-[15px] md:mt-[20px] hover:text-gray-300 cursor-pointer'>About us</p>
                        <p className='text-white text-[1rem] mt-[15px] md:mt-[20px] hover:text-gray-300 cursor-pointer'>Testimonial</p>
                        <p className='text-white text-[1rem] mt-[15px] md:mt-[20px] hover:text-gray-300 cursor-pointer'>FAQ</p>
                    </div>

                    <div className='w-full md:w-[30%] mb-8 md:mb-0'>
                        <p className='text-white text-[1.4rem] font-semibold'>Legal</p>
                        <p className='text-white text-[1rem] mt-[15px] md:mt-[20px] hover:text-gray-300 cursor-pointer'>Privacy Policy</p>
                        <p className='text-white text-[1rem] mt-[15px] md:mt-[20px] hover:text-gray-300 cursor-pointer'>Terms of Service</p>
                    </div>

                    <div className='w-full md:w-[30%]'>
                        <p className='text-white text-[1.4rem] font-semibold'>Help</p>
                        <p className='text-white text-[1rem] mt-[15px] md:mt-[20px] hover:text-gray-300 cursor-pointer'>Feedback</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center w-full'>
                <div className='w-[90%] md:w-[70%] h-[1px] bg-white mt-[30px] md:mt-[50px]'></div>
                <p className='text-white text-[0.8rem] mt-[20px] text-center px-4'>&copy;2025 NaijaClassroom. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
