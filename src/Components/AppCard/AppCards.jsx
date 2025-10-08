import React from 'react';
import AppCard from './AppCard';

const AppCards = ({apps}) => {
    return (
        <>
        {
            apps.map(app => <AppCard app = {app}></AppCard>)
        }
        </>
    );
};

export default AppCards;