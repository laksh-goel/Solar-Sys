// import React from 'react';


// const Whychooseus = () => {
//   const steps = [
//     "Free consultation visit",
//     "Assigning Personal Manager",
//     "Site Survey",
//     "3D designing",
//     "Paper work",
//     "Installation",
//     "Subsidy Application",
//     "Net metering",
//     "Connecting to grid",
//     "Powered home with solar generation",
//     "Operation and maintenance"
//   ];

//   return (
//     <section className="bg-green-50 py-12">
//       <div className="container mx-auto px-6 text-center">
//         <h1 className="text-3xl sm:text-5xl font-bold text-green-600 mb-4">
//           Your Solar, Our Duty
//         </h1>
//         <p className="text-lg sm:text-2xl text-gray-700 mb-10">
//           Making your Solar journey smooth and worry-free with:
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {steps.map((step, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
//             >
//               <div className="w-12 h-12 mx-auto mb-4 bg-green-500 text-white flex items-center justify-center rounded-full text-xl font-bold">
//                 {index + 1}
//               </div>
//               <p className="text-gray-800 font-medium">{step}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Whychooseus;

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  'Free consultation visit',
  'Assigning Personal Manager',
  'Site Survey',
  '3D designing',
  'Paper work',
  'Installation',
  'Subsidy Application',
  'Net metering',
  'Connecting to grid',
  'Powered home with solar generation',
  'Operation and maintenance'
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Whychooseus() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-green-600 mb-4">Your Solar, Our Duty</h1>
      <h2 className="text-xl text-gray-700 mb-8 text-center">
        Making your Solar journey smooth and worry-free with:
      </h2>
      <motion.ul
        className="space-y-4 max-w-md w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {steps.map((step, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            className="bg-white p-4 rounded-2xl shadow-md text-gray-800 text-center text-lg"
          >
            {step}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
