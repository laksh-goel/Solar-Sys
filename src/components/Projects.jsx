
import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimationFrame,
  AnimatePresence,
} from "framer-motion";

import project_1 from "../assets/project_1.jpeg";
import project_2 from "../assets/project_2.jpeg";
import project_3 from "../assets/project_3.jpeg";
import project_4 from "../assets/project_4.jpeg";
import project_5 from "../assets/project_5.jpeg";
import project_6 from "../assets/project_6.jpeg";
import project_7 from "../assets/project_7.jpg";
import project_8 from "../assets/project_8.jpg";
import project_9 from "../assets/project_9.jpg";
import project_10 from "../assets/project_10.jpg";

export default function ProjectStatus() {
  const images = [
    project_1,
    project_2,
    project_3,
    project_4,
    project_5,
    project_6,
    project_7,
    project_8,
    project_9,
    project_10,
  ];

  const duplicated = [...images, ...images];

  const x = useMotionValue(0);
  const containerRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [hasDragged, setHasDragged] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const imageWidth = 288;
  const gap = 24;
  const totalWidth = images.length * (imageWidth + gap);

  useAnimationFrame((_, delta) => {
    if (!isDragging) {
      let current = x.get() - delta * 0.08;
      if (current <= -totalWidth) {
        current = 0;
      }
      x.set(current);
    }
  });

  return (
    <div className="flex flex-col items-center pt-10 w-full overflow-hidden">

      {/* ---------- HEADING + FULL DESCRIPTION ---------- */}
      <h1 className="text-2xl sm:text-4xl font-bold mb-6">
        Our <span className="underline decoration-2 font-light">Projects</span>
      </h1>

      <div className="max-w-4xl mx-auto text-center px-6 mb-16">
        <div className="text-lg leading-relaxed text-gray-700 space-y-6">

          <p>
            We successfully completed a{" "}
            <span className="font-semibold text-green-500">
              300 kW industrial solar power project
            </span>{" "}
            installed on a tin shed, delivering a reliable and efficient renewable
            energy solution tailored to industrial requirements. The project was
            carefully designed and executed using a{" "}
            <span className="font-semibold text-green-500">
              mono short rail mounting structure
            </span>
            , ensuring strong structural stability while minimizing material usage
            and installation time.
          </p>

          <p>
            High-efficiency{" "}
            <span className="font-semibold text-green-500">
              monocrystalline solar modules
            </span>{" "}
            were deployed to maximize energy generation within the available rooftop
            area. To enhance system performance and safety,{" "}
            <span className="font-semibold text-green-500">
              power optimizers
            </span>{" "}
            were integrated at the module level. These optimizers enable maximum
            power output from each panel, even under conditions such as partial
            shading, dust accumulation, or module mismatch, while also providing
            real-time performance monitoring.
          </p>

          <p>
            The system is powered by a{" "}
            <span className="font-semibold text-green-500">
              SolarEdge inverter
            </span>
            , selected for its advanced efficiency, reliability, and smart energy
            management capabilities. This inverter ensures optimal conversion of DC
            to AC power, improves overall system yield, and supports long-term
            operational stability.
          </p>

          <p>
            The project was completed on schedule and in compliance with all
            applicable safety and quality standards. Upon commissioning, the system
            demonstrated excellent performance, contributing significantly to
            reduced electricity costs and a lower{" "}
            <span className="font-semibold text-green-500">
              carbon footprint
            </span>{" "}
            for the facility. This installation reflects our commitment to
            delivering high-quality, sustainable solar energy solutions for
            industrial applications.
          </p>

        </div>
      </div>

      {/* ---------- GREEN SECTION ---------- */}
      <div className="w-full bg-green-100 pt-16 pb-20 flex flex-col items-center">

        <div className="w-full overflow-hidden mb-12">
          <motion.div
            ref={containerRef}
            className="flex gap-6 cursor-grab active:cursor-grabbing"
            style={{ x }}
            drag="x"
            dragElastic={0}
            dragMomentum={true}
            onDragStart={() => {
              setIsDragging(true);
              setHasDragged(false);
            }}
            onDrag={() => setHasDragged(true)}
            onDragEnd={() => {
              setIsDragging(false);
              setTimeout(() => setHasDragged(false), 50);
            }}
          >
            {duplicated.map((src, index) => (
              <img
                key={index}
                src={src}
                draggable={false}
                onClick={() => {
                  if (!hasDragged) {
                    setSelectedImage(src);
                  }
                }}
                className="w-72 h-48 rounded-3xl shadow-xl object-cover flex-shrink-0 cursor-pointer"
              />
            ))}
          </motion.div>
        </div>

        {/* Status Tabs */}
        <div className="w-full max-w-xl bg-white p-4 rounded-2xl shadow-lg text-center text-lg text-green-600 flex justify-between">
          <span className="flex-1 border-r border-gray-300">Running</span>
          <span className="flex-1 border-r border-gray-300">Completed</span>
          <span className="flex-1">Upcoming</span>
        </div>

      </div>

      {/* ---------- MODAL ---------- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              initial={{ scale: 0.6 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.6 }}
              transition={{ duration: 0.3 }}
              className="max-h-[85vh] rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
