import React from "react";
import { motion } from "framer-motion";
import { Clock, UserCheck, Car, PhoneCall } from "lucide-react";

const Speciality = () => {
  const specialities = [
    {
      icon: <Clock className="h-10 w-10" />,
      title: "24/7 Availability",
      description: "Round-the-clock service to meet your travel needs anytime.",
    },
    {
      icon: <UserCheck className="h-10 w-10" />,
      title: "Professional Drivers",
      description:
        "Experienced, courteous, and well-trained drivers at your service.",
    },
    {
      icon: <Car className="h-10 w-10" />,
      title: "Well-Maintained Cars",
      description: "Regular maintenance and cleaning of our premium vehicle fleet.",
    },
    {
      icon: <PhoneCall className="h-10 w-10" />,
      title: "Easy Booking",
      description: "Simple and quick booking process through call or online.",
    },
  ];

  return (
    <motion.section
      id="speciality"
      className="py-20 bg-blue-50"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Experience the difference with our premium services
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialities.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl 
              transform transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                className="text-blue-600 mb-4"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Speciality;
