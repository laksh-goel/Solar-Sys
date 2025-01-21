import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMobileMenu, setshowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="conatiner mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        {/* <img src={assets.logo} alt="" /> */}
        <img 
        src={assets.logo}
        alt="Logo"
        className="w-32 h-auto invert brightness-0" // Example: Tailwind for width (adjust "w-32" as needed)
        // style={{ width: "120px", height: "auto" }} // Alternatively, use inline styles
      />
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Services" className="cursor-pointer hover:text-gray-400">
            Services
          </a>
          <a href="#Why solar" className="cursor-pointer hover:text-gray-400">
            Why Solar
          </a>
          <a href="#Testimonials" className="cursor-pointer hover:text-gray-400">
            Testimonials
          </a>
        </ul>

        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Contact us
        </button>

        <img
          onClick={() => setshowMobileMenu(true)}
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
          alt=""
        />
      </div>
      {/*----------mobile-menu--------*/}
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        } right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setshowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6"
            alt=""
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a
            onClick={() => setshowMobileMenu(false)}
            href="#Header"
            className="px-4 py2 rounded-full inline-block"
          >
            Home
          </a>
          <a
            onClick={() => setshowMobileMenu(false)}
            href="#About"
            className="px-4 py2 rounded-full inline-block"
          >
            About
          </a>
          <a
            onClick={() => setshowMobileMenu(false)}
            href="#Services"
            className="px-4 py2 rounded-full inline-block"
          >
            Services
          </a>
          <a
            onClick={() => setshowMobileMenu(false)}
            href="#Testimonials"
            className="px-4 py2 rounded-full inline-block"
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
