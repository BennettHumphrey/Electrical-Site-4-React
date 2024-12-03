import React from 'react'
import { projectsShowcase } from '../../globalStore'
import { Link } from 'react-router-dom'

const ProjectsShowcase = () => {
  return (
    <div className='flex flex-col sm:flex-row flex-wrap' id='projects' >
        {projectsShowcase.map((project, index) => (
            
            <Link key={index}
                style={{backgroundImage: `url(${project.mainImg})`}}
                to={`/projects/${index}`}
                className='w-screen flex flex-col overflow-hidden h-[100vw] bg-cover bg-center hover:bg-[-15vw] group duration-500
                               sm:w-1/2 sm:h-[50vw] lg:w-1/3 lg:h-[33.333vw]'>
                
                <div className='bg-[#ffffff69] md:bg-[#ffffff01] duration-300 group-hover:bg-[#ffffffAA] w-full h-full
                                    flex flex-col justify-center gap-5'>
                    <h3 className='relative md:translate-x-[110vw] md:opacity-0 duration-500
                                    group-hover:translate-x-0 font-semibold group-hover:opacity-100
                                    px-5 text-4xl underline'>
                        {project.imageTitle}
                    </h3>
                    {/* <p className='relative text-2xl md:translate-x-[110vw] md:opacity-0 duration-300
                                    group-hover:translate-x-0 group-hover:opacity-100 delay-200
                                    px-5'>
                        {project.imageBody}
                    </p> */}
                </div>
            </Link>

        ))}
    </div>
  )
}

export default ProjectsShowcase