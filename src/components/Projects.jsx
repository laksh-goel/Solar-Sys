import React, { useEffect, useState } from "react";
import project_1 from "../assets/project_1.jpg";
import project_2 from "../assets/project_2.jpg";
import project_3 from "../assets/project_3.jpg";
import project_4 from "../assets/project_4.jpg";
import { motion } from "framer-motion";

export default function ProjectStatus() {
  const images = [project_1, project_2, project_3, project_4];
  const [animationSpeed, setAnimationSpeed] = useState(10);

  const handleMouseMove = (event) => {
    const newSpeed = Math.max(4, 14 - (event.clientX / window.innerWidth) * 10);
    setAnimationSpeed(newSpeed);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center px-8 py-12 bg-green-100 w-full min-h-[80vh]">
      <h1 className="text-2xl sm:text-4xl font-bold mb-4">
        Our <span className="underline decoration-2 font-light">Projects</span>
      </h1>

      <div className="w-full overflow-hidden flex items-center justify-center p-6 relative">
        <motion.div
          className="flex space-x-4"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, duration: animationSpeed, ease: "linear" }}
          style={{ width: images.length * 280 }}
        >
          {[...images, ...images].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-72 h-48 rounded-2xl shadow-lg object-cover flex-shrink-0"
            />
          ))}
        </motion.div>
      </div>

      <div className="w-full max-w-xl bg-white p-4 rounded-2xl shadow-lg text-center text-lg text-green-600 flex justify-between mt-6">
        <span className="flex-1 border-r border-gray-300">Running</span>
        <span className="flex-1 border-r border-gray-300">Completed</span>
        <span className="flex-1">Upcoming</span>
      </div>
    </div>
  );
}
