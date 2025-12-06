"use client";

import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ContactPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const yHero = useTransform(scrollYProgress, [0, 0.2], [0, 200]);

  return (
    <div ref={containerRef} className="bg-forest-950 text-cream-50 selection:bg-gold-500 selection:text-forest-950 overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: yHero }} className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2000&auto=format&fit=crop"
            alt="Contact Hero"
            fill
            className="object-cover brightness-[0.3]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-950/30 via-transparent to-forest-950"></div>
        </motion.div>

        <div className="relative z-10 text-center max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-gold-500 uppercase tracking-[0.3em] text-xs font-bold mb-6 block">Connect With Us</span>
            <h1 className="text-6xl md:text-8xl font-serif font-medium text-cream-50 mb-8 leading-tight">
              Get in <span className="italic text-gold-500">Touch</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Contact Info */}
          <div className="space-y-16">
            <div>
              <h2 className="text-4xl font-serif font-medium text-cream-50 mb-8">Visit Our Sanctuary</h2>
              <p className="text-cream-100/60 font-light leading-relaxed max-w-md mb-12">
                Whether you want to book a table, plan an event, or just say hello, we'd love to hear from you.
              </p>
              
              <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                  <MapPin className="w-6 h-6 text-gold-500 mt-1" />
                  <div>
                    <h3 className="font-serif font-bold text-xl text-cream-50 mb-2">Address</h3>
                    <p className="text-cream-100/60 font-light">123 Green Street, Urban City, India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 group">
                  <Phone className="w-6 h-6 text-gold-500 mt-1" />
                  <div>
                    <h3 className="font-serif font-bold text-xl text-cream-50 mb-2">Phone</h3>
                    <p className="text-cream-100/60 font-light">+91-9074627887</p>
                    <p className="text-cream-100/60 font-light">+91-8262022502</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <Mail className="w-6 h-6 text-gold-500 mt-1" />
                  <div>
                    <h3 className="font-serif font-bold text-xl text-cream-50 mb-2">Email</h3>
                    <p className="text-cream-100/60 font-light">info@cafevanabella.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <Clock className="w-6 h-6 text-gold-500 mt-1" />
                  <div>
                    <h3 className="font-serif font-bold text-xl text-cream-50 mb-2">Hours</h3>
                    <p className="text-cream-100/60 font-light">Mon - Sun: 9:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 w-full bg-forest-900/20 border border-white/10 relative group overflow-hidden">
               <Image 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop"
                alt="Map Location"
                fill
                className="object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                 <span className="bg-forest-950/80 backdrop-blur px-6 py-3 text-gold-500 uppercase tracking-widest text-xs font-bold border border-gold-500/30">
                   View on Google Maps
                 </span>
               </div>
            </div>
          </div>

          {/* Contact Form - Minimal */}
          <div className="bg-forest-900/10 p-8 md:p-12 border border-white/5 backdrop-blur-sm">
            <h2 className="text-3xl font-serif font-medium text-cream-50 mb-10">Send a Message</h2>
            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="group">
                  <input type="text" className="w-full bg-transparent border-b border-white/20 py-4 text-cream-50 focus:border-gold-500 outline-none transition-colors placeholder-transparent peer" id="name" placeholder="Name" />
                  <label htmlFor="name" className="absolute left-0 -top-3.5 text-gold-500 text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-gold-500 peer-focus:text-xs">Name</label>
                </div>
                <div className="group relative">
                  <input type="email" className="w-full bg-transparent border-b border-white/20 py-4 text-cream-50 focus:border-gold-500 outline-none transition-colors placeholder-transparent peer" id="email" placeholder="Email" />
                  <label htmlFor="email" className="absolute left-0 -top-3.5 text-gold-500 text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-gold-500 peer-focus:text-xs">Email</label>
                </div>
              </div>
              
              <div className="group relative">
                <select className="w-full bg-transparent border-b border-white/20 py-4 text-cream-50 focus:border-gold-500 outline-none transition-colors appearance-none">
                  <option className="bg-forest-950 text-white/60">Select Subject</option>
                  <option className="bg-forest-950">General Inquiry</option>
                  <option className="bg-forest-950">Reservation</option>
                  <option className="bg-forest-950">Event Booking</option>
                </select>
                <div className="absolute right-0 top-4 pointer-events-none text-gold-500">
                  <ArrowRight className="w-4 h-4 rotate-90" />
                </div>
              </div>

              <div className="group relative">
                <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-4 text-cream-50 focus:border-gold-500 outline-none transition-colors placeholder-transparent peer" id="message" placeholder="Message"></textarea>
                <label htmlFor="message" className="absolute left-0 -top-3.5 text-gold-500 text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-gold-500 peer-focus:text-xs">Message</label>
              </div>

              <button type="submit" className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden transition-all border border-gold-500 text-gold-500 hover:text-forest-950 hover:bg-gold-500 w-full md:w-auto">
                <span className="font-bold tracking-widest uppercase text-sm">Send Message</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
