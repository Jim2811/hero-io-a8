import React from 'react';
import InstallationCard from './InstallationCard/InstallationCard';

const Installation = () => {
    const appList = JSON.parse(localStorage.getItem("installedAppsList") || "[]");
    
    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className="text-center py-10">
                <h1 className="font-bold text-3xl">Your Installed Apps</h1>
                <p className='py-3'>
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>
            <div className='flex justify-between flex-col md:flex-row items-center gap-2'>
                <div>
                    <h3 className='font-bold text-xl'>{appList.length} Apps Found</h3>
                </div>
                <div className='pb-5'>
                    <fieldset className="fieldset">
                        <select defaultValue="Sort By Sizes" className="select">
                            <option>Low to High</option>
                            <option>High to Low</option>
                        </select>

                    </fieldset>
                </div>
                {/* dynamic data loading  */}
            </div>
                <div>
                    {
                        appList.map(app => <InstallationCard key={app.id} app={app}></InstallationCard>)
                    }
                </div>
        </div>
    );
};

export default Installation;