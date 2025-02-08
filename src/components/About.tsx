import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, ThumbsUp } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Shield className="h-10 w-10" />,
      title: 'Safety First',
      description: 'Your safety is our top priority with well-maintained vehicles and professional drivers.'
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: 'Punctual Service',
      description: 'We understand the value of time and ensure timely pickups and drops.'
    },
    {
      icon: <ThumbsUp className="h-10 w-10" />,
      title: 'Customer Satisfaction',
      description: 'Our commitment to excellence has earned us countless happy customers.'
    }
  ];

  return (
    <motion.section
      id="about"
      className="py-20 bg-gradient-to-b from-blue-100 to-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                   text-transparent bg-clip-text animate-pulse">
              Apurva Tour & Travels
            </span>
          </h2>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We are dedicated to providing exceptional travel services with a focus on comfort,
            safety, and reliability. Our team of experienced professionals ensures that every
            journey with us is memorable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 
              transform hover:-translate-y-2 relative overflow-hidden border border-gray-200"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-blue-600 mb-4 flex items-center justify-center bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto"
                whileHover={{ scale: 1.1 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About;
