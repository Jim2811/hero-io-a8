import React, { useContext } from 'react';
import Homebanner from './Homebanner/Homebanner';
import Statics from './Statics/Statics';
import TrendingApps from './TrendingApps/TrendingApps';
import { AppsContext } from '../Context/AppsContext';




const Home = () => {
    const apps = useContext(AppsContext)
    // const trendingApps = apps.allApps.slice(0,8)
    return (
        <>
        <div className='bg-gray-100'>
            <Homebanner></Homebanner>
            <Statics></Statics>
            <TrendingApps apps={apps.allApps}></TrendingApps>
        </div>
        
        </>
    );
};

export default Home;