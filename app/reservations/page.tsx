"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ReservationForm from "@/components/ReservationForm";
import { Phone, Clock, MapPin } from "lucide-react";

export default function ReservationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-black">
      
      {/* HERO */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2000&auto=format&fit=crop"
            alt="Reservations Hero"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-3"
          >
            Reserve a Table
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 font-light text-base md:text-lg"
          >
            Book your table for an unforgettable dining experience
          </motion.p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* LEFT SIDE - RESERVATION FORM */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
              >
                <ReservationForm />
              </motion.div>
            </div>

            {/* RIGHT SIDE - CONTACT INFO */}
            <div className="space-y-6">
              {/* Quick Contact Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <h3 className="text-2xl font-serif font-bold mb-6 text-gray-800">Quick Contact</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group hover:bg-gray-50 p-3 rounded-lg transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-1">Call us directly</h4>
                      <a href="tel:+916287878753" className="text-lg font-semibold text-gray-800 hover:text-green-600 transition-colors">
                        +91 6287878753
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group hover:bg-gray-50 p-3 rounded-lg transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-1">Alternate number</h4>
                      <a href="tel:+916287878743" className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                        +91 6287878743
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group hover:bg-gray-50 p-3 rounded-lg transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Clock className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-1">Operating Hours</h4>
                      <p className="text-lg font-semibold text-gray-800">11:00 AM - 11:30 PM</p>
                      <p className="text-sm text-gray-500">All days</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Immediate Bookings Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-lg p-8 border border-green-200"
              >
                <h3 className="text-xl font-serif font-bold mb-4 text-gray-800">Immediate Bookings</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  For same-day reservations or large groups, please call us directly for instant confirmation.
                </p>
                <a
                  href="tel:+916287878753"
                  className="block w-full bg-gradient-to-r from-green-600 to-green-700 text-white text-center py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105 shadow-md"
                >
                  Call Now for Instant Booking
                </a>
              </motion.div>

              {/* Location Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-2">Location</h4>
                    <p className="text-gray-800 text-sm leading-relaxed">
                      Cafe VanaBella<br />
                      Pimple Nilakh, Pune<br />
                      Near Srimal Hospital<br />
                      Maharashtra, India
                    </p>
                    <a
                      href="https://share.google/Z6MbYj1OUniJcWkpS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-red-600 font-semibold text-sm hover:underline"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Rating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl shadow-lg p-6 text-center border border-yellow-200"
              >
                <div className="text-4xl mb-2">⭐</div>
                <div className="text-3xl font-bold text-gray-800 mb-1">4.8/5</div>
                <div className="text-sm text-gray-600">55 Verified Reviews</div>
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
                  <span>🌿 200+ Plants</span>
                  <span>•</span>
                  <span>🐾 Pet-Friendly</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
