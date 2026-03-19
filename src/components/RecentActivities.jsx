import { ActivityIcon } from 'lucide-react'
import React from 'react'
import RecentCard from './RecentCard'

const RecentActivities = () => {
  return (
    <div className='flex-1 pb-7 flex-col flex '>
        <div className='flex mx-15 mt-15 items-end justify-between'>
            <div>
              <div className='flex items-center gap-1.5'>
                <ActivityIcon className='text-blue-600' />
                <p className='text-3xl font-bold tracking-tight'>Recent Activity</p>
              </div>
              <p className='text-gray-400 mt-1'>Real-time log of your workspace events and collaborations</p>
            </div>
        </div>
        {/* APPLY MAPPING HERE */}
        <div className='pl-15'>

          <RecentCard activity={"JOINED"} />
          <RecentCard activity={"CREATED"} />
          <RecentCard activity={"PUSHED"} />
          <RecentCard activity={"EXECUTED"} />
          <RecentCard activity={"DELETED"} />
          <RecentCard activity={"INVITED"} />
          <RecentCard activity={"RENAMED"} />
          <RecentCard activity={"FORKED"} />

        </div>

        
    </div>
  )
}

export default RecentActivities