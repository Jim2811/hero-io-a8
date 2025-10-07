import React from 'react';
import { NavLink } from 'react-router';
const Navlinks = () => {
    return (
        <>
            <NavLink
              to="/"
              className={`({ isActive }) =>{
                isActive ? "text-[#8f54ee] font-semibold underline" : ""
              }`}
            >
              Home
            </NavLink>

            <NavLink
              to="/apps"
              className={`({ isActive }) =>{
                isActive ? "text-[#8f54ee] font-semibold underline" : ""
              }`}
            >
              Apps
            </NavLink>

            <NavLink
              to="/installation"
              className={`({ isActive }) =>{
                isActive ? "text-[#8f54ee] font-semibold underline" : ""
              }`}
            >
              Installation
            </NavLink>
        </>
    );
};

export default Navlinks;