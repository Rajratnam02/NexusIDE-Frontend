import { Plus } from 'lucide-react'
import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className='flex-1 pb-7 flex-col flex min-h-screen'>
        
        <div className='flex mx-15 mt-15 items-end justify-between'>
          <div>
            <p className='text-3xl font-bold tracking-tight'>Welcome back, Raj</p>
            <p className='text-gray-400 mt-1'>Ready to build something amazing today?</p>
          </div>

          <div className='bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl font-semibold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20 active:scale-95'>
            <Plus />
            <p>New Project</p>
          </div>
        </div>

        <div className=' flex-1 grid grid-cols-1 gap-6 px-15 pt-15 lg:grid-cols-3 '>
              
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
          
        </div>  

    </div>
  )
}

export default Projects