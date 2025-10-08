import React from 'react'

export default function InstallationCard({app}) {
    const download = app.downloads / 1000000
  return (
    <>
      <div className='p-2 bg-amber-100 mb-2 rounded-2xl flex justify-between items-center'>
        <div className='flex gap-3 items-center flex-col md:flex-row justify-center'>
            <div>
                <img src="https://store-images.s-microsoft.com/image/apps.30645.9007199266245907.cb06f1f9-9154-408e-b4ef-d19f2325893b.ac3b465e-4384-42a8-9142-901c0405e1bc" className="w-[100px] rounded-xl" />
            </div>
            <div>
                <h4 className='font-bold pb-1'>{app.title}</h4>
                <div className='flex gap-3'>
                    <p className='flex items-center gap-1'>
                        <img src="/src/assets/icon-downloads.png" className="w-[17px] h-[17px]" />
                        <span className='text-green-500'>{download}M</span>
                    </p>
                    <p className='flex items-center gap-1'>
                        <img src="/src/assets/icon-ratings.png" className="w-[17px] h-[17px]" />
                        <span className='text-amber-600'>{app.ratingAvg}M</span>
                    </p>
                    <p className='flex items-center gap-1'>
                        {app.size} MB
                    </p>
                </div>
            </div>
        </div>
        <div>
            <button className='btn bg-green-500 text-white font-bold'>Uninstall</button>
        </div>
      </div>
    </>
  )
}
