import React from 'react'
import { Link } from 'react-router'
export default function Footer() {
  return (
    <>
    <div className='flex flex-col justify-center items-center py-8 bg-black text-white'>
        <div>
        <a className=" flex items-center gap-1" href="/">
            <img
              src="/src/assets/logo.png"
              alt="hero io logo"
              className="md:w-[40px] md:h-[40px] w-[30px] h-[30px]"
            />
            <span className="font-bold text-[#632EE3] text-xl">
              HERO.IO
            </span>
          </a>  
        </div>  
        <div className='text-center py-6'>
            <p className='font-bold text-gray-200 text-xl'>Follow us</p>
            <ul className='flex gap-4 text-amber-100 text-xs pt-3'>
                <li><Link to="/">Facebook</Link></li>
                <li><Link to="/">Instagram</Link></li>
                <li><Link to="/">Twitter</Link></li> 
                <li><Link to="/">Github</Link></li> 
            </ul>
        </div>
        <div>
            <p className='pb-2'>© Hero IO</p>
        </div>
    </div> 
    </>
  )
}
