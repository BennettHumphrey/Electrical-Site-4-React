import React, { useEffect, useRef } from 'react'
import { aboutData } from '../../globalStore'
import { motion, useInView } from 'framer-motion'


// TODO: 
// Add motion
//  Come in from bottom?



const DetailedAbout = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });


  return (
    <div 
        
        ref={ref}
        className='flex flex-col md:flex-row bg-text-light'>
        {aboutData.detailedAbout.map((section, index) => (
            <motion.div 
              style={{
                transform: isInView ? "none" : "translateX(-300px)",
                opacity: isInView ? 1 : 0,
                transition: `all cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s 0.${index*1}s`
              }}
              key={index} className='flex flex-col px-5 py-10 md:py-16 text-center gap-5 even:bg-gray-200'>
                <h2 className='text-2xl font-bold'>
                    {section.title}
                </h2>
                <p className='text-lg'>
                    {section.body}
                </p>
            </motion.div>
        ))}
    </div>
  )
}

export default DetailedAbout