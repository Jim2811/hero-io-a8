import React from "react";
import { NavLink } from "react-router";
import Navlinks from "./Navlinks";
const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 md:px-7">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-3 shadow"
            >
              <Navlinks />
            </ul>
          </div>
          <a className=" flex items-center gap-1" href="/">
            <img
              src="/src/assets/logo.png"
              alt="hero io logo"
              className="md:w-[40px] md:h-[40px] w-[30px] h-[30px]"
            />
            <span className="md:font-bold text-[#632EE3] text-xs md:text-xl">
              HERO.IO
            </span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">
            <Navlinks></Navlinks>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            className="btn btn-primary"
            href="https://github.com/Jim2811"
            target="_blank"
          >
            <img src="/src/assets/github-icon.png" alt="" />
            <span>Contribute</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
