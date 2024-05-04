import React from 'react'
import { Link } from 'react-router-dom'

const DesktopNav = ({ navOptions }) => {
  return (
    <div className='bg-menu h-[42px] flex items-center justify-between text-text-light px-10'>
      <div>
        <p className='font-bold tracking-widest'>Logo</p>
      </div>
      <div className='flex gap-16'>
        {navOptions.map((route, index) => (
          <div key={index} className='flex gap-2 items-center'>
              {route.icon}
              <Link
                to={route.path}
                onClick={() => setMobileNavOpen(false)}
                className='text-text-light'
              >
                {route.title}
              </Link>
            </div>
        ))}
      </div>
    </div>
  )
}

export default DesktopNav