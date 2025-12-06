"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ReservationForm from "@/components/ReservationForm";

export default function ReservationsPage() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      
      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2000&auto=format&fit=crop"
            alt="Reservations Hero"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6"
          >
            Make a <span className="italic font-light">Reservation</span>
          </motion.h1>
          <p className="text-gray-300 font-light tracking-widest uppercase text-sm md:text-base max-w-2xl mx-auto">
            Secure your spot at VanaBella's culinary sanctuary
          </p>
        </div>
      </section>

      {/* RESERVATION FORM */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <ReservationForm />
        </div>
      </section>

      {/* INFO SECTION */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8"
            >
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-serif">⏰</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Opening Hours</h3>
              <p className="text-gray-600 text-sm">
                Monday - Sunday<br />
                9:00 AM - 11:00 PM<br />
                <span className="text-xs">(Kitchen closes at 10:30 PM)</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8"
            >
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-serif">📍</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Location</h3>
              <p className="text-gray-600 text-sm">
                Cafe VanaBella<br />
                Raipur, Chhattisgarh<br />
                India
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8"
            >
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-serif">📞</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Contact Us</h3>
              <p className="text-gray-600 text-sm">
                Instagram: @cafevanabella<br />
                Email: hello@cafevanabella.com<br />
                <span className="text-xs">For immediate assistance</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
