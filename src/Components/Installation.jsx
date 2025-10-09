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
    const handleSort = (e) =>{
        const sortValue = e.target.value;
        const sortApps = [...uninstallApps].sort((a,b)=>{
            const data1 = Number(a.downloads)
            const data2 = Number(b.downloads)
            return sortValue === "ascending" ? data1 - data2 : data2 - data1
        })
        setUninstallApps(sortApps)
        // const ascending = Number
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
                    <h3 className='font-bold text-xl'>{uninstallApps.length} Apps Found</h3>
                </div>
                <div className='pb-5'>
                    <fieldset className="fieldset">
                        <select defaultValue="Sort by Downloads" className="select" onChange={handleSort}>
                            <option disabled={true}>Sort by Downloads</option>
                            <option value={"ascending"}>Low-High</option>
                            <option value={"descending"}>High-Low</option>
                        </select>

                    </fieldset>
                </div>
                {/* dynamic data loading  */}
            </div>
                <div>
                    {
                        uninstallApps.map(app => <InstallationCard key={app.id} app={app} handleUinstall= {handleUinstall}></InstallationCard>)
                    }
                </div>
        </div>
    );
};

export default Installation;