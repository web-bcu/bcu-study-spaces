"use client";
import React, { useState } from 'react';
import {motion} from 'framer-motion'
import Image from 'next/image';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDot, RxDotFilled } from 'react-icons/rx';
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "./utils/motion";
import ReactSparkle from 'react-sparkle';
// import { SparklesIcon } from 'heroicons/react/24/solid';
// import { UserCircleIcon } from 'heroicons/react/solid';



export default function HeroContent() {
    const slides = [
        {
            url: '/bcuclass.jpg',
        },
        {
            url: '/bcuclassample.jpg',
        },
        {
            url: '/OIP.jpeg  '
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const newIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const newIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <motion.div
            initial='hidden'
            animate='visible'
            className='flex flex-row items-center justify-center px-20 w-full'
        >
            <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
                {/* <motion.div
                    variants={slideInFromTop}
                    className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'
                >
                    <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
                    <UserCircleIcon className="h-6 w-6 text-[#b49bff]" />
                    
                    <h1 className='Welcome-text text-[13px]'>
                        comprehensive, creative, serving
                    </h1>
                </motion.div> */}

                <ReactSparkle color="#b49bff"/>
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className='flex flex-col gap-6 mt-6 text-6xl text-white max-w-[600px] w-auto h-auto font-lobster font-normal'
                >
                    <span >
                        BCU
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
                            {' '}
                            Study{' '}
                        </span>
                        Space
                    </span>
                </motion.div>


                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className='text-lg text-gray-400 my-5 max-w-[600px]'
                >
                    BCU Study is a group of students passionate about computer science
                    and programming at BCU. Our goal is to provide an environment to help
                    each other and contribute to the development of our class. Providing
                    study sources and advice for students is one of our objectives. We aim
                    to create a strong and where every member has the opportunity to
                    develop their skills and knowledge. Lets build and grow together at
                    BCU Study!
                </motion.p>
                {/* <motion.a
                    variants={slideInFromLeft(1)}
                    className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'
                >
                    Get Started!
                </motion.a> */}
            </div>

            <motion.div
                variants={slideInFromRight(0.8)}
                className='w-full h-[680px] flex justify-center items-center relative  '
            >
                <div className='max-w-[1400px] h-[680px] w-full m-auto py-16 px-4 absolute group right-0 -top-3'>
                    <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
                        <Image
                            src={slides[currentIndex]?.url || ''}
                            alt='slide image'
                            width={700}
                            height={700}
                            objectFit='cover'
                            quality={100}
                        />
                        {/* RX DotFilled */}
                        <div className='flex justify-center absolute bottom-5 left-0 w-full '>
                            {slides.map((slide, slideIndex) => (
                                <div
                                    key={slideIndex}
                                    onClick={() => goToSlide(slideIndex)}
                                    className={`text-2xl cursor-pointer mx-1 ${slideIndex === currentIndex ? 'text-black' : 'text-gray-400'
                                        }`}
                                >
                                    <RxDot color='purple' />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Left Arrow */}
                    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                        <BsChevronCompactLeft onClick={prevSlide} size={30} />
                    </div>
                    {/* Right Arrow */}
                    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                        <BsChevronCompactRight onClick={nextSlide} size={30} />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}
