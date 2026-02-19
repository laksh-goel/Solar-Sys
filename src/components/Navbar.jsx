import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCalculator, FaInstagram, FaFacebookF } from "react-icons/fa";

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
        location.pathname === "/" ? "fixed" : "relative"
      } top-0 left-0 w-full z-10 bg-gray-900 shadow-md`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-6 md:px-12 lg:px-20 gap-4">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex-shrink-0"
        >
          <img
            src={assets.logo}
            alt="SolarXsys Logo"
            className="w-36 h-auto md:w-44 lg:w-52 cursor-pointer"
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-6 text-white text-base font-semibold whitespace-nowrap">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-green-400 transition"
          >
            Home
          </Link>

          <Link to="/about" className="hover:text-green-400 transition">
            Who are we
          </Link>
          <Link to="/Services" className="hover:text-green-400 transition">
            Products & Services
          </Link>
          <Link to="/Projects" className="hover:text-green-400 transition">
            Projects
          </Link>
          <Link to="/Testimonials" className="hover:text-green-400 transition">
            Happy Faces
          </Link>
          <Link to="/Careers" className="hover:text-green-400 transition">
            Careers
          </Link>
        </ul>

        {/* Right Section */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          {/* Consultation Button */}
          <Link to="/Consultation">
            <button className="bg-white text-gray-900 text-base font-semibold px-7 py-2.5 rounded-full hover:bg-green-400 hover:text-white transition whitespace-nowrap">
              Book a Free Consultation
            </button>
          </Link>

          {/* Calculator */}
          <Link to="/SolarCalculator">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center w-11 h-11 bg-white rounded-full shadow-md cursor-pointer hover:bg-green-400 hover:text-white transition"
            >
              <FaCalculator size={18} />
            </motion.div>
          </Link>

          {/* Divider */}
          <div className="w-px h-8 bg-gray-600 mx-1" />

          {/* Contact Info + Social Icons — compact */}
          <div className="flex flex-col justify-center gap-1.5">
            {/* Phone + Social Icons on one line */}
            <div className="flex items-center gap-2">
              <a
                href="tel:+919761831225"
                className="text-sm font-bold text-white hover:text-green-400 transition tracking-wide whitespace-nowrap"
              >
                +91 97618 31225
              </a>
              <div className="flex items-center gap-2 ml-1">
                <a
                  href="https://www.instagram.com/solarxsystechsolution?igsh=ZjQ1c3ZhazhkcXJv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300 hover:scale-110 transition"
                >
                  <FaInstagram size={17} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61587083852905"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 hover:scale-110 transition"
                >
                  <FaFacebookF size={17} />
                </a>
              </div>
            </div>
            {/* Email on second line */}
            <a
              href="mailto:solarxsys@gmail.com"
              className="text-sm text-gray-300 hover:text-green-600 transition whitespace-nowrap"
            >
              solarxsys@gmail.com
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <img
          onClick={() => setshowMobileMenu(true)}
          src={assets.menu_icon}
          className="lg:hidden w-7 cursor-pointer"
          alt="Open Menu"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${
          showMobileMenu ? "fixed inset-0 w-full" : "h-0 w-0 overflow-hidden"
        } bg-green-50 z-50 transition-all`}
      >
        <div className="flex justify-end p-5">
          <img
            onClick={() => setshowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6 cursor-pointer"
            alt="Close Menu"
          />
        </div>

        <ul className="flex flex-col items-center gap-5 mt-4 text-lg font-medium text-gray-800">
          <Link
            to="/"
            onClick={() => {
              setshowMobileMenu(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="hover:text-green-600"
          >
            Home
          </Link>

          <Link
            onClick={() => setshowMobileMenu(false)}
            to="/about"
            className="hover:text-green-600"
          >
            Who are we
          </Link>
          <Link
            onClick={() => setshowMobileMenu(false)}
            to="/Services"
            className="hover:text-green-600"
          >
            Products & Services
          </Link>
          <Link
            onClick={() => setshowMobileMenu(false)}
            to="/projects"
            className="hover:text-green-600"
          >
            Projects
          </Link>
          <Link
            onClick={() => setshowMobileMenu(false)}
            to="/Testimonials"
            className="hover:text-green-600"
          >
            Happy Faces
          </Link>
          <Link
            onClick={() => setshowMobileMenu(false)}
            to="/Careers"
            className="hover:text-green-600"
          >
            Careers
          </Link>
        </ul>

        <div className="flex items-center justify-center mt-8 gap-4">
          <Link onClick={() => setshowMobileMenu(false)} to="/Consultation">
            <button className="bg-green-600 px-5 py-2 rounded-full text-white font-semibold text-sm hover:bg-green-600 transition">
              Book a Free Consultation
            </button>
          </Link>

          <Link onClick={() => setshowMobileMenu(false)} to="/SolarCalculator">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center w-10 h-10 bg-green-600 text-white rounded-full shadow-md hover:bg-green-600 transition"
            >
              <FaCalculator size={18} />
            </motion.div>
          </Link>
        </div>

        {/* Mobile Contact Info */}
        <div className="flex flex-col items-center gap-2 mt-8 text-sm text-gray-600">
          <a href="tel:+919761831225" className="hover:text-green-600">
            +91 9761831225
          </a>
          <a href="mailto:solarxsys@gmail.com" className="hover:text-green-600">
            solarxsys@gmail.com
          </a>
          <div className="flex gap-4 mt-2">
            <a
              href="https://www.instagram.com/solarxsystechsolution?igsh=ZjQ1c3ZhazhkcXJv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61587083852905"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              <FaFacebookF size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
