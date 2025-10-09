import React from 'react';
import { NavLink } from 'react-router';
const Navlinks = () => {
    return (
        <>
            <NavLink
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              to="/apps"
            >
              Apps
            </NavLink>

            <NavLink
              to="/installation"
            >
              My Installation
            </NavLink>
        </>
    );
};

export default Navlinks;