"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      
      {/* HERO */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=2000&auto=format&fit=crop"
            alt="Contact Hero"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-4"
          >
            Get in <span className="italic font-light">Touch</span>
          </motion.h1>
          <p className="text-gray-300 font-light tracking-widest uppercase text-sm md:text-base">
            We'd love to hear from you
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* CONTACT FORM */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-50 p-8 md:p-12"
          >
            <h2 className="text-3xl font-serif font-bold mb-8">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Name</label>
                  <input type="text" className="w-full bg-white border-b border-gray-200 p-3 focus:border-black focus:outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email</label>
                  <input type="email" className="w-full bg-white border-b border-gray-200 p-3 focus:border-black focus:outline-none transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Subject</label>
                <select className="w-full bg-white border-b border-gray-200 p-3 focus:border-black focus:outline-none transition-colors">
                  <option>General Inquiry</option>
                  <option>Private Events</option>
                  <option>Press & Media</option>
                  <option>Careers</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
                <textarea rows={4} className="w-full bg-white border-b border-gray-200 p-3 focus:border-black focus:outline-none transition-colors resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button className="bg-black text-white px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-gray-800 transition-colors flex items-center gap-2">
                Send Message <Send size={14} />
              </button>
            </form>
          </motion.div>

          {/* INFO & MAP */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8">Visit Us</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Located in the historic district, our restaurant offers a serene escape from the bustling city. Valet parking is available.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 text-gray-400" />
                    <div>
                      <h4 className="font-bold uppercase tracking-widest text-sm mb-1">Address</h4>
                      <p className="text-gray-600 text-sm">123 Culinary Avenue<br/>New York, NY 10012</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="mt-1 text-gray-400" />
                    <div>
                      <h4 className="font-bold uppercase tracking-widest text-sm mb-1">Phone</h4>
                      <p className="text-gray-600 text-sm">+1 (212) 555-0123</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="mt-1 text-gray-400" />
                    <div>
                      <h4 className="font-bold uppercase tracking-widest text-sm mb-1">Email</h4>
                      <p className="text-gray-600 text-sm">hello@cafevanabella.com</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="mt-1 text-gray-400" />
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-sm mb-1">Hours</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between gap-8">
                        <span>Mon - Thu</span>
                        <span>11:00 AM - 10:00 PM</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span>Fri - Sat</span>
                        <span>11:00 AM - 11:00 PM</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span>Sunday</span>
                        <span>10:00 AM - 9:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MAP PLACEHOLDER */}
            <div className="h-[300px] bg-gray-100 relative grayscale hover:grayscale-0 transition-all duration-500">
              <Image 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop"
                alt="Map Location"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <div className="bg-white p-4 shadow-lg">
                  <MapPin className="text-black" size={32} />
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
