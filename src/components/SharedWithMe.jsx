import React from 'react'
import CollabList from './CollabList'

const SharedWithMe = () => {
  return (
    <div className='flex-1 pb-7 flex-col flex '>
      <div className='mx-15  mt-15'>
          <div>
            <p className='text-3xl font-bold tracking-tight'>Shared with me</p>
            <p className='text-gray-400 mt-1'>Projects you've been invited to collaborate on.</p>
          </div>  
        </div>

      <div className='rounded-2xl mx-15 mt-10'>
          <div className='grid rounded-t-2xl grid-cols-12 px-6 py-4 bg-[#0d0d0d] border border-gray-800 text-[10px] font-bold text-gray-500 uppercase tracking-widest'>
              <div className="col-span-6">Project Name</div>
              <div className="col-span-4">Owner</div>
              <div className="col-span-2 text-right">Role</div>
          </div>

          <div>
            <CollabList />
          </div>

      </div>

    </div>
  )
}

export default SharedWithMe