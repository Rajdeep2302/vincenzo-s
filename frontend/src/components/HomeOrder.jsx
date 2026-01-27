import React from "react";
import { assets } from "../assets/assets";
import "../css/color.css";
import "../css/BlobButton.css";
const HomeOrder = () => {
  return (
    <div className="w-full h-160 relative justify-center items-center flex flex-col">
      <div className="w-360 xl:w-full h-160 bg-linear-to-b from-transparent lg:pr-0 md:pr-50 sl:pr-100 pr-150 to-[#FDD164] relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-36 animate-wave-1"
        >
          <path
            fill="#F65B1A"
            fill-opacity="1"
            // className="animate-wave-1"
            d="M0,128L15,160C30,192,60,256,90,256C120,256,150,192,180,192C210,192,240,256,270,250.7C300,245,330,171,360,154.7C390,139,420,181,450,186.7C480,192,510,160,540,154.7C570,149,600,171,630,165.3C660,160,690,128,720,101.3C750,75,780,53,810,80C840,107,870,181,900,192C930,203,960,149,990,106.7C1020,64,1050,32,1080,58.7C1110,85,1140,171,1170,176C1200,181,1230,107,1260,90.7C1290,75,1320,117,1350,133.3C1380,149,1410,139,1425,133.3L1440,128L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-24 animate-wave-2"
        >
          <path
            fill="#DB392A"
            // className="animate-wave-2"
            fill-opacity="1"
            d="M0,64L15,58.7C30,53,60,43,90,48C120,53,150,75,180,85.3C210,96,240,96,270,106.7C300,117,330,139,360,128C390,117,420,75,450,53.3C480,32,510,32,540,58.7C570,85,600,139,630,160C660,181,690,171,720,149.3C750,128,780,96,810,122.7C840,149,870,235,900,229.3C930,224,960,128,990,117.3C1020,107,1050,181,1080,186.7C1110,192,1140,128,1170,101.3C1200,75,1230,85,1260,85.3C1290,85,1320,75,1350,112C1380,149,1410,235,1425,277.3L1440,320L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-12 animate-wave-3"
        >
          <path
            fill="#C11919"
            // className="animate-wave-3"
            fill-opacity="1"
            d="M0,96L15,122.7C30,149,60,203,90,218.7C120,235,150,213,180,208C210,203,240,213,270,181.3C300,149,330,75,360,53.3C390,32,420,64,450,106.7C480,149,510,203,540,213.3C570,224,600,192,630,186.7C660,181,690,203,720,192C750,181,780,139,810,149.3C840,160,870,224,900,224C930,224,960,160,990,154.7C1020,149,1050,203,1080,208C1110,213,1140,171,1170,154.7C1200,139,1230,149,1260,133.3C1290,117,1320,75,1350,96C1380,117,1410,203,1425,245.3L1440,288L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-6 animate-wave-4"
        >
          <path
            fill="#2F7C35"
            fill-opacity="1"
            // className="animate-wave-4"
            d="M0,96L15,96C30,96,60,96,90,90.7C120,85,150,75,180,74.7C210,75,240,85,270,106.7C300,128,330,160,360,170.7C390,181,420,171,450,160C480,149,510,139,540,149.3C570,160,600,192,630,192C660,192,690,160,720,128C750,96,780,64,810,64C840,64,870,96,900,106.7C930,117,960,107,990,101.3C1020,96,1050,96,1080,80C1110,64,1140,32,1170,26.7C1200,21,1230,43,1260,69.3C1290,96,1320,128,1350,138.7C1380,149,1410,139,1425,133.3L1440,128L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z"
          ></path>
        </svg>
        <div className="relative h-full w-full flex justify-center items-center">
          <img
            src={assets.sb}
            alt="bb"
            className=" absolute -rotate-6 bottom-16 right-36"
          />
          <img
            src={assets.pib}
            alt="bb"
            className=" absolute rotate-12 bottom-16 right-0"
          />
          <img
            src={assets.bb}
            alt="bb"
            className=" absolute rotate-20 bottom-0 right-14"
          />
          {/* <img src={assets.pb} alt="bb" className=" absolute -rotate-45 -bottom-12 right-12"/> */}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0 animate-wave-5"
        >
          <path
            fill="#054312"
            fill-opacity="1"
            // className="animate-wave-5"
            d="M0,256L15,245.3C30,235,60,213,90,176C120,139,150,85,180,90.7C210,96,240,160,270,202.7C300,245,330,267,360,234.7C390,203,420,117,450,112C480,107,510,181,540,181.3C570,181,600,107,630,85.3C660,64,690,96,720,106.7C750,117,780,107,810,138.7C840,171,870,245,900,272C930,299,960,277,990,266.7C1020,256,1050,256,1080,245.3C1110,235,1140,213,1170,218.7C1200,224,1230,256,1260,245.3C1290,235,1320,181,1350,170.7C1380,160,1410,192,1425,208L1440,224L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="max-w-360 w-screen h-120 mt-30 absolute">
        <p className="font-allura text-[46px] sm:text-[60px] lg:text-[80px] text-center sm:mt-20 font-extrabold bg-[#ffffff] bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(0,0,0,1)] tracking-wide leading-[0.9]">
          Authentic Italian Water Ice
        </p>
        <div className="font-nunito text-[16px] sm:text-[24px] lg:text-[32px] text-center mt-25 w-full sm:mt-15 font-extrabold bg-[#ffffff] bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(0,0,0,1)] tracking-wide flex justify-center items-center gap-4 sm:gap-8 flex-wrap">
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
      <div className="absolute -bottom-8 sm:-bottom-12 md:-bottom-14 lg:-bottom-24 2xl:-bottom-50 3xl:-bottom-70 w-full">
        <img
          src={assets.paper_tear}
          alt="paper_tear"
          className="w-screen -z-50 h-auto lg:h-40 xl:h-30 2xl:h-52 3xl:h-auto object-cover object-bottom"
        />
      </div>
    </div>
  );
};

export default HomeOrder;
