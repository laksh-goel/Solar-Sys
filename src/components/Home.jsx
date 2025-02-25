import React from "react";
import Serviceshome from "./Serviceshome";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import AboutHome from "./AboutHome";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import Header from "./Header";
import Careers from "./Careers";
import Projects from "./Projects";

import WhychooseusHome from "./WhychooseusHome";

function Home() {
  return (
    <div className="Home">
      <ToastContainer />
      <Header />
      <AboutHome />
      <Serviceshome />
      <WhychooseusHome />
      <Testimonials />
      <Contact />
      <Projects />
      <Careers />
    </div>
  );
}

export default Home;
