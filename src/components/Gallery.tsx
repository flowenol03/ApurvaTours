import React from 'react';
import { Car, Calendar, Users, DollarSign } from 'lucide-react';

interface CarDetails {
  image: string;
  name: string;
  type: string;
  capacity: string;
  priceRange: string;
  features: string[];
}

const Gallery = () => {
  const cars: CarDetails[] = [
    {
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      name: 'Premium Sedan',
      type: 'Luxury Comfort',
      capacity: '4 Passengers',
      priceRange: '$50-80/day',
      features: ['Air Conditioning', 'Leather Seats', 'Bluetooth Audio', 'GPS Navigation']
    },
    {
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      name: 'Executive SUV',
      type: 'Premium Comfort',
      capacity: '6 Passengers',
      priceRange: '$70-100/day',
      features: ['Climate Control', 'Premium Sound', 'Panoramic Roof', 'Advanced Safety']
    },
    {
      image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      name: 'Luxury Van',
      type: 'Group Travel',
      capacity: '8 Passengers',
      priceRange: '$90-120/day',
      features: ['Extended Space', 'Entertainment System', 'USB Charging', 'Luggage Space']
    },
    {
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      name: 'Business Class',
      type: 'Executive Travel',
      capacity: '4 Passengers',
      priceRange: '$60-90/day',
      features: ['Professional Driver', 'Wi-Fi', 'Refreshments', 'Work Space']
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Premium Fleet
          </h2>
          <p className="text-lg text-gray-600 animate-fade-in-delay">
            Experience luxury and comfort with our carefully curated vehicles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cars.map((car, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl shadow-lg group animate-scale-in 
              hover-lift bg-white [animation-delay:${index * 200}ms]`}
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 object-cover transform transition-all duration-700 
                  group-hover:scale-110 group-hover:rotate-2"
                />
                <div className="absolute inset-0 bg-gradient-blue opacity-0 group-hover:opacity-90 
                transition-all duration-500">
                  <div className="absolute inset-0 flex flex-col justify-center items-center p-6 
                  text-white opacity-0 group-hover:opacity-100 transition-all duration-500 
                  transform group-hover:translate-y-0 translate-y-4">
                    <h3 className="text-xl font-bold mb-2">{car.name}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <Car className="w-4 h-4 mr-2" />
                        <span>{car.type}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{car.capacity}</span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-2" />
                        <span>{car.priceRange}</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/30 w-full">
                      <ul className="text-sm space-y-1">
                        {car.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-white rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-900">{car.name}</h3>
                <p className="text-sm text-gray-600">{car.type}</p>
                <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg 
                transform transition-all duration-300 hover:bg-blue-700 hover:scale-105 
                hover:shadow-lg animate-pulse-blue">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;