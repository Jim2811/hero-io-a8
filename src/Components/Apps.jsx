import React, { useContext } from "react";
import Home from "./Home";
import { AppsContext } from "../Context/AppsContext";
import AppCards from "./AppCard/AppCards";

const Apps = () => {
    const apps = useContext(AppsContext)
  return (
    <>
      <div className="bg-gray-100 h-[100vh]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center py-10">
            <h1 className="font-bold text-3xl">Our All Applications</h1>
            <p>
              Explore All Apps on the Market developed by us. We code for
              Millions
            </p>
          </div>
          <div className="flex md:justify-between pb-5 flex-col items-center justify-center md:flex-row gap-3">
            <h3 className="font-bold text-2xl">({apps.allApps.length}) Apps Found</h3>
            {/* search */}
            <div>
              <label className="input">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input type="search" required placeholder="Search" />
              </label>
            </div>
          </div>
            {/* app cards */}
            <div className="py-8 grid md:grid-cols-3 gap-4">
                <AppCards apps= {apps.allApps}>

                </AppCards>
            </div>
        </div>
      </div>
    </>
  );
};

export default Apps;
