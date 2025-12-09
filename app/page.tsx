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
      
      {/* HERO SECTION - MODERN SPLIT LAYOUT */}
      <section className="relative h-[100vh] lg:h-[95vh] grid grid-cols-1 lg:grid-cols-2 overflow-hidden bg-white">
        
        {/* LEFT SIDE - Content */}
        <div className="relative z-10 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-12 lg:py-16 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="flex flex-wrap gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-flex items-center gap-3 px-5 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20"
              >
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-white text-sm font-bold tracking-wider">AWARD WINNING CAFE</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-500/20 backdrop-blur-xl rounded-full border border-emerald-400/30"
              >
                <Leaf className="w-4 h-4 text-emerald-300 fill-emerald-300" />
                <span className="text-emerald-100 text-sm font-bold tracking-wider">100% PURE VEG</span>
              </motion.div>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-cinzel font-bold text-white leading-none tracking-tight"
              >
                Cafe
                <br />
                <span className="bg-gradient-to-r from-emerald-300 via-emerald-200 to-white bg-clip-text text-transparent">
                  VanaBella
                </span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex items-center gap-3"
              >
                <div className="h-[2px] w-16 bg-gradient-to-r from-emerald-400 to-transparent"></div>
                <p className="text-emerald-100 text-sm md:text-base uppercase tracking-[0.3em] font-light">
                  Est. 2024
                </p>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg md:text-xl text-emerald-50/90 max-w-xl font-serif leading-relaxed"
            >
              Experience the perfect harmony of nature and culinary artistry. Where every moment is crafted with passion, every dish tells a story.
            </motion.p>

            {/* Quick Info Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="grid grid-cols-2 gap-4 pt-6"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 border border-white/20">
                <MapPin className="w-6 h-6 text-emerald-300 mb-2" />
                <p className="text-white text-sm font-bold">Pimple Nilakh</p>
                <p className="text-emerald-200 text-xs">Pune, Maharashtra</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 border border-white/20">
                <Clock className="w-6 h-6 text-emerald-300 mb-2" />
                <p className="text-white text-sm font-bold">Open Daily</p>
                <p className="text-emerald-200 text-xs">9 AM - 11 PM</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-8"
            >
              <motion.div 
                whileHover={{ scale: 1.05, y: -3 }} 
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  href="/reservations" 
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-emerald-900 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 hover:bg-emerald-50 shadow-2xl overflow-hidden"
                >
                  <span className="relative z-10">Reserve Table</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </Link>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05, y: -3 }} 
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  href="/menu" 
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-white rounded-full font-bold uppercase tracking-wider text-sm border-2 border-white/30 hover:border-white transition-all duration-300 backdrop-blur-sm"
                >
                  <Utensils className="w-5 h-5" />
                  <span>View Menu</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT SIDE - Image Slideshow */}
        <div className="relative h-[100vh] lg:h-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.2, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: -100 }}
              transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
              className="absolute inset-0"
            >
              <Image 
                src={heroImages[currentImageIndex]}
                alt="Cafe VanaBella"
                fill
                className="object-cover"
                priority
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/40 via-transparent to-emerald-900/30"></div>
              
              {/* Image Counter */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-xl"
              >
                <span className="text-emerald-900 font-bold text-sm">
                  {currentImageIndex + 1} / {heroImages.length}
                </span>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="absolute bottom-8 left-8 z-10 flex gap-2">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentImageIndex 
                    ? 'w-12 bg-white' 
                    : 'w-2 bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Decorative Elements */}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute top-8 right-8 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.7, duration: 1 }}
            className="absolute bottom-20 left-20 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl"
          />
        </div>

        {/* Scroll Indicator - Only visible on desktop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-emerald-800 text-xs uppercase tracking-widest font-bold">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-emerald-600 to-transparent"></div>
          </div>
        </motion.div>
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
