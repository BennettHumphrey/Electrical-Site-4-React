import React from 'react'
import Hero from '../../Components/Hero/Hero'
import BriefAbout from '../../Components/About/BriefAbout'
import DetailedAbout from '../../Components/About/DetailedAbout'
import WhyWorkWithUs from '../../Components/WhyWorkWithUs/WhyWorkWithUs'
import ProjectsDescription from '../../Components/Projects/ProjectsDescription'
import ProjectsShowcase from '../../Components/Projects/ProjectsShowcase'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div className='h-full relative bg-main'>
      <Hero  />
      <div className='z-[2] bg-white relative'>
      <BriefAbout  />
      <DetailedAbout  />
      <WhyWorkWithUs  />
      <ProjectsDescription  />
      <ProjectsShowcase  />
      </div>
    </div>
  )
}

export default Home