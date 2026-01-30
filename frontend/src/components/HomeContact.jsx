import React from "react";
import { assets } from "../assets/assets";

const HomeContact = () => {
  return (
    <div className="w-screen flex justify-center items-center min-h-100 max-h-180 relative bg-linear-to-b from-transparent to-[#ebd8a9]">
      <div className="w-full min-h-100 max-h-180 absolute top-0 left-0">
        <img
          src={assets.contacted}
          alt=""
          className="min-h-100 max-h-180 w-full aspect-[41/9]"
        />
      </div>
      <div className="absolute min-h-100 max-h-180 w-full max-w-360 flex justify-center items-center flex-col gap-8">
        {/* heading */}
        <div className="w-full px-2 flex justify-evenly items-center">
          <div className="bg-[#ffffff] w-1/2 h-0.5 rounded-full"></div>
          <h2 className="text-3xl font-nunito sm:text-4xl px-4 md:text-5xl lg:text-6xl text-nowrap text-center w-full font-extrabold bg-[#ffffff] bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(0,0,0,1)] tracking-wide flex justify-center items-center gap-4 sm:gap-8 flex-wrap">
            Our Flavors
          </h2>
          <div className="bg-[#ffffff] w-1/2 h-0.5 rounded-full"></div>
        </div>
        <div className="font-nunito text-[16px] sm:text-[24px] lg:text-[32px] text-center w-full font-extrabold bg-[#ffffff] bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(0,0,0,1)] tracking-wide flex justify-center items-center gap-4 sm:gap-8 flex-wrap">
          <p>Located in Atlanta, GA</p>
        </div>
        <div className="bg-[#FBD556] rounded-md shadow-lg hover:shadow-xl w-fit p-1 cursor-pointer hover:scale-105 transition-all duration-300 shadow-black">
          <div className="bg-[#FDF2E9] rounded-md p-1">
            <div className="bg-linear-to-b to-[#F3CF53] from-[#F0E281] py-2 px-16 text-[#000000] font-bold rounded-md font-nunito text-[24px] sm:text-[30px] lg:text-[40px] ">
              Contact Us
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
