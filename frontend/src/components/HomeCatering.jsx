import React from "react";
import { assets } from "../assets/assets";

const HomeCatering = () => {
  return (
    <div className="w-full flex justify-center items-center h-fit relative bg-linear-to-b from-transparent to-[#ebd8a9]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute top-0"
      >
        <path
          fill="#C61509"
          fill-opacity="1"
          d="M0,256L80,224C160,192,320,128,480,133.3C640,139,800,213,960,250.7C1120,288,1280,288,1360,288L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
      <div className="max-w-360 w-full h-180 pt-20 pb-10 flex flex-wrap justify-evenly items-center relative">
        <div>
          <h2 className="text-[40px] sm:text-[50px] lg:text-[70px] font-dancing font-bold mb-4 text-center">
            Catering Services
          </h2>
          <p className="font-nunito text-[16px] sm:text-[24px] lg:text-[32px]">
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
        <img src={assets.catering} alt="catering" className="w-full max-w-[500px]" />
      </div>
      <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#1F6D1F"
          fill-opacity="1"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default HomeCatering;
