import React from "react";

const Homebanner = () => {
  return (
    <>
      <div className=" text-center px-2">
        <div className="max-w-[1200px] mx-auto">
          <div className="pb-3">
            <h1 className="md:text-5xl font-bold md:pt-11 pt-6 text-3xl">
              We Build <br />
              <span className="text-[#632EE3]">Productive</span> Apps
            </h1>
            <p className="max-w-5xl py-3 mx-auto">
              At HERO.IO , we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting.Our goal is to turn your
              ideas into digital experiences that truly make an impact.
            </p>
            <div className="flex gap-2 justify-center flex-col md:flex-row py-3">
              <a className="btn" href="https://play.google.com/store/apps?hl=en" target="_blank">
                <img
                  src="/src/assets/google-play.png"
                  className="h-[19px] w-[19px]"
                />{" "}
                <span>Google Play</span>
              </a>
              <a className="btn" href="https://www.apple.com/app-store/" target="_blank">
                <img
                  src="/src/assets/app-store.png"
                  className="h-[19px] w-[19px]"
                />{" "}
                <span>App Store</span>
              </a>
            </div>
          </div>
          <div className="grid justify-center">
            <img src="src/assets/hero.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homebanner;
