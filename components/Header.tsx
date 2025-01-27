"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { IoIosArrowDown } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3
            }
        },
        closed: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <div className='w-[100%] bg-white text-black h-[100px] flex justify-between p-4 px-10 items-center relative'>
            <Image alt='logo' src='/Naijaclassroom 2.svg' width={125} height={57} />
            
            {/* Desktop Menu */}
            <div className='hidden md:flex ml-[100px] font-semibold text-[1.2rem] text-[#808080] gap-10 items-center'>
                <p className='hover:text-[#c7421e] cursor-pointer'>Home</p>
                <div className='flex hover:text-[#c7421e] gap-2 items-center cursor-pointer'>
                    <p>Features</p>
                    <IoIosArrowDown />
                </div>
                <p className='hover:text-[#c7421e] cursor-pointer'>About us</p>
                <p className='hover:text-[#c7421e] cursor-pointer'>Testimonial</p>
                <p className='hover:text-[#c7421e] cursor-pointer'>FAQ</p>
            </div>

            <button className='hidden md:block h-[40px] w-[130px] rounded-[10px] bg-[#c7421e] hover:bg-[#c44927] text-white'>Register</button>

            {/* Mobile Menu Button */}
            <div className='md:hidden cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <IoMdClose size={30} /> : <RiMenu3Line size={30} />}
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className='absolute top-[100px] left-0 w-full bg-white shadow-lg md:hidden p-4 z-50'
                    >
                        <div className='flex flex-col gap-4 items-center font-semibold text-[1.2rem] text-[#808080]'>
                            <p className='hover:text-[#c7421e] cursor-pointer'>Home</p>
                            <div className='flex hover:text-[#c7421e] gap-2 items-center cursor-pointer'>
                                <p>Features</p>
                                <IoIosArrowDown />
                            </div>
                            <p className='hover:text-[#c7421e] cursor-pointer'>About us</p>
                            <p className='hover:text-[#c7421e] cursor-pointer'>Testimonial</p>
                            <p className='hover:text-[#c7421e] cursor-pointer'>FAQ</p>
                            <button className='h-[40px] w-[130px] rounded-[10px] bg-[#c7421e] hover:bg-[#ce5837] text-white'>Register</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Header
