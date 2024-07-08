'use client'
import {motion} from 'framer-motion';
import { BackgroundCircles } from './BackGroundCircle';
import Wave from './Wave';

export default function HomeComponent() {
    const fadeInVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };
    return (
        <div className="mt-20 h-[1200px] relative">
            <motion.div 
                initial={{ opacity: 0, y: 20 }} // Initial animation state (hidden and slightly moved down)
                animate={{ opacity: 1, y: 0 }} // Animation state when component is visible (fully opaque and original position)
                transition={{ duration: 1.5 }}
                className='relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem] font-lobster font-normal'
            >
                <motion.h1 
                    className='font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[5.75rem] xl:leading-[4.5rem] text-white'
                    initial="hidden"
                    animate="visible"
                    variants={fadeInVariants}
                    transition={{ duration: 3 }}
                >
                    Welcome to BCU study space
                </motion.h1>
            </motion.div>
            <Wave/>
            <BackgroundCircles/>
        </div>
    )
}