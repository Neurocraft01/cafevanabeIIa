"use client";

import { motion } from "framer-motion";
import { Wifi, Coffee, Printer, Lock, Zap, Calendar } from "lucide-react";
import Image from "next/image";

export default function CoworkingPage() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      
      {/* HERO */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
            alt="Coworking Space"
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
            Work <span className="italic font-light">&</span> Dine
          </motion.h1>
          <p className="text-gray-300 font-light tracking-widest uppercase text-sm md:text-base">
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

      {/* PRICING */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Membership Plans</h2>
            <p className="text-gray-500">Choose the plan that fits your workflow.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Day Pass",
                price: "$25",
                period: "/day",
                features: ["Access from 8am - 6pm", "High-speed WiFi", "Unlimited Coffee & Tea", "Open Seating"],
                highlight: false
              },
              {
                name: "Monthly Flex",
                price: "$350",
                period: "/month",
                features: ["24/7 Access", "High-speed WiFi", "Unlimited Coffee & Tea", "Meeting Room Credits (2hrs)", "Mail Handling"],
                highlight: true
              },
              {
                name: "Dedicated Desk",
                price: "$500",
                period: "/month",
                features: ["24/7 Access", "Dedicated Desk & Locker", "Unlimited Coffee & Tea", "Meeting Room Credits (5hrs)", "Mail Handling", "Priority Event Access"],
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

    </div>
  );
}
