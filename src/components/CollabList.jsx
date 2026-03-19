import { Folder } from 'lucide-react'
import React from 'react'

const CollabList = () => {

  const role = "editor"
  const generalClass = "px-2 py-0.5 rounded text-[10px] font-bold uppercase"
  const editorClass = "bg-blue-500/10 text-blue-400 uppercase"
  const viewerClass = "bg-gray-800 text-gray-600 uppercase"

  return (
    <div className='grid  grid-cols-12 px-6 py-5 items-center hover:bg-[#161616] border border-t-0 border-gray-800/50 last:rounded-b-2xl cursor-pointer group'>
        <div className='col-span-6 flex items-center gap-3'>
            <Folder size={18} className="text-gray-600 group-hover:text-blue-500 transition-colors" />
            <div className='flex flex-col justify-center'>
              <p className='font-bold text-gray-200'>E-Commerce Backend</p>
              <p className='text-[10px] text-blue-500 font-bold uppercase tracking-tighter'>NodeJs</p>
            </div>
        </div>

        <div className='col-span-4 text-sm text-gray-400'>
            John Doe
        </div>  

        <div className='col-span-2 text-right'>
            <p className={generalClass + (role === "editor" ? editorClass : viewerClass)}>{role}</p>
        </div>

    </div>
  )
}

export default CollabList