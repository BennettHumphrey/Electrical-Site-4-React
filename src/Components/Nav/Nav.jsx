import React from 'react'
import { useWindowSize } from 'react-use'
import MobileNav from './MobileNav/MobileNav'
import DesktopNav from './DesktopNav'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { navOptions } from '../../globalStore'

const Nav = () => {

  const { width } = useWindowSize()



  return (
    <div>
      <div className='sticky top-0 w-full z-50'>
          {width <= 769 ?
          <MobileNav navOptions={navOptions} /> :
          <DesktopNav navOptions={navOptions} /> }
      </div>
      <div>
        <Outlet  />
      </div>
      <Footer  />
    </div>
  )
}

export default Nav