"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, Coffee, Wifi, Calendar, Leaf, ChefHat, Utensils, MapPin, Clock, Phone } from "lucide-react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { WaveDividerBottom, WaveDividerTop, OrganicTornTop } from "@/components/NatureDividers";

const heroImages = [
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000&auto=format&fit=crop", // Empty table/Ambience
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2000&auto=format&fit=crop", // Bday celebration
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2000&auto=format&fit=crop", // Dishes
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2000&auto=format&fit=crop", // Book a table
];

export default function Home() {
  const containerRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const yHero = useTransform(scrollYProgress, [0, 0.2], [0, 300]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div ref={containerRef} className="bg-white text-black overflow-x-hidden selection:bg-black selection:text-white">
      
      {/* HERO SECTION - MINIMALIST */}
      <section className="relative h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800">
        <motion.div style={{ y: yHero, opacity: opacityHero }} className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image 
                src={heroImages[currentImageIndex]}
                alt="Hero Background"
                fill
                className="object-cover opacity-40"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-900/40 to-transparent" />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <div className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="py-12 md:py-20 flex flex-col items-center"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8"
            >
              <h2 className="text-white uppercase tracking-[0.3em] text-xs md:text-sm font-bold">
                Est. 2024 · Pimple Nilakh, Pune
              </h2>
            </motion.div>
            
            {/* Cafe Name with Cinzel Font */}
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-cinzel font-bold text-white mb-8 tracking-tight drop-shadow-2xl leading-none">
              Cafe VanaBella
            </h1>

            <p className="text-xl md:text-2xl text-emerald-100 max-w-2xl mx-auto font-light font-serif tracking-wide mt-6 drop-shadow-lg leading-relaxed">
              "Where the forest meets the fork."
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }} 
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Link href="/reservations" className="group relative block">
                <div className="px-12 py-5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full transition-all duration-300 group-hover:from-emerald-600 group-hover:to-emerald-700 shadow-2xl group-hover:shadow-emerald-500/50">
                  <span className="font-bold uppercase tracking-[0.2em] text-sm flex items-center gap-4">
                    Book your Birthday Spot <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </span>
                </div>
              </Link>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }} 
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Link href="/celebration" className="group relative block">
                <div className="px-12 py-5 bg-white text-emerald-900 rounded-full transition-all duration-300 group-hover:bg-emerald-50 shadow-2xl group-hover:shadow-white/50 border-2 border-white/50">
                  <span className="font-bold uppercase tracking-[0.2em] text-sm flex items-center gap-4">
                    Explore Menu
                    <span className="text-xl group-hover:scale-110 transition-transform duration-200">🍽️</span>
                  </span>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20">
          <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
        </div>
        
        {/* Organic Divider */}
        <WaveDividerBottom fill="#ffffff" />
      </section>

      {/* FEATURES GRID */}
      <section className="py-32 px-4 max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: Coffee, title: "Artisan Coffee", desc: "Sourced from sustainable farms, roasted to perfection." },
            { icon: Leaf, title: "Organic Ingredients", desc: "Farm-to-table freshness in every single dish." },
            { icon: Wifi, title: "Coworking Space", desc: "High-speed fiber internet in a serene environment." }
          ].map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group p-10 bg-white rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 text-center cursor-pointer relative overflow-hidden border border-emerald-50"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="mb-6 inline-flex p-6 bg-emerald-50 text-emerald-900 group-hover:bg-emerald-900 group-hover:text-white transition-colors duration-500 rounded-full shadow-inner"
              >
                <feature.icon size={32} />
              </motion.div>
              <h3 className="text-2xl font-cinzel font-bold mb-4 text-emerald-950">{feature.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed font-serif">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* IMAGE & TEXT SECTION */}
      <section className="py-32 bg-emerald-50 relative">
        <OrganicTornTop fill="#ffffff" />
        
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <Image 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop"
              alt="Cafe Interior"
              fill
              className="object-cover hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-white p-8 flex flex-col justify-center items-center text-center shadow-xl hidden md:flex rounded-tl-[3rem]">
              <span className="text-5xl font-cinzel font-bold text-emerald-900">4.9</span>
              <div className="flex gap-1 text-yellow-500 my-2">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">Google Reviews</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-6xl font-cinzel font-bold leading-tight text-emerald-950">
              A Symphony of <br/> <span className="italic text-emerald-600 font-serif">Taste & Tranquility</span>
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg font-serif">
              At VanaBella, we believe that dining is not just about food—it's about the experience. 
              Our space is designed to be a sanctuary from the urban chaos, where the aroma of freshly 
              brewed coffee mingles with the scent of indoor greenery.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg font-serif">
              Whether you're here for a power breakfast, a lazy afternoon with a book, or a productive 
              coworking session, our doors are open to nourish both your body and soul.
            </p>
            <div className="pt-8">
              <Link href="/about" className="inline-block px-8 py-4 bg-emerald-900 text-white font-bold uppercase tracking-widest text-xs hover:bg-emerald-800 transition-all shadow-lg hover:shadow-xl rounded-full">
                Read Our Story
              </Link>
            </div>
          </motion.div>
        </div>
        
        <WaveDividerBottom fill="#ffffff" />
      </section>

      {/* MENU PREVIEW */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Culinary Delights</span>
          <h2 className="text-4xl font-serif font-bold mt-3">Signature Dishes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {[
            { name: "Avocado Toast Supreme", price: "₹499", desc: "Sourdough, poached egg, chili flakes, microgreens." },
            { name: "Truffle Mushroom Risotto", price: "₹649", desc: "Arborio rice, wild mushrooms, parmesan crisp." },
            { name: "VanaBella Acai Bowl", price: "₹449", desc: "Organic acai, house granola, seasonal berries, honey." },
            { name: "Smoked Salmon Bagel", price: "₹549", desc: "Cream cheese, capers, red onion, dill." }
          ].map((item, idx) => (
            <div key={idx} className="group flex justify-between items-baseline border-b border-gray-200 pb-4 hover:border-black transition-colors">
              <div className="flex-1">
                <h4 className="text-xl font-serif font-bold mb-1 group-hover:pl-2 transition-all">{item.name}</h4>
                <p className="text-sm text-gray-500 italic">{item.desc}</p>
              </div>
              <span className="text-lg font-bold ml-4">{item.price}</span>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link href="/menu" className="inline-block px-8 py-3 border border-black text-black font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-colors">
            View Full Menu
          </Link>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-black text-white text-center px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-serif font-bold">Ready to Experience VanaBella?</h2>
          <p className="text-gray-400 text-lg font-light">
            Join us for an unforgettable dining experience or book your spot in our coworking space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/contact" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-gray-200 transition-colors">
              Reserve a Table
            </Link>
            <Link href="/coworking" className="px-8 py-4 border border-white text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-colors">
              Book Workspace
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
