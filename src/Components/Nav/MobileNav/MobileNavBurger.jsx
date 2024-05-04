import React from 'react'

const MobileNavButton = ({ size, setMobileNavOpen }) => {
  return (
    <div className='flex flex-col gap-1 text-white'
       style={{width: size, height: size}}
       onClick={() => setMobileNavOpen(true)}
         >
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={48} d="M88 152h336M88 256h336M88 360h336"></path></svg>
    </div>
  )
}

export default MobileNavButton