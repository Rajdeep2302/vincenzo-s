import React from "react";
import "../css/Card.css";
import "../css/BlobButton.css";
import { assets } from "../assets/assets";

const Flavors = () => {
  return (
    <div className="w-full h-fit bg-linear-to-b from-transparent to-[#1F6D1F] mt-8 sm:mt-8 md:mt-10 lg:mt-20 2xl:mt-46 3xl:mt-66 relative justify-center items-center flex flex-col">
      <div className="max-w-360 w-full h-fit flex flex-col justify-start py-6 items-center">
        {/* heading */}
        <div className="w-full px-2 flex justify-evenly items-center">
          <div className="bg-[#C61509] w-1/2 h-0.5 rounded-full"></div>
          <h2 className="text-3xl font-nunito sm:text-4xl px-4 md:text-5xl lg:text-6xl text-nowrap font-bold text-[#C61509] mb-6">
            Our Flavors
          </h2>
          <div className="bg-[#C61509] w-1/2 h-0.5 rounded-full"></div>
        </div>
        {/* flavor images */}
        <div className="w-fit h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <div className="container">
            <img src={assets.blueBack} alt="BlueBarry" className="card" />
            <div className="test-button">
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
                <button className="blob-btn text-[24px] sm:text-[30px] lg:text-[40px]]">
                  Test Now
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
            </div>
            <img src={assets.pib} alt="BlueBarry" className="ice-cream" />
          </div>
          <div className="container">
            <img src={assets.blueBack} alt="BlueBarry" className="card" />
            <div className="test-button">
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
                <button className="blob-btn text-[24px] sm:text-[30px] lg:text-[40px]]">
                  Test Now
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
            </div>
            <img src={assets.bb} alt="BlueBarry" className="ice-cream" />
          </div>
          <div className="container">
            <img src={assets.blueBack} alt="BlueBarry" className="card" />
            <div className="test-button">
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
                <button className="blob-btn text-[24px] sm:text-[30px] lg:text-[40px]]">
                  Test Now
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
            </div>
            <img src={assets.sbb} alt="BlueBarry" className="ice-cream" />
          </div>
          <div className="container">
            <img src={assets.blueBack} alt="BlueBarry" className="card" />
            <div className="test-button">
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
                <button className="blob-btn text-[24px] sm:text-[30px] lg:text-[40px]]">
                  Test Now
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
            </div>
            <img src={assets.cb} alt="BlueBarry" className="ice-cream" />
          </div>
          <div className="container">
            <img src={assets.blueBack} alt="BlueBarry" className="card" />
            <div className="test-button">
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
                <button className="blob-btn text-[24px] sm:text-[30px] lg:text-[40px]]">
                  Test Now
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
            </div>
            <img src={assets.pb} alt="BlueBarry" className="ice-cream" />
          </div>
          {/* <div class="counter">
            <div class="roop-top">
              <div class="roop-color"></div>
              <div class="roop-color"></div>
              <div class="roop-color"></div>
              <div class="roop-color"></div>
              <div class="roop-color"></div>
            </div>
            <img
              src={assets.pineapple}
              alt="Pineapple"
              class="image-items"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Flavors;
