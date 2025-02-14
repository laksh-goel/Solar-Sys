
import React from 'react';
import { motion } from "framer-motion";
import { services } from '../assets/assets'; 


const WhychooseusHome = () => {
  return (
    <section className=" bg-green-100 py-10 my-10">
      <div className="container mx-auto px-6">
      <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-center p-8">
     Why{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light ">
          Choose us
        </span>
      </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-green-500 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              
            </div>
          ))}
          {/* Centered Button */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center">
    <a
      href="/Whychooseus"
      className="bg-green-500 hover:bg-green-600 transition-colors duration-300 text-white px-6 py-2 rounded"
    >
      Know more
    </a>
  </div>
        </div>
      </div>
    </section>
  );
};

export default WhychooseusHome;
