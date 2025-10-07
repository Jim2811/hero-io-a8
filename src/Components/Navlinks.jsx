import React from 'react';
import { NavLink } from 'react-router';
const Navlinks = () => {
    return (
        <>
            <NavLink
              to="/"
              className={`({ isActive }) =>{
                isActive ? "text-red-500 font-semibold" : ""
              }`}
            >
              Home
            </NavLink>

            <NavLink
              to="/apps"
              className={`({ isActive }) =>{
                isActive ? "text-red-500 font-semibold" : ""
              }`}
            >
              Apps
            </NavLink>

            <NavLink
              to="/installation"
              className={`({ isActive }) =>{
                isActive ? "text-red-500 font-semibold" : ""
              }`}
            >
              Installation
            </NavLink>
        </>
    );
};

export default Navlinks;