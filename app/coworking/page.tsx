"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Wifi, Coffee, Printer, Lock, Zap, Calendar, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const coworkingImages = [
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop", title: "Open Workspace", desc: "Bright and airy open seating area." },
  { src: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=1000&auto=format&fit=crop", title: "Meeting Room", desc: "Fully equipped meeting room for teams." },
  { src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1000&auto=format&fit=crop", title: "Private Desk", desc: "Dedicated desk for focused work." },
];

export default function CoworkingPage() {
  const [selectedImage, setSelectedImage] = useState<typeof coworkingImages[0] | null>(null);

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      
      {/* HERO BANNER */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-emerald-950">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2000&auto=format&fit=crop"
            alt="Coworking Hero"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 font-cinzel"
          >
            Work <span className="italic font-light font-serif">&</span> Dine
          </motion.h1>
          <p className="text-emerald-100 font-light tracking-widest uppercase text-sm md:text-base max-w-2xl mx-auto">
            A productive space with premium hospitality
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Redefining the <span className="italic text-gray-500">Workspace</span></h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-12">
            Escape the home office and work in an environment designed for focus and creativity. Enjoy high-speed internet, ergonomic seating, and of course, unlimited premium coffee and snacks from our kitchen.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { icon: Wifi, label: "High-Speed WiFi" },
              { icon: Coffee, label: "Unlimited Coffee" },
              { icon: Printer, label: "Printing Station" },
              { icon: Lock, label: "Secure Lockers" },
              { icon: Zap, label: "Power at Every Seat" },
              { icon: Calendar, label: "Meeting Rooms" },
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center p-6 border border-gray-100 hover:border-black transition-colors"
              >
                <feature.icon size={24} className="mb-4 text-gray-400" />
                <span className="text-sm font-bold uppercase tracking-widest">{feature.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">Our Space</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coworkingImages.map((img, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                className="relative h-64 cursor-pointer overflow-hidden rounded-lg shadow-md"
                onClick={() => setSelectedImage(img)}
              >
                <Image 
                  src={img.src} 
                  alt={img.title} 
                  fill 
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-colors flex items-end p-6">
                  <span className="text-white font-bold uppercase tracking-widest">{img.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <div 
              className="bg-white p-4 rounded-lg max-w-3xl w-full" 
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[60vh] w-full mb-4">
                <Image 
                  src={selectedImage.src} 
                  alt={selectedImage.title} 
                  fill 
                  className="object-cover rounded"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-600">{selectedImage.desc}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PRICING */}
      <section className="bg-white py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Membership Plans</h2>
            <p className="text-gray-500">Choose the plan that fits your workflow.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Day Pass",
                price: "₹299",
                period: "/day",
                features: ["Access from 9am - 9pm", "High-speed WiFi", "Unlimited Coffee & Tea", "Open Seating"],
                highlight: false
              },
              {
                name: "Monthly Flex",
                price: "₹4,999",
                period: "/month",
                features: ["Daily Access 9am - 9pm", "High-speed WiFi", "Unlimited Coffee & Tea", "Meeting Room Credits (2hrs)", "Locker Facility"],
                highlight: true
              },
              {
                name: "Dedicated Desk",
                price: "₹7,999",
                period: "/month",
                features: ["Daily Access 9am - 9pm", "Dedicated Desk & Locker", "Unlimited Coffee & Tea", "Meeting Room Credits (5hrs)", "Mail Handling", "Priority Event Access"],
                highlight: false
              }
            ].map((plan, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative p-8 flex flex-col ${plan.highlight ? 'bg-black text-white shadow-xl scale-105 z-10' : 'bg-white border border-gray-200 text-black'}`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black px-4 py-1 text-xs font-bold uppercase tracking-widest shadow-sm">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-serif font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={`text-sm ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full ${plan.highlight ? 'bg-white' : 'bg-black'}`} />
                      <span className={plan.highlight ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 text-xs font-bold uppercase tracking-widest transition-colors ${plan.highlight ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}>
                  Choose Plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY SECTION */}
      <section className="bg-gray-900 text-white py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Join Our <span className="italic text-gray-400">Community</span></h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              VanaBella isn't just a workspace—it's a community of entrepreneurs, freelancers, designers, developers, and creatives. Network with like-minded professionals, attend our monthly meetups, and grow your business together.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div>
                <div className="text-5xl font-bold mb-2">50+</div>
                <div className="text-gray-400 text-sm uppercase tracking-widest">Active Members</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">200+</div>
                <div className="text-gray-400 text-sm uppercase tracking-widest">Plants Around You</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">12+</div>
                <div className="text-gray-400 text-sm uppercase tracking-widest">Hours Daily Access</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Transform Your Work Life?</h2>
          <p className="text-gray-600 text-lg mb-10">
            Visit us for a free tour and trial day. Experience the VanaBella difference yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-10 py-4 bg-black text-white font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
              Schedule a Tour
            </a>
            <a href="/reservations" className="px-10 py-4 border-2 border-black text-black font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
              Book Trial Day
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
