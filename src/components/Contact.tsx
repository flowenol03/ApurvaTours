import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <section id="contact" className="py-20 bg-gradient-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600">
            Get in touch with us for any queries or bookings
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-lg p-8 hover-lift animate-slide-in-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                  focus:ring-blue-500 focus:border-transparent transition-all duration-300
                  hover:border-blue-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                  focus:ring-blue-500 focus:border-transparent transition-all duration-300
                  hover:border-blue-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                  focus:ring-blue-500 focus:border-transparent transition-all duration-300
                  hover:border-blue-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                  focus:ring-blue-500 focus:border-transparent transition-all duration-300
                  hover:border-blue-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-blue text-white py-3 rounded-lg transform 
                transition-all duration-300 hover:scale-105 hover:shadow-xl hover:rotate-1"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8 animate-slide-in-right">
            <div className="flex items-start space-x-4 hover-lift p-4 bg-white rounded-lg shadow-md">
              <Phone className="h-6 w-6 text-blue-600 mt-1 animate-float" />
              <div>
                <h3 className="text-lg font-semibold mb-1">Phone</h3>
                <p className="text-gray-600">+1 234 567 890</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 hover-lift p-4 bg-white rounded-lg shadow-md">
              <Mail className="h-6 w-6 text-blue-600 mt-1 animate-float" />
              <div>
                <h3 className="text-lg font-semibold mb-1">Email</h3>
                <p className="text-gray-600">info@apurvatours.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 hover-lift p-4 bg-white rounded-lg shadow-md">
              <MapPin className="h-6 w-6 text-blue-600 mt-1 animate-float" />
              <div>
                <h3 className="text-lg font-semibold mb-1">Address</h3>
                <p className="text-gray-600">
                  123 Business District, City Name, Country
                </p>
              </div>
            </div>
            <div className="h-64 bg-gray-200 rounded-lg hover-lift overflow-hidden">
              {/* Add Google Maps iframe here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;