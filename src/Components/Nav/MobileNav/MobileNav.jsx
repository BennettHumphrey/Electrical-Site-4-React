import React, { useEffect, useState } from 'react'
import MobileNavButton from './MobileNavBurger'
import { AnimatePresence, motion } from 'framer-motion'
import CloseButton from '../../CloseButton'
import MobileNavContent from './MobileNavContent'
import { Link } from 'react-router-dom'



// TODO:
// Bounce back in?



const MobileNav = ({ navOptions }) => {

    const [mobileNavOpen, setMobileNavOpen] = useState(false)

    // useEffect(() => {
    //     console.log(mobileNavOpen)
    // }, [mobileNavOpen])

  return (
    <div className='h-[42px] bg-menu z-10' >
        <div className='pt-1 pl-2 px-8 flex justify-between items-center' >
            <MobileNavButton setMobileNavOpen={setMobileNavOpen} size="35px" />
            <Link to={'/'}>
                <p className='font-bold tracking-widest text-text-light'>Logo</p>
            </Link>
        </div>
        {/* Slide-in */}
        <AnimatePresence>
            {mobileNavOpen && (
            <div>
                <motion.div
                    initial={{ x: -300 }}
                    animate={{ x: -100 }}
                    exit={{ x: -800 }}
                    className='bg-menu shadow-md z-20 w-[300px] h-full absolute top-0'
                >
                    <div
                        style={{width: 'calc(300px - 100px)'}}
                        className='relative left-[100px] h-full z-20' >
                        <div className='absolute z-30 top-0 left-[169px]' 
                            onClick={() => setMobileNavOpen(false)}>
                            <CloseButton size={'30px'} />
                        </div>
                        {/* Nav Contents */}
                        <MobileNavContent navOptions={navOptions} setMobileNavOpen={setMobileNavOpen}  />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    exit={{ opacity: 0 }}
                    className='bg-black absolute top-0 w-full h-[100vh] z-10'
                    onClick={() => setMobileNavOpen(false)}
                />
            </div>
            )}
        </AnimatePresence>
    </div>
  )
}

export default MobileNav