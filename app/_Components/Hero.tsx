"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { IoStarSharp } from "react-icons/io5";
import { FaRegSquarePlus, FaRegSquareMinus } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const toggleFAQ = (index: number) => {
        if (openFAQ === index) {
            setOpenFAQ(null);
        } else {
            setOpenFAQ(index);
        }
    };

    const testimonials = [
        {
            image: '/Ellipse 5.png',
            name: 'Athkins Testimony',
            role: 'student',
            faculty: 'Faculty of Engineering',
            university: 'University of Cross-river state',
            testimony: 'Naija Classroom has been a game-changer for me. I can now access all my course materials in one place.'
        },
        {
            image: '/Ellipse 6.png',
            name: 'Prof. Akintunde',
            role: 'lecturer',
            faculty: 'Faculty of Education',
            university: 'University of Calabar',
            testimony: 'The discussion forum feature has enabled me to get feedback from my students and adjust my teaching methods accordingly.'
        },
        {
            image: '/Ellipse 7.png',
            name: 'Blessing Eze',
            role: 'student',
            faculty: 'Faculty of Physical Sciences',
            university: 'University of Nigeria',
            testimony: 'I\'ve seen a significant improvement in my grades since I started using Naija Classroom. It\'s amazing!'
        }
    ];

    const handlePrevious = () => {
        setCurrentTestimonialIndex((prevIndex) => {
            if (prevIndex === 0) {
                return testimonials.length - 1;
            }
            return prevIndex - 1;
        });
    };

    const handleNext = () => {
        setCurrentTestimonialIndex((prevIndex) => {
            if (prevIndex === testimonials.length - 1) {
                return 0;
            }
            return prevIndex + 1;
        });
    };

    const getVisibleTestimonials = () => {
        if (isMobile) {
            return [testimonials[currentTestimonialIndex]];
        } else {
            const start = currentTestimonialIndex;
            const visibleCount = Math.min(3, testimonials.length);
            const result = [];
            
            for (let i = 0; i < visibleCount; i++) {
                const index = (start + i) % testimonials.length;
                result.push(testimonials[index]);
            }
            
            return result;
        }
    };

    const faqData = [
        {
            question: "What is Naija Classroom?",
            answer: "Naija Classroom is a digital education platform designed specifically for Nigerian students and lecturers. It provides a comprehensive learning environment with features like video lectures, past questions, lecture notes, and collaborative tools to enhance the educational experience."
        },
        {
            question: "Can I communicate with my lecturers and classmates on Naija Classroom?",
            answer: "Yes, Naija Classroom provides interactive features that allow students to communicate with lecturers and peers through discussion forums, direct messaging, and collaborative workspaces. This facilitates effective learning and knowledge sharing."
        },
        {
            question: "Can i use it on mobile devices?",
            answer: "Yes, Naija Classroom is fully responsive and can be accessed on smartphones, tablets, and other mobile devices. Our platform is optimized for mobile use, allowing you to learn on-the-go."
        },
        {
            question: "What features does Naija Classroom offer?",
            answer: "Naija Classroom offers numerous features including lecture video content creation, past questions and answers repository, lecture notes in audio and PDF formats, assignments sharing, and a contribution score system. These tools are designed to enhance both teaching and learning experiences."
        },
        {
            question: "What types of files can I upload to Naija Classroom?",
            answer: "Naija Classroom supports various file formats including PDFs, Word documents, PowerPoint presentations, video files (MP4, etc.), audio files (MP3, WAV), and images. This ensures flexibility in sharing educational content."
        },
        {
            question: "Can I access Naija Classroom offline?",
            answer: "Currently, Naija Classroom requires an internet connection for full functionality. However, some content can be downloaded for offline viewing when you have internet access."
        }
    ];

    return (
        <div className='bg-[#f9f9f9] flex-col pb-[100px] flex justify-center w-[100%] items-center'>
            <div className='flex flex-col md:flex-row items-center p-4 md:p-7 justify-around md:space-x-10'>
                <div className='h-auto md:h-[500px] w-full md:w-[50vw] flex flex-col flex-start rounded-xl pt-[50px] md:pt-[100px] px-4 md:px-0'>
                    <p className='text-[2rem] md:text-[2.8rem] font-semibold text-center md:text-left'>Embark on a <span className='text-[#025c16]'>Learning Journey</span> with Naija Classroom</p>
                    <p className='text-[1.2rem] md:text-[1.4rem] text-[#808080] mt-[20px] md:mt-[30px] text-center md:text-left'>Discover, learn, and achieve academic success with our innovative digital education platform</p>
                    <div className='flex flex-col md:flex-row gap-4 md:gap-7 mt-[30px] md:mt-[60px] mb-[20px] md:mb-[40px] items-center'>
                        <button className='h-[40px] w-full md:w-[140px] rounded-[10px] bg-[#c7421e] hover:bg-[#ce5837] text-white text-bold'>Join as student</button>
                        <button className='bg-transparent text-bold h-[40px] w-full md:w-[140px] border text-[#c7421e] border-[#c7421e] rounded-[10px] hover:bg-gray-200 hover:text-black'>Join as lecturer</button>
                    </div>
                    <div className='flex flex-col md:flex-row justify-center md:justify-start items-center gap-4 md:gap-x-4'>
                        <div className='mt-[20px] md:mt-[30px] flex items-center'>
                            <Image alt='people' src='/Ellipse 8.png' width={50} height={50} />
                            <Image className='ml-[-25px]' alt='people' src='/Ellipse 9 (1).png' width={50} height={50} />
                            <Image className='ml-[-25px]' alt='people' src='/Ellipse 10.png' width={50} height={50} />
                            <Image className='ml-[-25px]' alt='people' src='/Ellipse 11.png' width={50} height={50} />
                        </div>

                        <div className='flex flex-col mt-[20px] md:mt-[30px] items-center md:items-start'>
                            <p className='text-[1rem] bold-black font-semibold'>Trusted by 400+ Students & Lecturers</p>
                            <div className='flex items-center gap-x-2 leading-none'>
                                <IoStarSharp size={30} className='text-[#ffc300] hover:text-yellow-500' />
                                <IoStarSharp size={30} className='text-[#ffc300] hover:text-yellow-500 ml-[-5px]' />
                                <IoStarSharp size={30} className='text-[#ffc300] hover:text-yellow-500 ml-[-5px]' />
                                <IoStarSharp size={30} className='text-[#ffc300] hover:text-yellow-500 ml-[-5px]' />
                                <IoStarSharp size={30} className='text-[#ffc300] hover:text-yellow-500 ml-[-5px]' />
                                <p className='text-[1rem] text-[#808080]'>
                                    (4.5 Reviews)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-[300px] md:h-[500px] w-full md:w-[500px] bg-[#D9D9D9] rounded-[30px] relative mt-8 md:mt-0'>
                    <div className='absolute top-[200px] md:top-[350px] left-0 md:left-[-150px] w-full md:w-auto'>
                        <Image alt='hero' src='/Rectangle 3.svg' width={500} height={320} className='w-full md:w-auto' />
                    </div>
                </div>
            </div>

            <div className='center flex justify-center items-center flex-col mt-[100px] md:mt-[200px] px-4'>
                <p className='text-[#025c16] font-bold text-[1.2rem] md:text-[1.5rem] text-center'>Features</p>
                <p className='text-black mt-7 md:mt-0 font-bold text-[1.5rem] md:text-[1.9rem] text-center p-3'>Explore Naija Classroom Features</p>
                <p className='text-[#808080] font-bold text-[1rem] md:text-[1.1rem] max-w-[900px] p-3 text-center'>From intuitive tools to a supportive community, Naija Classroom has everything you need to access quality educational resources, connect with peers, and achieve academic success.</p>
            </div>

            <div className='flex flex-col mt-[30px] md:mt-[60px] justify-start items-center md:items-start px-4'>
                <div className='flex flex-col md:flex-row justify-center items-center gap-6 md:gap-x-10'>
                    <div className='w-full md:w-[350px] p-[25px] h-[250px] bg-[#ffffff] rounded-2xl flex justify-center items-center flex-col box-border space-y-[15px]'>
                        <Image alt='hero' src='/Frame 14.png' width={50} height={50} />
                        <p className='text-[1rem] text-black font-semibold text-center'>Lecture Video Content Creation</p>
                        <p className='text-[#808080] text-[0.9rem] text-center'>Access to record, edit, and organize lecture videos with ease.</p>
                    </div>
                    <div className='w-full md:w-[350px] p-[25px] h-[250px] bg-[#ffffff] rounded-2xl flex justify-center items-center flex-col box-border space-y-[15px]'>
                        <Image alt='hero' src='/Frame 16.png' width={50} height={50} />
                        <p className='text-[1rem] text-black font-semibold text-center'>Past Questions and Answers Repository</p>
                        <p className='text-[#808080] text-[0.9rem] text-center'>Access to searchable database of past questions and verified answers</p>
                    </div>
                    <div className='w-full md:w-[350px] p-[25px] h-[250px] bg-[#ffffff] rounded-2xl flex justify-center items-center flex-col box-border space-y-[15px]'>
                        <Image alt='hero' src='/Frame 17.png' width={50} height={50} />
                        <p className='text-[1rem] text-black font-semibold text-center'>Lecture Notes in Audio and PDF Formats</p>
                        <p className='text-[#808080] text-[0.9rem] text-center'>Access to lecture notes in audio and PDF, organized by course.</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-center items-center mt-[25px] md:mt-[50px] gap-6 md:gap-x-10'>
                    <div className='w-full md:w-[350px] p-[25px] h-[250px] bg-[#ffffff] rounded-2xl flex justify-center items-center flex-col box-border space-y-[15px]'>
                        <Image alt='hero' src='/Frame 16.png' width={50} height={50} />
                        <p className='text-[1rem] text-black font-semibold text-center'>Assignments and Learning Material Sharing</p>
                        <p className='text-[#808080] text-[0.9rem] text-center'>Access to share, submit, and collaborate on assignments and learning materials.</p>
                    </div>
                    <div className='w-full md:w-[350px] p-[25px] h-[250px] bg-[#ffffff] rounded-2xl flex justify-center items-center flex-col box-border space-y-[15px]'>
                        <Image alt='hero' src='/Frame 23 (1).png' width={50} height={50} />
                        <p className='text-[1rem] text-black font-semibold text-center'>Contribution Score System</p>
                        <p className='text-[#808080] text-[0.9rem] text-center'>Earn points, badges, and rewards for contributing and participating.</p>
                    </div>
                </div>
            </div>

            <div className='min-h-[750px] flex flex-col md:flex-row items-center gap-6 md:gap-x-7 mt-[50px] md:mt-[100px] bg-[#025C16] p-4 md:p-[70px] w-[100%]'>
                <Image alt='hero' className='h-auto w-full md:w-[50%]' src='/Rectangle 14.png' width={500} height={700} />
                <div className='h-auto md:h-[90%] w-full md:w-[50%] flex flex-col space-y-5'>
                    <p className='text-[1.2rem] md:text-[1.4rem] text-white font-semibold'>How It Works</p>
                    <p className='text-[1.5rem] md:text-[1.9rem] text-white font-bold'>Get to know how Naija classroom works for all users</p>
                    <p className='text-[1rem] text-white'>Discover a collaborative learning platform where everyone plays a vital role. Here&apos;s what Naija Classroom empowers you to do:</p>

                    <p className='text-[1.2rem] md:text-[1.4rem] text-white font-semibold mt-4 md:mt-7 mb-8 md:mb-16'>Lecturers:</p>
                    <ul className='text-[1rem] text-white ml-6 md:ml-10 list-disc pl-4 md:pl-6'>
                        <li>Create, upload, and organize lecture videos.</li>
                        <li>Upload and manage past questions and answers.</li>
                        <li>Post assignments and materials.</li>
                        <li>Earn contribution scores for content creation.</li>
                    </ul>

                    <p className='text-[1.2rem] md:text-[1.4rem] text-white font-semibold mt-4 md:mt-7 mb-8 md:mb-16'>Students:</p>
                    <ul className='text-[1rem] text-white ml-6 md:ml-10 list-disc pl-4 md:pl-6'>
                        <li>Access and view video lectures</li>
                        <li>Search and download past questions and answers.</li>
                        <li>Access and download lecture notes.</li>
                        <li>Submit assignments and access shared materials.</li>
                        <li>Earn contribution scores for participation and content submission.</li>
                    </ul>
                </div>
            </div>

            <div className='center flex justify-center items-center flex-col mt-[100px] md:mt-[200px] px-4'>
                <p className='text-[#025c16] font-bold text-[1.2rem] md:text-[1.5rem] text-center'>Testimonials</p>
                <p className='text-black font-bold text-[1.5rem] md:text-[1.9rem] text-center p-3'>Hear from our community</p>
                <p className='text-[#808080] font-bold text-[1rem] md:text-[1.1rem] max-w-[900px] p-3 text-center'>Hear what our users have to say about their experience with Naija Classroom.</p>
            </div>

            <div className='flex flex-col relative mt-[30px] md:mt-[60px] justify-start items-center w-full px-4'>
                <div className='flex flex-col md:flex-row justify-center items-center gap-6 md:gap-x-10 w-full'>
                    <AnimatePresence mode='wait'>
                        {getVisibleTestimonials().map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                                className='w-full md:w-[350px] p-[25px] h-auto md:h-[250px] bg-[#ffffff] rounded-2xl flex justify-start items-start flex-col box-border space-y-[15px]'
                            >
                                <div className='flex justify-start items-center gap-x-2'>
                                    <Image alt='hero' src={testimonial.image} width={50} height={50} />
                                    <div className='flex flex-start flex-col'>
                                        <p className='text-[1rem] text-black font-semibold text-left'>{testimonial.name} <span className='text-[0.7rem]'>({testimonial.role})</span></p>
                                        <p className='text-[#808080] text-[0.8rem] text-left'>{testimonial.faculty}</p>
                                        <p className='text-[#808080] text-[0.8rem] text-left'>{testimonial.university}</p>
                                    </div>
                                </div>
                                <p className='text-[#808080] text-[0.9rem] text-left'>{testimonial.testimony}</p>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
                <button 
                    onClick={handlePrevious}
                    className='absolute top-[40%] left-2 md:left-10 h-[60px] md:text-white w-[60px] md:hover:bg-[#b1492d] bg-transparent md:bg-[#c7421e] text-[#c7421e] rounded-full flex justify-center items-center'
                >
                    <IoIosArrowBack size={30} />
                </button>
                <button 
                    onClick={handleNext}
                    className='absolute top-[40%] right-2 md:right-10 h-[60px] text-[#c7421e] md:text-white w-[60px] md:hover:bg-[#b1492d] bg-transparent md:bg-[#c7421e] rounded-full flex justify-center items-center'
                >
                    <IoIosArrowForward size={30} />
                </button>
            </div>

            <div className='center flex justify-center items-center flex-col mt-[50px] md:mt-[100px] px-4'>
                <p className='text-[#025c16] font-bold text-[1.2rem] md:text-[1.5rem] text-center'>FAQ</p>
                <p className='text-black font-bold text-[1.5rem] md:text-[1.9rem] text-center p-3'>Frequently Asked Questions</p>
                <p className='text-[#808080] font-bold text-[1rem] md:text-[1.1rem] max-w-[900px] p-3 text-center'>
                    Everything you need to know about Naija Classroom.</p>
            </div>

            <div className='flex flex-col md:flex-row justify-evenly items-start mt-[40px] w-[100%] px-4'>
                <div className='w-full md:w-[50%] text-black md:ml-10 flex-start space-y-6 flex-col rounded-2xl'>
                    {faqData.slice(0, 3).map((faq, index) => (
                        <motion.div
                            key={index}
                            className='w-full md:w-[90%] bg-[#ffffff] rounded-lg'
                            initial={false}
                        >
                            <div
                                className='min-h-[60px] box-border p-3 flex justify-start items-center cursor-pointer'
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className='w-[70%]'>{faq.question}</div>
                                {openFAQ === index ?
                                    <FaRegSquareMinus size={30} className='ml-auto text-red-600' /> :
                                    <FaRegSquarePlus size={30} className='ml-auto text-red-600' />
                                }
                            </div>
                            <AnimatePresence>
                                {openFAQ === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className='p-3 pt-0 text-[#808080]'
                                    >
                                        {faq.answer}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                <div className='w-full md:w-[50%] md:ml-10 flex-start space-y-6 flex-col rounded-2xl mt-6 md:mt-0'>
                    {faqData.slice(3).map((faq, index) => (
                        <motion.div
                            key={index + 3}
                            className='w-full md:w-[90%] bg-[#ffffff] rounded-lg'
                            initial={false}
                        >
                            <div
                                className='min-h-[60px] box-border p-3 flex justify-start items-center cursor-pointer'
                                onClick={() => toggleFAQ(index + 3)}
                            >
                                <div className='w-[70%]'>{faq.question}</div>
                                {openFAQ === index + 3 ?
                                    <FaRegSquareMinus size={30} className='ml-auto text-red-600' /> :
                                    <FaRegSquarePlus size={30} className='ml-auto text-red-600' />
                                }
                            </div>
                            <AnimatePresence>
                                {openFAQ === index + 3 && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className='p-3 pt-0 text-[#808080]'
                                    >
                                        {faq.answer}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Hero
