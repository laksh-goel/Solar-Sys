import React from "react";
import { motion } from "framer-motion";

export default function Metrics() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container my-14 mx-auto p-8 md:px-20 lg:px-32 w-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl text-center">

        {/* Projects Delivered */}
        <div>
          <h2 className="text-5xl sm:text-6xl font-bold text-green-500 mb-2.5">
            705
          </h2>
         <p className="text-1xl sm:text-2xl font-bold ">
        Projects{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Delivered{" "}
        </span>
      </p>
  
        </div>

        {/* Power Delivered */}
        <div>
          <h2 className="text-5xl sm:text-6xl font-bold text-green-500 mb-2.5">
            2MW<span className="text-2xl align-top">*</span>
          </h2>
          <p className="text-1xl sm:text-2xl font-bold ">
        Power{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Delivered{" "}
        </span>
      </p>
        </div>

      </div>
    </motion.div>
  );
}
