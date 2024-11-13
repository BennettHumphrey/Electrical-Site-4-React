import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import { contactInfo } from '../../globalStore';

const SubPage = () => {

    const data = useLoaderData();

  // useEffect(() => {
  //   console.log('data in SubPage: ', data)
  // }, [data])

    
  return (
    <>
      <div className='
      bg-[url(/imgs/Scaffolding-1200.webp)] 
      h-full w-full bg-cover pb-10 sm:pb-16' >
        <div className='w-[95%] sm:w-[80vw] sm:p-12 max-w-[1000px] bg-white/90 relative m-auto
        p-4 top-8 pb-16 rounded-xl' >
            <h2 className='text-center m-8 text-xl' >{data.title}</h2>
            <p>{data.text}</p>
            <h2 className='text-center text-2xl mt-6' >Friendly and Fast Electrician</h2>
            <div className='bg-black h-[6px] w-24 my-4 mx-auto' />
            <div className='hover:cursor-pointer text-text-light bg-accent w-[80vw] max-w-[240px] h-14 mx-auto p-2 my-8 text-center no-underline duration-500 hover:scale-110 hover:rounded-xl'>
              <div  >
                  <p className='text-xs m-auto'>CALL NOW FOR A FREE QUOTE</p>
                  <h5 className='text-xl'>{contactInfo.phone}</h5>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default SubPage