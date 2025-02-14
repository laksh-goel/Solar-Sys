import React, { useEffect, useState } from "react";
import project_1 from "../assets/project_1.jpg";
import project_2 from "../assets/project_2.jpg";
import project_3 from "../assets/project_3.jpg";
import project_4 from "../assets/project_4.jpg";
import { use } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectStatus() {
  const projectStatuses = ["Running", "Completed", "Upcoming"];

  const images = [project_1, project_2, project_3, project_4];

  const [animationSpeed, setAnimationSpeed] = useState(8); // Initial speed of animation

  const handleMouseMove = (event) => {
    // Set animation speed based on the horizontal mouse position
    const newSpeed = Math.max(4, 12 - (event.clientX / window.innerWidth) * 8); // Speed between 4 and 12
    setAnimationSpeed(newSpeed);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className=" flex flex-col items-center justify-center p-6 bg-green-100 ">
      <h1 className="text-2xl sm:text-4xl font-bold mb-4 ">
        Our{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
        Projects{" "}
        </span>
      </h1>
      {/* <div className="w-full overflow-hidden flex items-center justify-center p-6 relative">
        <motion.div
          className="flex space-x-4"
          initial={{ x: "0" }}
          animate={{ x: "-50" }}
          transition={{
            repeat: Infinity,
            duration: animationSpeed,
            ease: "linear",
          }}
          style={{ width: `${images.length * 256}px` }} // Adjust width based on number of images
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-64 h-40 rounded-xl shadow-lg object-cover flex-shrink-0"
            />
          ))}
        </motion.div>
      </div> */}
      <div className="w-full overflow-hidden flex items-center justify-center p-6 relative">
  <motion.div
    className="flex space-x-4"
    initial={{ x: 0 }}
    animate={{ x: "-50%" }} // Move only half the width
    transition={{
      repeat: Infinity,
      duration: animationSpeed,
      ease: "linear", // Use "linear" for smooth infinite scrolling
    }}
    style={{ width: images.length * 256  }} // Doubled width for seamless looping
  >
    {[...images, ...images].map((src, index) => ( // Duplicate images
      <img
        key={index}
        src={src}
        alt={`Slide ${index + 1}`}
        className="w-64 h-40 rounded-xl shadow-lg object-cover flex-shrink-0"
      />
    ))}
  </motion.div>
</div>

      <div className="w-full max-w-md bg-white p-4 rounded-2xl shadow-md text-center text-lg text-green-500 flex justify-between">
        <span className="flex-1 border-r border-gray-300">Running</span>
        <span className="flex-1 border-r border-gray-300">Completed</span>
        <span className="flex-1">Upcoming</span>
      </div>
    </div>
  );
}