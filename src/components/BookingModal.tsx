import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [bookingType, setBookingType] = useState<"it" | "personal">("it");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl max-w-md w-full p-8 border border-gray-200"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
              whileHover={{ rotate: 90, scale: 1.2 }}
            >
              <X className="h-6 w-6" />
            </motion.button>

            {showConfirmation ? (
              <motion.div
                className="text-center py-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-green-600 mb-4 animate-pulse">
                  🚗 Your ride is booked!
                </h3>
                <p className="text-gray-700">
                  Sit back, relax, and let us take care of your journey. See you soon!
                </p>
              </motion.div>
            ) : (
              <>
                <motion.h2
                  className="text-2xl font-bold text-gray-800 mb-6 text-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  🚀 Book Your Ride
                </motion.h2>

                <div className="flex space-x-4 mb-6">
                  {["it", "personal"].map((type) => (
                    <motion.button
                      key={type}
                      className={`flex-1 py-2 rounded-lg font-semibold transition-all duration-300 ${
                        bookingType === type
                          ? "bg-blue-600 text-white shadow-lg scale-105"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                      onClick={() => setBookingType(type as "it" | "personal")}
                      whileTap={{ scale: 0.95 }}
                    >
                      {type === "it" ? "IT Travel" : "Personal Travel"}
                    </motion.button>
                  ))}
                </div>

                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {["Name", "Phone", "Pickup Location", "Drop Location"].map(
                    (placeholder, index) => (
                      <motion.input
                        key={index}
                        type={placeholder === "Phone" ? "tel" : "text"}
                        placeholder={placeholder}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                        required
                        whileFocus={{ scale: 1.05 }}
                      />
                    )
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    <motion.input
                      type="date"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                      required
                      whileFocus={{ scale: 1.05 }}
                    />
                    <motion.input
                      type="time"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                      required
                      whileFocus={{ scale: 1.05 }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300 animate-pulse"
                    whileHover={{ scale: 1.05 }}
                  >
                    ✅ Confirm Booking
                  </motion.button>
                </motion.form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
