import React from 'react'
import { aboutData } from '../../globalStore'

// TODO: 
// Add motion


const BriefAbout = () => {
  return (
    <div className='bg-main w-full flex flex-col gap-10 items-center py-20 px-[12vw] md:px-[15vw]'>
        <h2 className='text-text-light text-center text-5xl max-w-[550px]'>
            {aboutData.briefAbout.title}
        </h2>
        <p className='text-text-light text-center text-xl max-w-[800px]'>
            {aboutData.briefAbout.body}
        </p>
    </div>
  )
}

export default BriefAbout