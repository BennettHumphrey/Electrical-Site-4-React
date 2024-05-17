import React from 'react'
import { projectsDescription } from '../../globalStore'

const ProjectsDescription = () => {
  return (
    <div className='flex flex-col justify-center text-center py-10 md:py-16 px-4 gap-6'>
        <h2 className='text-4xl font-semibold tracking-wider'>
            {projectsDescription.title}
        </h2>
        <p className='max-w-[500px] m-auto'>
            {projectsDescription.body}
        </p>
    </div>
  )
}

export default ProjectsDescription