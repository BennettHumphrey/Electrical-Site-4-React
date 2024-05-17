import React, { useState } from 'react'
import Carousel from './Carousel'
import { heroSlides } from './heroSlides'
import defaultStyles from './Carousel.module.css';
import { useParallax } from 'react-scroll-parallax';
import HeroTriangleLeft from './HeroTriangleLeft';
import HeroTriangleRight from './HeroTriangleRight';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useWindowSize } from 'react-use';


const carouselOptions = {
  autoplay: true,
  autoplayDelay: 8,
  line: true,
  img: true,
}

const Hero = () => {

  const { ref } = useParallax({ translateY: [-25, 18] });

  const [scrollPosition, setScrollPosition] = useState(0)



  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    // console.log("Page scroll: ", latest)
    setScrollPosition(latest)
  })

  // useEffect(() => {
  //   console.log(scrollPosition)
  // }, [scrollPosition])


  const windowWidth = useWindowSize().width

  const triangleSizes = windowWidth/2


  // TODO:
  // Combine triangles, just pass prop to flip it
    // Just change <path>
  // Carousel arrows not evenly spaced from edges
  // Fix carousel spacing

  const scrollPositionModifier = windowWidth/1000

  return (
    <div className='relative h-full pointer-events-none'>

        {/* Hero Carousel */}

        <div ref={ref} className='relative h-full z-[0] pointer-events-auto'>
          <Carousel  data={heroSlides} options={carouselOptions} styles={defaultStyles} />
        </div>

        {/* Moving Triangles */}

        <div className='z-[1] h-full w-full absolute left-0 bottom-0 overflow-hidden top-0.5' >

          <motion.div 
            className='absolute bottom-0' 
            style={{ x: (scrollPosition*scrollPositionModifier - windowWidth) }}>
            <HeroTriangleLeft size={triangleSizes} />
          </motion.div>

          <motion.div 
            className='absolute bottom-0' 
            style={{ x: (-scrollPosition*scrollPositionModifier + windowWidth) }}>
            <HeroTriangleRight size={triangleSizes} />
          </motion.div>

        </div>


    </div>
  )
}

export default Hero


