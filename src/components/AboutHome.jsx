import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow:hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About <span className="underline underline-offset-4 decoration-1 under font-light">
          Our Company </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-10">
        Service You Can Trust, Solutions You Can Rely On.
      </p>
      <div className="flex flex-co md:flex-row items-center md:items-start md:gap-20">
        <img src={assets.About_us} alt="" className="w-8/12 sm:1/2 max-w-1g" />
        <div className="flex flex-col items-center md:items-start mt-2.5 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">7+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">8+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p> MW Solar Capacity Installed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <p className="my-8 max-w-lg">
            We specialize in designing and installing cutting-edge solar energy
            systems tailored to your unique needs.Our team of passionate experts
            is committed to creating a brighter, greener future. From
            consultation to installation and maintenance, we work closely with
            our customers to ensure seamless, high-quality solutions that meet
            the highest industry standards.
          </p>
          <button className="bg-blue-600 text-white px-8 py-2 rounded">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
