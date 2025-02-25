import { useState } from "react";
import { motion } from "framer-motion";
import { FaSolarPanel } from "react-icons/fa";

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-gradient-to-r from-blue-600 to-green-500 p-8"
    >
      {/* Left Section */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="md:w-1/2 flex flex-col items-center text-center p-8 space-y-6"
      >
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-5xl font-extrabold text-white drop-shadow-lg"
        >
          Schedule Your Free Consultation
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-lg text-white max-w-md"
        >
          Take the first step towards sustainable energy. Get expert advice on solar panel installation for your home or business.
        </motion.p>
      </motion.div>
      
      {/* Right Section - Form */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="md:w-1/2 w-full max-w-md p-8 shadow-2xl rounded-2xl bg-white relative"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-3 rounded-full"
        >
          <FaSolarPanel size={30} />
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
          className="text-3xl font-bold text-center text-gray-800 mt-6"
        >
          Solar Consultation
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center text-gray-600 mb-6"
        >
          Get a free consultation for solar panel installation.
        </motion.p>
        <form onSubmit={handleSubmit} className="space-y-4">
          {["name", "email", "phone", "address", "message"].map((field, index) => (
            <motion.input 
              key={field}
              name={field}
              type={field === "message" ? "textarea" : field === "email" ? "email" : "text"}
              placeholder={
                field === "name" ? "Full Name" :
                field === "email" ? "Email Address" :
                field === "phone" ? "Phone Number" :
                field === "address" ? "Installation Address" :
                "Additional Message"
              }
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
            />
          ))}
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            <button type="submit" className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-all duration-300 font-semibold shadow-lg">
              Get Consultation
            </button>
          </motion.div>
        </form>
      </motion.div>
    </motion.div>
  );
}
