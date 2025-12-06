"use client";

import { useState } from "react";
import { Calendar, Clock, Users, User, Mail, Phone, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "casual",
    specialRequests: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          guests: "2",
          occasion: "casual",
          specialRequests: "",
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="bg-white text-black">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="py-24 px-8 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
            </motion.div>
            <h3 className="text-3xl font-serif font-bold mb-4">Reservation Confirmed!</h3>
            <p className="text-gray-600 max-w-md mx-auto mb-2">
              Thank you for choosing VanaBella. We've received your reservation request.
            </p>
            <p className="text-sm text-gray-500">
              You'll receive a confirmation email shortly at <span className="font-semibold">{formData.email}</span>
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold mb-4">Reserve Your <span className="italic font-light">Table</span></h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Book your dining experience at VanaBella. We look forward to serving you.
              </p>
            </div>

            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                  <User size={14} /> Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border-b-2 border-gray-200 p-4 focus:border-black focus:outline-none transition-colors text-black"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                  <Mail size={14} /> Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border-b-2 border-gray-200 p-4 focus:border-black focus:outline-none transition-colors text-black"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                  <Phone size={14} /> Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border-b-2 border-gray-200 p-4 focus:border-black focus:outline-none transition-colors text-black"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                  <Users size={14} /> Number of Guests *
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border-b-2 border-gray-200 p-4 focus:border-black focus:outline-none transition-colors text-black"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                  <option value="10+">10+ Guests (Contact Us)</option>
                </select>
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                  <Calendar size={14} /> Date *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full bg-gray-50 border-b-2 border-gray-200 p-4 focus:border-black focus:outline-none transition-colors text-black"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                  <Clock size={14} /> Time *
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border-b-2 border-gray-200 p-4 focus:border-black focus:outline-none transition-colors text-black"
                >
                  <option value="">Select Time</option>
                  <option value="09:00">09:00 AM</option>
                  <option value="09:30">09:30 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="10:30">10:30 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="11:30">11:30 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="12:30">12:30 PM</option>
                  <option value="13:00">01:00 PM</option>
                  <option value="13:30">01:30 PM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="14:30">02:30 PM</option>
                  <option value="15:00">03:00 PM</option>
                  <option value="15:30">03:30 PM</option>
                  <option value="16:00">04:00 PM</option>
                  <option value="16:30">04:30 PM</option>
                  <option value="17:00">05:00 PM</option>
                  <option value="17:30">05:30 PM</option>
                  <option value="18:00">06:00 PM</option>
                  <option value="18:30">06:30 PM</option>
                  <option value="19:00">07:00 PM</option>
                  <option value="19:30">07:30 PM</option>
                  <option value="20:00">08:00 PM</option>
                  <option value="20:30">08:30 PM</option>
                  <option value="21:00">09:00 PM</option>
                  <option value="21:30">09:30 PM</option>
                  <option value="22:00">10:00 PM</option>
                  <option value="22:30">10:30 PM</option>
                </select>
              </div>
            </div>

            {/* Occasion */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Occasion
              </label>
              <select
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
                className="w-full bg-gray-50 border-b-2 border-gray-200 p-4 focus:border-black focus:outline-none transition-colors text-black"
              >
                <option value="casual">Casual Dining</option>
                <option value="birthday">Birthday Celebration</option>
                <option value="anniversary">Anniversary</option>
                <option value="business">Business Meeting</option>
                <option value="date">Romantic Date</option>
                <option value="family">Family Gathering</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Special Requests */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                <MessageSquare size={14} /> Special Requests
              </label>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows={4}
                className="w-full bg-gray-50 border-b-2 border-gray-200 p-4 focus:border-black focus:outline-none transition-colors resize-none text-black"
                placeholder="Any dietary restrictions, allergies, or special arrangements?"
              />
            </div>

            {/* Info Notice */}
            <div className="bg-gray-50 p-6 border-l-4 border-black">
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong className="text-black">Please note:</strong> This is a reservation request. We'll confirm your booking within 30 minutes via email or phone. For same-day reservations, please call us directly at <span className="font-semibold">@cafevanabella</span> (Instagram).
              </p>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="bg-black text-white px-12 py-4 uppercase tracking-widest text-sm font-bold hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 mx-auto"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Confirm Reservation <Send size={16} />
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
