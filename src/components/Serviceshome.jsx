import React, { useEffect, useState } from "react";
import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.jpg";
import service5 from "../assets/service5.jpg";
import service6 from "../assets/service6.png";
import { use } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function ServicesSection() {
  const services = [
    {
      name: "Rooftop Solar",
      link: "/rooftop-solar",
      image: service1,
    },
    {
      name: "Ongrid Solar",
      link: "/ongrid-solar",
      image: service2,
    },
    {
      name: "Offgrid Solar",
      link: "/offgrid-solar",
      image: service3,
    },
    {
      name: "Hybrid Solar",
      link: "/hybrid-solar",
      image: service4,
    },
    {
      name: "Ground mount",
      link: "/ground-mount",
      image: service5,
    },
    {
      name: "Solar Atta Chakki",
      link: "/solar-atta-chakki",
      image: service6,
    },
    {
      name: "Solar water heater",
      link: "/solar-water-heater",
      image: service3,
    },
    {
      name: "O&M Services",
      link: "/om-services",
      image: service4,
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto text-center px-4 " id="Services">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
          Products{" "}
          <span className="underline underline-offset-4 decoration-1 under font-light">
            & Services
          </span>
        </h1>
        <div className="flex items-center justify-center p-6  ">
          {" "}
          <p className="text-center text-lg leading-relaxed max-w-2xl text-gray-700">
            Our services range from{" "}
            <span className="font-semibold text-green-500">
              solar panel installation{" "}
            </span>{" "}
            and maintenance to{" "}
            <span className="font-semibold text-green-500">
              energy storage solutions{" "}
            </span>{" "}
            and custom solar system design. Whether you’re a homeowner looking
            to reduce your carbon footprint or a business seeking to lower
            energy expenses, we’re here to help.{" "}
          </p>{" "}
        </div>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="rounded-lg shadow-lg"
        >
          {services.map((service) => (
            <SwiperSlide key={service.name}>
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.name}
                  className="h-64 w-full object-cover rounded-lg"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                >
                  <Link
                    to={service.link}
                    className="text-white text-xl font-semibold bg-green-500 px-6 py-3 rounded-lg hover:bg-green-600 transition"
                  >
                    {service.name}
                  </Link>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
