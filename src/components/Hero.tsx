import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <div id="home" className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform hover:scale-105 transition-transform duration-1000"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80")',
        }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md" />
      </motion.div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4 text-center">
        {/* Title */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          For Your Safe and{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-[200%_auto] text-transparent bg-clip-text animate-gradient">
            Smooth Drive
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl max-w-2xl mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          Experience premium travel services with{" "}
          <span className="text-blue-300 font-semibold">Apurva Tour & Travels</span>.  
          Your comfort and safety are our top priorities.
        </motion.p>

        {/* Button */}
        <motion.a
          href="#services"
          className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-10 py-4 rounded-full shadow-lg text-lg font-semibold transition-all duration-300 transform hover:scale-110"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.5 }}
          whileHover={{ rotate: 2 }}
        >
          Explore Our Services
        </motion.a>

        {/* Chevron Animation */}
        <motion.div
          className="absolute bottom-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          whileHover={{ scale: 1.2 }}
        >
          <ChevronDown className="h-10 w-10 text-blue-300 animate-bounce" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
