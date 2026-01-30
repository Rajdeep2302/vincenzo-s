import React from "react";
import { assets } from "../assets/assets";
import "../css/color.css";
import "../css/BlobButton.css";
const HomeOrder = () => {
  return (
    <div className="w-screen min-h-150 xl:min-h-190 max-h-190 relative justify-center items-center flex flex-col">
      <div className=" w-full min-h-150 absolute top-0 mt-10 2xl:mt-0 left-0">
        <img src={assets.order} alt="Order" className="min-h-150 max-h-180 3xl:object-cover 3xl:object-bottom w-full aspect-[21/9]" />
      </div>
      <div className="max-w-360 w-screen h-120 mt-30 xl:mt-0 absolute">
        <p className="font-allura text-[46px] sm:text-[60px] lg:text-[80px] px-2 text-center sm:mt-20 font-extrabold bg-[#ffffff] bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(0,0,0,1)] tracking-wide leading-[0.9]">
          Authentic Italian Water Ice
        </p>
        <div className="font-nunito text-[16px] sm:text-[24px] lg:text-[32px] text-center mt-20 w-full sm:mt-15 font-extrabold bg-[#ffffff] bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(0,0,0,1)] tracking-wide flex justify-center items-center gap-4 sm:gap-8 flex-wrap">
          <p>Dairy-Free</p>
          <i class="fa-solid fa-circle"></i>
          <p>Fat Free</p>
          <i class="fa-solid fa-circle"></i>
          <p>Refreshing</p>
        </div>
        <div className="flex justify-center mt-20">
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
          {/* <div className="bg-[#C61509] rounded-md shadow-lg hover:shadow-xl p-1 cursor-pointer hover:scale-105 transition-all duration-300">
            <div className="bg-[#FDF2E9] rounded-md p-1">
              <div className="bg-[#C61509] py-2 px-16 text-[#FDF2E9] font-bold rounded-md font-nunito text-[24px] sm:text-[30px] lg:text-[40px] ">
                Order Online
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HomeOrder;
