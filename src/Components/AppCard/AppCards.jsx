import React from 'react';
import AppCard from './AppCard';

const AppCards = ({apps}) => {
    return (
        <>
        {
            apps.map(app => <AppCard key={app.id} app = {app}></AppCard>)
        }
        </>
    );
};

export default AppCards;