import React from 'react'

export default function ErrorPage() {
  return (
    <>
        <h2 className='font-bold text-2xl text-center text-red-500 py-5'>The Page is not Found!!!</h2>
        <div className='max-w-[1200px] mx-auto flex items-center justify-center flex-col py-10'>
        <img src="/assets/error-404.png" className="max-w-[300px]" />
        <button className='btn btn-primary mt-3'>
            <a href={"/"}>Go Back To Home</a>
        </button>
        </div>
    </>
  )
}
