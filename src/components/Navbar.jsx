import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
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
   
    <nav
  className={`${
    location.pathname === "/" ? "fixed  bg-gray-900" : "relative bg-gray-900"

  } top-0 left-0 w-full z-10  shadow-md`}
>
      <div className="conatiner mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <div  onClick={() => console.log("Clicked!")}>
      <Link to="/">
          <img
            src={assets.logo}
            alt="Logo"
            className="w-32 h-auto md:w-40 lg:w-48  z-10" // Adjust the width according to screen size
          />
        </Link>
        </div>
        
        <ul className="hidden md:flex gap-7 text-white">
          <Link to="/" className="cursor-pointer hover:text-gray-400">
            Home
          </Link>
          <Link to="/about" className="cursor-pointer hover:text-gray-400">
            Who are we
          </Link>
          <Link to="/Services" className="cursor-pointer hover:text-gray-400">
            Prouducts & Services
          </Link>
          <Link to="/Projects" className="cursor-pointer hover:text-gray-400">
            Projects
          </Link>
          <Link
            to="/Testimonials"
            className="cursor-pointer hover:text-gray-400"
          >
            Happy Faces
          </Link>
          <Link to="/Careers" className="cursor-pointer hover:text-gray-400">
            Careers
          </Link>
        </ul>

        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Book a free Consulation
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
        } right-0 top-0 bottom-0 overflow-hidden bg-green-100 transition-all`}
      >
        <div className="flex justify-end p-6  cursor-pointer">
          <img
            onClick={() => setshowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6"
            alt="Close Menu"
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium relative ">
          <Link
            onClick={() => setshowMobileMenu(false)}
            to="/"
            className="px-4 py2 rounded-full inline-block"
          >
            Home
          </Link>
          <Link
            onClick={() => setshowMobileMenu(false)}
            to="/about"
            className="px-4 py2 rounded-full inline-block"
          >
            Who are we
          </Link>
          <Link
            onClick={() => setshowMobileMenu(false)}
            to="/Services"
            className="px-4 py2 rounded-full inline-block"
          >
            Products & Services
          </Link>
          <Link
            onClick={() => setshowMobileMenu(false)}
            to="/projects"
            className="px-4 py2 rounded-full inline-block"
          >
            Projects
          </Link>
          <Link
            onClick={() => setshowMobileMenu(false)}
            to="/Testimonials"
            className="px-4 py2 rounded-full inline-block"
          >
            Happy Faces
          </Link>
          <Link
            onClick={() => setshowMobileMenu(false)}
            to="/Careers"
            className="px-4 py2 rounded-full inline-block"
          >
            Careers
          </Link>
        </ul>

        <div className="flex items-center justify-center mt-5">
          <button className="block md:hidden bg-green-500 px-8 py-2 rounded-full ">
            <Link
              onClick={() => setshowMobileMenu(false)}
              to="/Consultation"
              className="px-4 py-2 rounded-full inline-block"
            >
              Book a free consultation
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
