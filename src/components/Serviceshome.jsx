import React, { useEffect, useState } from "react";
import { assets, servicesData } from "../assets/assets";
import { use } from "react";

const Serviceshome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(()=>{
    const updateCardsToShow = ()=>{
      if(window.innerWidth>=1024){
        setCardsToShow(servicesData.length);
      }else{
        setCardsToShow(1);
      }
    };
    updateCardsToShow();

      window.addEventListener('resize' , updateCardsToShow);
      return ()=> window.removeEventListener('resize', updateCardsToShow);
    
  },[])

  const nextService = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % servicesData.length);
  };
  const prevService = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? servicesData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Services"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Services{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Offered
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Empowering You with Seamless Solutions-Explore our sevices
      </p>

      {/*slider buttons*/}

      <div className="flex justify-end items-center mb-8">
        <button
          onClick={prevService}
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Previous Service"
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button
          onClick={nextService}
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Next Service"
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* project slider container*/}
      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
          }}
        >
          {servicesData.map((service, index) => (
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-auto mb-14"
              />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {service.title}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Serviceshome;
