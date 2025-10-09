import React from 'react'
import { Link } from 'react-router'
export default function SearchAppNotFound({handleReset}) {
  return (
    <div className='max-w-[1200px] mx-auto flex items-center justify-center flex-col py-10'>
        <h2 className='font-bold text-2xl text-center py-5'>Searched App Not Found Please Type Relevant App Name</h2>
      <img src="/src/assets/App-Error.png" className="max-w-[300px]" />
      <button className='btn btn-primary mt-3' onClick={handleReset}>
        Browse All Apps
      </button>
    </div>
  )
}
