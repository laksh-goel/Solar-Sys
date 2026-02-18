import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const AboutHome = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container my-14 mx-auto p-8 md:px-20 lg:px-32 w-full overflow:hidden "
      id="AboutHome"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 ">
        Who{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          are We{" "}
        </span>
      </h1>
  
      <div className="flex items-center justify-center p-6 ">
      <p className="text-center text-lg leading-relaxed max-w-3xl text-gray-700">
        We are a <span className="font-semibold text-green-500">new age Bharat’s</span> leading solar product and service provider. 
        We are passionate about powering a sustainable future
        through clean, renewable energy. Founded with a 
        mission to make solar energy accessible to everyone.
        we specialize in providing high-quality solar panel systems
        designed to <span className="font-semibold text-green-500">reduce energy costs</span> and 
        <span className="font-semibold text-green-500"> environmental impact</span>. 
        With years of industry experience, our team is committed to 
        delivering innovative solutions that meet the 
        <span className="font-semibold text-green-500"> unique needs of each customer</span>.
      </p>
    </div>
      <a href="/about" className="bg-green-500  hover:bg-green-600 text-white px-8 py-2 rounded">
        Learn more
      </a>
    </motion.div>
  );
};

export default AboutHome;
