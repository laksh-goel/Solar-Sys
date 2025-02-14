import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BoltIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/solid";

export default function AboutUs() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="relative">
      {/* About Us Section */}
      <section className="p-8 max-w-4xl mx-auto">
        {/* <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">Who Are We</h2> */}
        <h1 className="text-3xl font-bold text-center text-black-600 mb-4">
          Bringing the{" "}
          <span className=" underline-offset-4 decoration-1 under  text-green-500 font-bold">
            Power of the Sun{" "}
          </span>
          to Your Home & Business!{" "}
        </h1>

        <p className="text-gray-700 text-lg text-center">
          We are a new age Bharat’s leading solar product and service provider.
          We are passionate about powering a sustainable future through clean,
          renewable energy. Founded with a mission to make solar energy
          accessible to everyone, we specialize in providing high-quality solar
          panel systems designed to reduce energy costs and environmental
          impact. With years of industry experience, our team is committed to
          delivering innovative solutions that meet the unique needs of each
          customer.
        </p>

        {/* Vision */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-black-600">
            Our Vision is <span className="text-green-500">SOLAR</span>
          </h3>
          <p className="text-gray-700 mt-2">
            We envision a future where innovation, efficiency, and environmental
            responsibility go hand in hand. We aim to deliver our 5 “SOLAR”
            promises at your doorstep:
          </p>
        </div>

        {/* SOLAR Promises */}
        <div className="grid grid-cols-3 gap-6 mt-6 justify-center items-center max-w-lg mx-auto">
          {/* First row (3 Icons) */}
          <div className="p-4 bg-gray-100 rounded-lg flex flex-col items-center">
            <BoltIcon className="w-10 h-10 text-green-500" />
            <p className="font-semibold mt-2">
              <span className="font-bold text-green-500">S</span>avings
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg flex flex-col items-center">
            <WrenchScrewdriverIcon className="w-10 h-10 text-green-500" />
            <p className="font-semibold mt-2">
              <span className="font-bold text-green-500">O</span>ptimization
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg flex flex-col items-center">
            <ShieldCheckIcon className="w-10 h-10 text-green-500" />
            <p className="font-semibold mt-2">
              <span className="font-bold text-green-500">L</span>ongevity
            </p>
          </div>

          {/* Second row (2 Icons, centered) */}

          <div className=" grid grid-cols-2 gap-6 col-span-3">
            <div className="p-4 bg-gray-100 rounded-lg flex flex-col items-center">
              <GlobeAltIcon className="w-10 h-10 text-green-500" />
              <p className="font-semibold mt-2">
                <span className="font-bold text-green-500">A</span>ccessibility
              </p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg flex flex-col items-center">
              <CheckBadgeIcon className="w-10 h-10 text-green-500" />
              <p className="font-semibold mt-2">
                <span className="font-bold text-green-500">R</span>eliability
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-2">
            We believe in the transformative power of solar energy to not only
            cut down on your high utility bills but also to play a pivotal role
            in protecting our planet for the generations to come. We employ
            cutting-edge technology to ensure that you get the best optimal
            outputs.
          </p>
          <p className="text-gray-700 mb-4">
            Our dedicated team of experts guides you every step of the way, from
            initial consultation to post-installation support, ensuring a smooth
            and hassle-free experience.
          </p>
          <Link
            to="/consultation"
            className="mt-6 inline-block bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold mb-3"
          >
            Book a Free Consultation
          </Link>

          <h1 className="text-xl font-extrabold text-center text-black tracking-wide leading-relaxed ml-[-15px]">
            & Let's <span className="text-green-500">together</span> make the
            difference
          </h1>
        </div>
      </section>
    </div>
  );
}
