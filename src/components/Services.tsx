import React from 'react';
import { Building2, Car, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Building2 className="h-12 w-12" />,
      title: 'IT Company Travel',
      description: 'Daily home-to-work & work-to-home pickups and drop-offs for IT professionals.',
      features: ['Fixed Schedule', 'Monthly Packages', 'Corporate Accounts']
    },
    {
      icon: <Car className="h-12 w-12" />,
      title: 'Personal Travel',
      description: 'Customized travel services for your personal and leisure needs.',
      features: ['24/7 Availability', 'Custom Routes', 'Flexible Booking']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-blue-600 italic animate-float">
            "We Love to Pick and Drop You!"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-xl shadow-lg hover-lift hover-glow
              ${index === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}
            >
              <div className="text-blue-600 mb-6 animate-float">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-center text-gray-700 transform hover:translate-x-2 transition-transform duration-300"
                  >
                    <Users className="h-5 w-5 mr-2 text-blue-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;