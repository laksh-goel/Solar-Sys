import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutHome from "./components/AboutHome";
import Serviceshome from "./components/Serviceshome";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Careers from "./components/Careers";
import Projects from "./components/Projects";
import Consultaion from "./components/Consultaion";
import About from "./components/About";
import Whychooseus from "./components/Whychooseus";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutHome" element={<AboutHome />} />
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Services" element={<Serviceshome />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Consultation" element={<Consultaion/>} />
          <Route path="/about" element={<About />} />
          <Route path="/Whychooseus" element={<Whychooseus />} />

         

        </Routes>
       
        <Footer />
      </Router>
      {/* <ToastContainer />
      <Header />
      <AboutHome />
      <Serviceshome />
      <Testimonials />
      <Contact />
      <Footer /> */}
    </div>
  );
};

export default App;
