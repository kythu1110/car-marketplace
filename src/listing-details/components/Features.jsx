import React from 'react'
import { FaCheck } from "react-icons/fa6";

function Features({features}) {
  return (
    <div className='p-10 rounded-xl border shadow-md my-7'>
        <h2 className='font-medium text-2xl'>Features</h2>
        {features ?  
        <div className='grid grid-cols-1 md:grid-cols-3 mt-5 lg:grid-cols-4 sm:grid-cols-1 gap-7'>
            {Object.entries(features).map(([features, value]) => (
                <div className='flex gap-2 items-center'>
                    <FaCheck className='text-lg p-1 rounded-full bg-blue-100 text-primary'/>
                    <h2>{features}</h2>
                </div>
            ))}
        </div>
        : <div className='w-full h-[100px] bg-slate-200 animate-pulse rounded-xl'></div>
        }
    </div>
    
  )
}

export default Features