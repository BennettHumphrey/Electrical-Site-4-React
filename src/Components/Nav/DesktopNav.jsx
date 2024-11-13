import React from 'react'
import { Link } from 'react-router-dom'

const DesktopNav = ({ navOptions }) => {
  return (
    <div className='bg-menu h-[42px] flex items-center justify-between text-text-light px-10'>
      <div>
        <Link to={'/'}>
          <p className='font-bold tracking-widest'>Logo</p>
        </Link>
      </div>
      <div className='flex gap-10 lg:gap-16'>
        {navOptions.map((route, index) => (
          <div key={index} className='flex gap-2 items-center group'>
              {route.icon}
              <div className='flex flex-col'>
                <Link
                  to={route.path}
                  onClick={() => setMobileNavOpen(false)}
                  className='text-text-light'
                >
                  {route.title}
                </Link>
                <div className='h-[2px] relative -top-[2px] w-0 group-hover:w-full duration-500 bg-white'/>
              </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default DesktopNav