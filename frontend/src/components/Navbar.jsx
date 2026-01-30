import React, { useState } from "react";
import "../css/color.css";
import { assets } from "../assets/assets";

const Menu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen z-50 transition-all duration-500 ease-in-out ${
        isMenuOpen
          ? "pointer-events-auto visible"
          : "pointer-events-none invisible pointer-events-none delay-500"
      }`}
    >
      <div
        className={`absolute top-0 left-0 w-screen h-screen bg-(--color-nav-bg) flex flex-col items-center gap-10 text-(--color-text) text-2xl transition-all duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full delay-200"
        }`}
      >
        <div
          className={`absolute top-0 left-0 w-[90%] h-screen bg-(--color-background) flex flex-col items-center gap-10 text-(--color-text) text-2xl transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? "translate-x-0 delay-100"
              : "-translate-x-full delay-100"
          }`}
        >
          <div
            className={`absolute top-0 left-0 w-[80%] h-screen bg-(--color-accent) flex flex-col items-center gap-10 text-(--color-text) text-2xl transition-all duration-500 ease-in-out ${
              isMenuOpen ? "translate-x-0 delay-200" : "-translate-x-full"
            }`}
          >
            <div className="w-full flex justify-end pt-4 pr-6 text-3xl">
              <i
                onClick={() => setIsMenuOpen(false)}
                className="fa-solid fa-x cursor-pointer hover:text-amber-200 transition-colors"
              ></i>
            </div>
            <div className="flex flex-col items-center gap-10">
              {["Home", "About", "Flavors", "Catering", "Order", "Contact"].map(
                (item) => (
                  <div key={item} className="group cursor-pointer font-nunito">
                    <span className="relative">
                      {item}
                      <span className="absolute left-0 -bottom-1 w-0 h-1 bg-(--color-text) rounded-2xl transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="w-full fixed top-0 left-0 z-100 mb-1">
        <div className="bg-(--color-nav-bg) h-16 sm:h-12 lg:h-14 xl:h-16 w-full justify-center items-center flex">
          <div className="w-6xl text-(--color-text) font-bold sm:text-md gap-0 sm:gap-20 lg:gap-8 lg:text-xl flex justify-evenly items-center">
            <div className="p-3 sm:hidden visible text-3xl text-(--color-text) w-full cursor-pointer">
              <i
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="fa-solid fa-bars"
              ></i>
            </div>
            <div className="w-full justify-center gap-6 lg:gap-8 items-center sm:flex hidden">
              <div className="group cursor-pointer font-nunito">
                <span className="relative">
                  Home
                  <span className="absolute left-0 -bottom-1 w-0 h-1 bg-(--color-text) rounded-2xl transition-all duration-300 group-hover:w-full"></span>
                </span>
              </div>
              <div className="group cursor-pointer font-nunito">
                <span className="relative">
                  About
                  <span className="absolute left-0 -bottom-1 w-0 h-1 bg-(--color-text) rounded-2xl transition-all duration-300 group-hover:w-full"></span>
                </span>
              </div>
              <div className="group cursor-pointer font-nunito">
                <span className="relative">
                  Flavors
                  <span className="absolute left-0 -bottom-1 w-0 h-1 bg-(--color-text) rounded-2xl transition-all duration-300 group-hover:w-full"></span>
                </span>
              </div>
            </div>
            <img
              src={assets.logoRemoveBg}
              alt="Logo"
              className=" absolute aspect-video object-cover top-0 xl:w-76 lg:w-72 md:w-64 sm:w-56 w-48"
            />
            <div className="w-full justify-center gap-6 lg:gap-8 items-center sm:flex hidden">
              <div className="group cursor-pointer font-nunito">
                <span className="relative">
                  Catering
                  <span className="absolute right-0 -bottom-1 w-0 h-1 bg-(--color-text) rounded-2xl transition-all duration-300 group-hover:w-full"></span>
                </span>
              </div>
              <div className="group cursor-pointer font-nunito">
                <span className="relative">
                  Order
                  <span className="absolute right-0 -bottom-1 w-0 h-1 bg-(--color-text) rounded-2xl transition-all duration-300 group-hover:w-full"></span>
                </span>
              </div>
              <div className="group cursor-pointer font-nunito">
                <span className="relative">
                  Contact
                  <span className="absolute right-0 -bottom-1 w-0 h-1 bg-(--color-text) rounded-2xl transition-all duration-300 group-hover:w-full"></span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-1 bg-(--color-accent) h-6 w-full"></div>
      </div>
    </>
  );
};

export default Navbar;
