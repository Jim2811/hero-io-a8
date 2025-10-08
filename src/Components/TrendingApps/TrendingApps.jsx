import React from 'react';
import { Link } from 'react-router';
import AppCard from '../AppCard/AppCard';

const TrendingApps = ({apps}) => {
    return (
        <>
            <div className='max-w-[1200px] mx-auto py-12 cursor-pointer'>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold pb-2'>Trending Apps</h2>
                    <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='py-8 grid md:grid-cols-4 gap-4'>
                    {
                        apps.slice(0,8).map(app => <AppCard key={app.id} app = {app}></AppCard>)
                    }
                </div>
                <div className='text-center'>

                <button className='btn btn-primary text-center'>
                    <Link to={"/apps"}>Show All</Link>
                </button>
                </div>
            </div>
        </>
    );
};

export default TrendingApps;