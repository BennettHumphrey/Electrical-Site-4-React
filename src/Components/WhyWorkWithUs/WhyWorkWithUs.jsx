import React, { useRef } from 'react'
import { whyWorkWithUsData } from '../../globalStore'
import { motion, useInView } from 'framer-motion'

const WhyWorkWithUs = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className='bg-[url("./imgs/Light-1200.webp")] bg-cover bg-center z-0
                    w-full h-full'>
        <div className='w-full bg-[#00000040] h-full z-1'>
            <div className='relative flex flex-col justify-center h-[500px] px-[10vw] z-2 text-white py-12'>
                <div className='flex gap-10 flex-col'>
                    <motion.h2 
                        style={{
                            transform: isInView ? "none" : "translateX(-300px)",
                            opacity: isInView ? 1 : 0,
                            transition: 'all cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
                        }}
                        className='text-4xl font-bold tracking-wider'>
                        {whyWorkWithUsData.title}
                    </motion.h2>
                    <motion.p 
                        style={{
                            transform: isInView ? "none" : "translateX(-300px)",
                            opacity: isInView ? 1 : 0,
                            transition: 'all cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s 0.1s'
                        }}
                        className='max-w-[500px]'>
                        {whyWorkWithUsData.body}
                    </motion.p>
                    <motion.div 
                        style={{
                            transform: isInView ? "none" : "translateX(-300px)",
                            opacity: isInView ? 1 : 0,
                            transition: 'all cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s 0.2s'
                        }}
                        className='mt-5'>
                        <span className='bg-accent relative inline-block rounded-xl p-2.5 font-semibold
                                            hover:cursor-pointer hover:scale-[1.15] duration-500'>
                            {whyWorkWithUsData.buttonText}
                        </span>
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyWorkWithUs