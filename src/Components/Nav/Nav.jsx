import React from 'react'
import { useWindowSize } from 'react-use'
import MobileNav from './MobileNav/MobileNav'
import DesktopNav from './DesktopNav'
import { Outlet } from 'react-router-dom'
import { MaterialSymbolsHome, MdiContact } from './NavIcons'
import Footer from '../Footer/Footer'

const Nav = () => {

  const { width } = useWindowSize()

  const navOptions = [
    {
        title: "Home",
        icon: <MaterialSymbolsHome/>,
        path: "/"
    },
    {
        title: "Contact",
        icon: <MdiContact/>,
        path: "/contact"
    },
]

  return (
    <div>
      <div className='sticky top-0 w-full z-50'>
          {width <= 976 ?
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