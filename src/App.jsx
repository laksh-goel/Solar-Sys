import React from "react";
import Header from "./components/Header";
import AboutHome from "./components/AboutHome";
import Serviceshome from "./components/Serviceshome";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <AboutHome/>
      <Serviceshome/>
      <Testimonials/>
    </div>
  );
};

export default App;
