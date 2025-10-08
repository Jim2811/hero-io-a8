import React from 'react';
import TrendingAppCard from '../TrendingAppCard/TrendingAppCard';
import { Link } from 'react-router';

const TrendingApps = ({trendingApps}) => {
    return (
        <>
            <div className='max-w-[1200px] mx-auto py-12'>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold pb-2'>Trending Apps</h2>
                    <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='py-8 grid md:grid-cols-3 gap-4'>
                    {
                        trendingApps.map(trendingApp => <TrendingAppCard trendingApp = {trendingApp}></TrendingAppCard>)
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