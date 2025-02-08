import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Speciality from './components/Speciality';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';
import { BookOpen } from 'lucide-react';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Speciality />
      <Gallery />
      <Contact />
      <Footer />

      {/* Fixed Booking Button */}
      <button
        onClick={() => setIsBookingOpen(true)}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg 
        hover:bg-blue-700 transform hover:scale-110 transition-all duration-300 z-40"
      >
        <BookOpen className="h-6 w-6" />
      </button>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}

export default App;