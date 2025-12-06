"use client";

import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/1234567890" // Replace with actual number
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-[#25D366]/50 transition-shadow cursor-pointer"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={28} fill="white" />
      </motion.a>

      {/* Phone Button */}
      <motion.a
        href="tel:+1234567890" // Replace with actual number
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        className="w-14 h-14 bg-black rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-black/50 transition-shadow cursor-pointer"
        title="Call Us"
      >
        <Phone size={24} />
      </motion.a>
    </div>
  );
}
