import React from 'react';
import Homebanner from './Homebanner/Homebanner';
import Statics from './Statics/Statics';
import TrendingApps from './TrendingApps/TrendingApps';

const Home = () => {
    return (
        <>
        <div className='bg-gray-100'>
            <Homebanner></Homebanner>
            <Statics></Statics>
            <TrendingApps></TrendingApps>
        </div>
        </>
    );
};

export default Home;