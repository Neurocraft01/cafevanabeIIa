"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

const spaces = [
  {
    title: "The Private Dining Room",
    description: "An intimate sanctuary for exclusive gatherings. Featuring a custom mahogany table, ambient lighting, and a dedicated service team.",
    capacity: "Up to 20 Guests",
    features: ["Custom Menu Design", "Wine Pairing", "Private Entrance"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "The Artisan Workshop",
    description: "A creative haven designed for hands-on experiences. Perfect for cooking masterclasses, art workshops, and team building.",
    capacity: "Up to 15 Guests",
    features: ["Chef's Station", "Art Supplies", "Projector & Screen"],
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "The Grand Hall",
    description: "Our signature venue for momentous celebrations. High ceilings, panoramic garden views, and flexible layout options.",
    capacity: "Up to 80 Guests",
    features: ["Full Bar Access", "Live Music Stage", "Outdoor Terrace"],
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2000&auto=format&fit=crop"
  }
];

export default function WorkshopPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={containerRef} className="bg-forest-950 min-h-screen text-cream-50 selection:bg-gold-500/30">
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden flex items-center justify-center">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2000&auto=format&fit=crop"
            alt="Events Hero"
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
            Gather & Create
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-tight"
          >
            Celebrate Life's <br />
            <span className="italic text-gold-500">Masterpieces</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-cream-100/80 font-light max-w-2xl mx-auto leading-relaxed"
          >
            From intimate workshops to grand celebrations, our spaces are designed to transform your moments into lasting memories.
          </motion.p>
        </div>
      </section>

      {/* Spaces Section */}
      <section className="py-32 px-4 md:px-12 relative z-10 bg-forest-950">
        <div className="max-w-7xl mx-auto space-y-32">
          {spaces.map((space, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-20 items-center`}
            >
              <div className="w-full md:w-1/2 relative h-[500px] group overflow-hidden rounded-sm">
                <Image
                  src={space.image}
                  alt={space.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-forest-950/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              
              <div className="w-full md:w-1/2 space-y-8">
                <div className="space-y-4">
                  <span className="text-gold-500 uppercase tracking-widest text-sm font-medium">{space.capacity}</span>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream-50">{space.title}</h2>
                  <p className="text-cream-100/70 text-lg leading-relaxed font-light">{space.description}</p>
                </div>
                
                <ul className="space-y-4">
                  {space.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-cream-100/90">
                      <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gold-500 border border-white/10">
                        <Check className="w-4 h-4" />
                      </span>
                      <span className="font-light tracking-wide">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="group flex items-center gap-3 text-gold-500 uppercase tracking-widest text-sm font-bold hover:text-gold-400 transition-colors mt-8">
                  Book This Space
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-500/5" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-cream-50">
              Plan Your <span className="text-gold-500 italic">Event</span>
            </h2>
            <p className="text-xl text-cream-100/70 font-light">
              Let our dedicated events team help you curate the perfect experience.
            </p>
            <button className="bg-gold-500 text-forest-950 px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-gold-400 transition-all hover:scale-105 shadow-lg shadow-gold-500/20">
              Inquire Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
