"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Wifi, Coffee, Printer, Lock, Zap, Users, Check, ArrowRight } from "lucide-react";

const amenities = [
  { icon: Wifi, label: "High-Speed Fiber" },
  { icon: Coffee, label: "Artisan Coffee" },
  { icon: Printer, label: "Business Center" },
  { icon: Lock, label: "Secure Storage" },
  { icon: Zap, label: "Power Backup" },
  { icon: Users, label: "Meeting Pods" },
];

const plans = [
  {
    name: "Day Pass",
    price: "$25",
    period: "/ day",
    features: ["Access from 8am - 8pm", "High-speed WiFi", "Unlimited Coffee & Tea", "Open Seating Area"],
    highlight: false
  },
  {
    name: "Dedicated Desk",
    price: "$350",
    period: "/ month",
    features: ["24/7 Access", "Personal Locker", "Meeting Room Credits", "Mail Handling", "Guest Passes"],
    highlight: true
  },
  {
    name: "Private Studio",
    price: "$800",
    period: "/ month",
    features: ["24/7 Access", "Fully Furnished", "Priority Support", "Company Signage", "All Amenities Included"],
    highlight: false
  }
];

export default function CoworkingPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={containerRef} className="bg-forest-950 min-h-screen text-cream-50 selection:bg-gold-500/30">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden flex items-center justify-center">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
            alt="Coworking Hero"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-950/30 via-forest-950/60 to-forest-950" />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="block text-gold-500 text-sm md:text-base uppercase tracking-[0.3em] mb-6 font-medium"
          >
            Work & Wellness
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-tight"
          >
            Nature's <br />
            <span className="italic text-gold-500">Workspace</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-cream-100/80 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Escape the ordinary. Find your flow in a sanctuary designed for productivity, creativity, and peace of mind.
          </motion.p>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-24 px-4 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {amenities.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-sm flex flex-col items-center justify-center gap-4 group hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-forest-900/50 flex items-center justify-center text-gold-500 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium tracking-widest uppercase text-center">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 px-4 md:px-12 relative z-10 bg-forest-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Membership Plans</h2>
            <p className="text-cream-100/60 font-light text-lg">Flexible options tailored to your rhythm.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className={`relative p-8 md:p-12 border ${plan.highlight ? 'border-gold-500 bg-forest-900/80' : 'border-white/10 bg-white/5'} backdrop-blur-md flex flex-col`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold-500 text-forest-950 px-4 py-1 text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-serif font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-bold text-gold-500">{plan.price}</span>
                  <span className="text-cream-100/60 text-sm">{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-12 flex-grow">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-cream-100/80 text-sm font-light">
                      <Check className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 text-sm font-bold uppercase tracking-widest transition-all ${plan.highlight ? 'bg-gold-500 text-forest-950 hover:bg-gold-400' : 'border border-white/20 hover:bg-white/10'}`}>
                  Choose Plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="h-[60vh] grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-full min-h-[300px]">
          <Image
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2000&auto=format&fit=crop"
            alt="Office Space"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-forest-950/20 hover:bg-transparent transition-colors duration-500" />
        </div>
        <div className="relative h-full min-h-[300px]">
          <Image
            src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=2000&auto=format&fit=crop"
            alt="Meeting Room"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-forest-950/20 hover:bg-transparent transition-colors duration-500" />
        </div>
      </section>
    </div>
  );
}
