import React from "react";

const HomeContact = () => {
  return (
    <div className="w-full flex justify-center items-center h-60 lg:h-100 xl:h-120 2xl:h-140 3xl:h-160 relative bg-linear-to-b from-transparent to-[#ebd8a9]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute top-0"
      >
        <path
          fill="#1F6D1F"
          fill-opacity="1"
          d="M0,256L48,218.7C96,181,192,107,288,106.7C384,107,480,181,576,229.3C672,277,768,299,864,272C960,245,1056,171,1152,165.3C1248,160,1344,224,1392,256L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-0"
      >
        <path
          fill="#C61509"
          fill-opacity="1"
          d="M0,256L48,218.7C96,181,192,107,288,106.7C384,107,480,181,576,229.3C672,277,768,299,864,272C960,245,1056,171,1152,165.3C1248,160,1344,224,1392,256L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="absolute h-fit w-full max-w-360 flex justify-center items-center flex-col gap-8 pb-6">
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
