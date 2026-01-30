import React from "react";
import { assets } from "../assets/assets";

const HomeCatering = () => {
  return (
    <div className="w-full flex justify-center items-center h-fit relative bg-linear-to-b from-transparent to-[#ebd8a9]">
      
        <div className="w-full min-h-150 absolute top-0 -mt-12 left-0">
          <img src={assets.cata} alt="" className="min-h-150 max-h-180 3xl:object-cover 3xl:object-bottom w-full aspect-[21/9]" />
        </div>
      <div className="max-w-360 w-full h-140 flex flex-wrap justify-evenly -mt-5 sm:-mt-7 lg:-mt-9 xl:-mt-11 2xl:-mt-12 items-center relative">
        <div>
          <h2 className="text-[40px] sm:text-[50px] lg:text-[70px] font-dancing font-bold mb-4 text-center">
            Catering Services
          </h2>
          <p className="font-nunito text-[16px] text-center sm:text-[24px] lg:text-[32px]">
            Perfect for parties and events
          </p>
          <>
            {/* The SVG Filter needed for the gooey effect */}
            <svg style={{ display: "none" }}>
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    result="blur"
                    stdDeviation="10"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
                    result="goo"
                  />
                  <feBlend in2="goo" in="SourceGraphic" result="mix" />
                </filter>
              </defs>
            </svg>

            <div
              className="buttons-container"
              // onClick={()=>(alert("This page is in under develop !!"))}
            >
              <button className="blob-btn text-[24px] sm:text-[30px] lg:text-[40px]">
                Order Online
                <span className="blob-btn__inner">
                  <span className="blob-btn__blobs">
                    <span className="blob-btn__blob"></span>
                    <span className="blob-btn__blob"></span>
                    <span className="blob-btn__blob"></span>
                    <span className="blob-btn__blob"></span>
                  </span>
                </span>
              </button>
            </div>
          </>
        </div>
        <img src={assets.tray} alt="tray" className="w-full -mt-50 sm:w-1/2 sm:mt-0 lg:mt-0 lg:w-1/3" />
      </div>
    </div>
  );
};

export default HomeCatering;
