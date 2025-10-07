import React from "react";

const Statics = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#632EE3] to-[#854BEB] text-white text-center py-9">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-bold text-3xl">
            Trusted by Millions, Built for You
          </h2>
          <div className="flex items-center justify-center gap-9 pt-7 md:flex-row flex-col">
            <div >
              <p>Total Downloads</p>
              <h2 className="text-4xl font-bold">29.6M</h2>
              <p>21% more than last month</p>
            </div>
            <div>
              <p>Total Reviews</p>
              <h2 className="text-4xl font-bold">906K</h2>
              <p>46% more than last month</p>
            </div>
            <div>
              <p>Active Apps</p>
              <h2 className="text-4xl font-bold">132+</h2>
              <p>31 more will launch</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statics;
