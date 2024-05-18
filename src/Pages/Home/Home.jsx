import React, { useEffect } from 'react';
import Hero from '../../Components/Hero/Hero';
import BriefAbout from '../../Components/About/BriefAbout';
import DetailedAbout from '../../Components/About/DetailedAbout';
import WhyWorkWithUs from '../../Components/WhyWorkWithUs/WhyWorkWithUs';
import ProjectsDescription from '../../Components/Projects/ProjectsDescription';
import ProjectsShowcase from '../../Components/Projects/ProjectsShowcase';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#projects') {
      const element = document.getElementById('projects');
      if (element) element.scrollIntoView();
    }
  }, [location]);

  return (
    <div className='h-full relative bg-main'>
      <Hero />
      <div className='z-[2] bg-white relative'>
        <BriefAbout />
        <DetailedAbout />
        <WhyWorkWithUs />
        <ProjectsDescription />
        <ProjectsShowcase id="projects" />
      </div>
    </div>
  );
};

export default Home;
