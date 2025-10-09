import React, { useState } from 'react';
import InstallationCard from './InstallationCard/InstallationCard';
import { toast } from 'react-toastify';

const Installation = (id) => {
    const appList = JSON.parse(localStorage.getItem("installedAppsList") || "[]");
    const [uninstallApps, setUninstallApps] = useState(appList)
    const handleUinstall = (name, id) =>{
        const newList = uninstallApps.filter(a => a.id !== id)
        setUninstallApps(newList)
        localStorage.setItem("installedAppsList", JSON.stringify(newList))
        toast.success(`${name} Uninstalled Successfully!`)
    }
    return (
        <div className='max-w-[1200px] mx-auto pb-15 min-h-[70vh]'>
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
                        appList.map(app => <InstallationCard key={app.id} app={app} handleUinstall= {handleUinstall}></InstallationCard>)
                    }
                </div>
        </div>
    );
};

export default Installation;