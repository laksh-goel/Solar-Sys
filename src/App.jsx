import React from "react";
import Header from "./components/Header";
import AboutHome from "./components/AboutHome";
import Serviceshome from "./components/Serviceshome";
import Testimonials from "./components/Testimonials";
import Contact from './components/Contact';
import {ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer/>
      <Header />
      <AboutHome/>
      <Serviceshome/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>

  );
};

export default App;
