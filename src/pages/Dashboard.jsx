
import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import DashboardNavbar from '../components/DashboardNavbar'
import Projects from '../components/Projects';

const Dashboard = () => {
  const [selected, setSelected] = useState("Projects");
  return (
    <div className='bg-[#0A0A0A] text-white min-h-screen flex'>
        <Sidebar selected = {selected} setSelected = {setSelected} />

        <div className='flex flex-1 ml-70 flex-col'>
          <DashboardNavbar />
          {selected === "Projects" && <Projects />}
        </div>

    </div>
  )
}

export default Dashboard
