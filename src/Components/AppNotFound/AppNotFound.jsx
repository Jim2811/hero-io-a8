import React from 'react'
import { Link } from 'react-router'
export default function AppNotFound() {
  return (
    <div className='max-w-[1200px] mx-auto flex items-center justify-center flex-col py-10 min-h-[70vh]'>
      <img src="/src/assets/App-Error.png" className="max-w-[300px]" />
      <button className='btn btn-primary mt-3'>
        <Link to={"/"}>Go Back To Home</Link>
      </button>
    </div>
  )
}
