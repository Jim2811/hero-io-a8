import React, { useContext, useState } from "react";
import Home from "./Home";
import { AppsContext } from "../Context/AppsContext";
import AppCards from "./AppCard/AppCards";
import AppNotFound from "./AppNotFound/AppNotFound";
import SearchAppNotFound from "./SearchAppNotFound/SearchAppNotFound";

const Apps = () => {
    const apps = useContext(AppsContext)
    const [searchValue, setSearchValue] = useState('')
    const [filteredApps, setFilteredApps] = useState(apps.allApps)
    const [loading, setLoading] = useState(false)
    const searcTime = parseInt( Math.random()*200)
    const handleSearch = (e) =>{
      const val = e.target.value
      setSearchValue(val)
      if(val.trim() === ""){
        setFilteredApps(apps.allApps)
        setLoading(false)
        return;
      }
      setLoading(true)
      setTimeout(()=>{
        const searchResult = apps.allApps.filter((a)=>a.title.toLowerCase().includes(val.toLowerCase()))
        setFilteredApps(searchResult)
        setLoading(false)
      }, searcTime)
    }
    const handleReset = () =>{
      setSearchValue('')
      setFilteredApps(apps.allApps)
    }
  return (
    <>
      <div className="bg-gray-100">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center py-10">
            <h1 className="font-bold text-3xl">Our All Applications</h1>
            <p className="pt-3">
              Explore All Apps on the Market developed by us. We code for
              Millions
            </p>
          </div>
          <div className="flex md:justify-between pb-5 flex-col items-center justify-center md:flex-row gap-3">
            <h3 className="font-bold text-2xl">({filteredApps.length}) Apps Found</h3>
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
                <input type="search" value={searchValue} placeholder="Search Apps"  onChange={handleSearch}/>
              </label>
            </div>
          </div>
            {/* app cards */}
            {
              loading ? <div className="flex justify-center items-center min-h-[70vh] py-7"><span className="loading loading-bars loading-xl"></span></div> : filteredApps.length===0 ? <SearchAppNotFound handleReset={handleReset}></SearchAppNotFound> : 
              <div className="py-8 grid md:grid-cols-4 gap-4">
                <AppCards apps= {filteredApps}>

                </AppCards>
            </div>
            }
            
        </div>
      </div>
    </>
  );
};

export default Apps;
