import React,{ useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  UserCheck,
  MapPin,
  Box,
  FileText,
  Wrench,
  Banknote,
  Bolt,
  PlugZap,
  Home,
  Settings,
} from "lucide-react";

const steps = [
  {
    name: "Free consultation visit",
    description:
      "A consultant will visit your home, answer your questions, and generate a digital design.",
    icon: <UserCheck size={20} />,
  },
  {
    name: "Assigning Personal Manager",
    description: "A dedicated manager is assigned to assist you.",
    icon: <UserCheck size={20} />,
  },
  {
    name: "Site Survey",
    description: "Surveying your site to assess feasibility and best setup.",
    icon: <MapPin size={20} />,
  },
  {
    name: "3D designing",
    description: "Creating a 3D model of your solar installation.",
    icon: <Box size={20} />,
  },
  {
    name: "Paper work",
    description: "End-to-end paperwork management and approvals.",
    icon: <FileText size={20} />,
  },
  {
    name: "Installation",
    description: "Professional and safe installation of solar panels.",
    icon: <Wrench size={20} />,
  },
  {
    name: "Subsidy Application",
    description: "Assisting with government subsidy applications.",
    icon: <Banknote size={20} />,
  },
  {
    name: "Net metering",
    description: "Setting up net metering for energy tracking.",
    icon: <Bolt size={20} />,
  },
  {
    name: "Connecting to grid",
    description: "Connecting your system to the main power grid.",
    icon: <PlugZap size={20} />,
  },
  {
    name: "Powered home with solar generation",
    description: "Your home starts generating clean solar energy.",
    icon: <Home size={20} />,
  },
  {
    name: "Operation and maintenance",
    description: "Ongoing support and maintenance services.",
    icon: <Settings size={20} />,
  },
];

export default function Whychooseus() {
  return (
    <div className="flex justify-center p-6 min-h-screen text-white bg-gray-100">
      <div className="max-w-3xl w-full">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
          {" "}
          Your Solar, Our Duty
        </h2>
        <p className="text-lg text-center mb-8 text-gray-700">
          {" "}
          Making your Solar journey smooth and worry free with
        </p>

        <div className="relative border-l-4 border-green-500 pl-6 space-y-8 bg-blue-900 p-6 rounded-lg">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-start space-x-4"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="absolute left-[-42px] top-2 w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-blue-900">
                  {step.icon}
                </div>
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {step.name}
                </h3>
                <p className="text-sm text-gray-300">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
