import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { useWindowSize } from 'react-use';

const Projects = () => {
    
    const data = useLoaderData()
    const { width } = useWindowSize()

  return (
    <div className=''>
        <div 
            style={{backgroundImage: `url(${data.mainImg})`}}
            className="flex justify-center items-center text-center z-0 bg-cover bg-bottom sm:bg-center h-[250px]">
            <div className="h-full w-full bg-[#0007] z-10 flex items-center justify-center">
                <h1 className='my-8 text-text-light mx-4 z-30 text-3xl lg:text-5xl xl:text-7xl' >{data.headerTitle}</h1>
            </div>
        </div>
        <div className='bg-main pt-10 flex flex-col text-text-light justify-center items-center pb-10
                        md:flex-row' >
            <div className='flex flex-col gap-5'>
                <div
                    style={{ backgroundImage:`url(${data.secondaryImg})` }}
                    className='bg-cover w-[80vw] h-[40vw]
                               md:w-[40vw] md:h-[20vw]' />
                {width > 768 && <div
                    style={{ backgroundImage:`url(${data.tertiaryImg})` }}
                    className='bg-cover w-[80vw] h-[40vw]
                               md:w-[40vw] md:h-[20vw]' />}
            </div>
            <div className='p-5 flex flex-col gap-4 w-[80vw] md:w-[40vw] lg:gap-6 xl:gap-10'>
                <h2 className='font-bold text-3xl tracking-wider lg:text-5xl xl:text-7xl'>
                    Project Details
                </h2>
                <p className='lg:text-xl xl:text-2xl'>
                    {data.projectDetails}
                </p>
            </div>

        </div>
    </div>
  )
}

export default Projects