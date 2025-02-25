import React, { useState } from "react";
import { motion } from "framer-motion";

const SolarCalculator = () => {
  const [location, setLocation] = useState({ lat: "", lon: "" });
  const [manualLocation, setManualLocation] = useState("");
  const [bill, setBill] = useState("");
  const [category, setCategory] = useState("RESIDENTIAL");
  const [solarSize, setSolarSize] = useState(null);
  const [newBill, setNewBill] = useState(null);
  const [co2Savings, setCo2Savings] = useState(null);
  const [areaRequired, setAreaRequired] = useState(null);
  const [roi, setROI] = useState(null);
  const [treesSaved, setTreesSaved] = useState(null);
  const [carsOffRoad, setCarsOffRoad] = useState(null);


  // 📍 Detect Location
  const detectLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude.toFixed(4),
          lon: position.coords.longitude.toFixed(4),
        });
        setManualLocation(`Lat: ${position.coords.latitude.toFixed(4)}, Lon: ${position.coords.longitude.toFixed(4)}`);
      },
      () => alert("Location access denied. Enter manually."),
    );
  };

  // **🔢 Calculation Logic**
  const calculateSolar = () => {
    if (!bill || isNaN(bill) || bill <= 0) {
      alert("Please enter a valid electricity bill amount.");
      return;
    }

    // 📊 **Category-Based Factors**
    const categoryData = {
      RESIDENTIAL: { solarMultiplier: 0.75, savingsFactor: 0.8 },
      COMMERCIAL: { solarMultiplier: 1.2, savingsFactor: 0.85 },
      INDUSTRIAL: { solarMultiplier: 2.0, savingsFactor: 0.9 },
    };

    const { solarMultiplier, savingsFactor } = categoryData[category];

    const avgSolarProduction = 4; // kWh per kW per day
    const monthlyConsumption = bill / 8; // Convert bill ₹ to kWh (₹8/unit avg)
    const recommendedSize = (monthlyConsumption / (avgSolarProduction * 30)) * solarMultiplier;

    const requiredArea = recommendedSize * 100; // Assume 100 sqft per kW
    const newMonthlyBill = bill * (1 - savingsFactor);
    const co2Reduction = recommendedSize * 1.2 * 365; // kg CO2 per year
    const investmentReturn = ((bill - newMonthlyBill) * 12 * 100) / (bill * 12); // Annual ROI
    const trees = Math.round(co2Reduction / 20);
    const cars = Math.round(co2Reduction / 4000);

    // **Set Results**
    setSolarSize(recommendedSize.toFixed(1));
    setAreaRequired(requiredArea.toFixed(0));
    setNewBill(newMonthlyBill.toFixed(0));
    setCo2Savings(co2Reduction.toFixed(0));
    setROI(investmentReturn.toFixed(1));
    setTreesSaved(trees);
    setCarsOffRoad(cars);
  };

  return (
    <div className="w-full">
      {/* 🌞 Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center flex flex-col items-center justify-center text-center text-white overflow:hidden"
        style={{ backgroundImage: "url('/solar_calculator.jpg')" }}
        id="calculator">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6 "
        >
          <h1 className="text-4xl sm:text-5xl md:text-[55px] font-bold">Solar Calculator</h1>
          <p className="text-lg md:text-2xl mt-3">Calculate Your Solar Savings Instantly</p>
          <button
            onClick={() => document.getElementById("solar-form").scrollIntoView({ behavior: "smooth" })}
            className="mt-6 px-6 py-3 bg-green-500 text-white font-bold text-lg rounded-lg hover:bg-green-600 transition"
          >
            Get Started
          </button>
        </motion.div>
      </div>

      {/* 🏡 Solar Calculator Form */}
      <div className="bg-gray-100 py-16 px-6 flex justify-center" id="solar-form">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
          <h2 className="text-2xl font-bold text-center text-green-600 mb-6">Solar Calculator</h2>

          {/* 📍 Location Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium">📍 Location</label>
            <div className="flex space-x-2">
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Enter location manually"
                value={manualLocation}
                onChange={(e) => setManualLocation(e.target.value)}
              />
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition" onClick={detectLocation}>
                Detect
              </button>
            </div>
          </div>

          {/* 💡 Electricity Bill Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium">💡 Monthly Electricity Bill (₹)</label>
            <input
              type="number"
              className="w-full p-2 border rounded mt-1"
              placeholder="Enter your bill amount"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
            />
          </div>

          {/* 🏠 Consumer Category */}
          <div className="mb-4">
            <label className="block text-sm font-medium">🏠 Consumer Category</label>
            <select className="w-full p-2 border rounded mt-1" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="RESIDENTIAL">Residential</option>
              <option value="COMMERCIAL">Commercial</option>
              <option value="INDUSTRIAL">Industrial</option>
            </select>
          </div>

          {/* 🔘 Calculate Button */}
          <button className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600 transition" onClick={calculateSolar}>
            Calculate Savings
          </button>

          {/* 📊 Results Section */}
          {solarSize && (
            <div className="mt-6 p-6 bg-gray-200 rounded-lg text-center">
              <h3 className="text-xl font-bold text-green-600">Recommended Solar System</h3>
              <p className="text-3xl font-bold">{solarSize} kW</p>
              <p>🏠 Area Required: {areaRequired} sqft</p>
              <p>💡 Monthly Bill Before: ₹{bill}</p>
              <p>💰 Monthly Bill After: ₹{newBill}</p>
              <p>🚀 Savings: <b>{(100 - ((newBill / bill) * 100)).toFixed(0)}%</b> from Day 1</p>
              <p>🌍 Trees Saved: {treesSaved}</p>
              <p>🚗 Cars Off Road: {carsOffRoad}</p>
              <p>📈 ROI: {roi}% p.a.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SolarCalculator;
