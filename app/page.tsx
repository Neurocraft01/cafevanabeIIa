"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, Coffee, Wifi, Calendar, Leaf, ChefHat, Utensils, MapPin, Clock, Phone } from "lucide-react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const heroImages = [
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000&auto=format&fit=crop", // Empty table/Ambience
  "https://images.unsplash.com/photo-1530103862676-de3c9a59af38?q=80&w=2000&auto=format&fit=crop", // Bday celebration
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
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div ref={containerRef} className="bg-white text-black overflow-x-hidden selection:bg-black selection:text-white">
      
      {/* HERO SECTION - MINIMALIST */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: yHero, opacity: opacityHero }} className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <Image 
                src={heroImages[currentImageIndex]}
                alt="Hero Background"
                fill
                className="object-cover opacity-30"
                priority
              />
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
            <h2 className="text-black uppercase tracking-[0.5em] text-xs md:text-sm mb-8 font-medium">
              Est. 2024 · Pimple Nilakh, Pune
            </h2>
            
            {/* Logo Image Replacement */}
            <div className="relative w-64 h-24 md:w-96 md:h-32 mb-6">
              <Image 
                src="/logo.jpg" 
                alt="VanaBella Logo" 
                fill
                className="object-contain object-center scale-150"
                priority
              />
            </div>

            <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto font-light italic font-serif tracking-wide mt-4">
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
              whileHover={{ x: 5 }} 
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link href="/menu" className="group relative block">
                <div className="px-12 py-5 bg-black text-white border-4 border-black transition-all duration-200 group-hover:translate-x-2 group-hover:translate-y-2">
                  <span className="font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-4">
                    View Menu
                    <span className="text-xl group-hover:translate-x-2 transition-transform duration-200">→</span>
                  </span>
                </div>
                <div className="absolute inset-0 bg-gray-200 border-4 border-black -z-10"></div>
              </Link>
            </motion.div>
            
            <motion.div 
              whileHover={{ x: -5 }} 
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link href="/celebration" className="group relative block">
                <div className="px-12 py-5 bg-white text-black border-4 border-black transition-all duration-200 group-hover:-translate-x-2 group-hover:translate-y-2">
                  <span className="font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-4">
                    Book Bday Spot
                    <span className="text-xl group-hover:-translate-x-2 transition-transform duration-200">🎉</span>
                  </span>
                </div>
                <div className="absolute inset-0 bg-gray-200 border-4 border-black -z-10"></div>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-[1px] h-16 bg-gradient-to-b from-black to-transparent"></div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              className="group p-8 border-2 border-gray-100 hover:border-black hover:shadow-2xl transition-all duration-300 text-center cursor-pointer"
            >
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="mb-6 inline-flex p-5 bg-gray-50 group-hover:bg-black group-hover:text-white transition-colors duration-300 rounded-full shadow-md"
              >
                <feature.icon size={28} />
              </motion.div>
              <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-gray-700 transition-colors">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* IMAGE & TEXT SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] w-full"
          >
            <Image 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop"
              alt="Cafe Interior"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-white p-8 flex flex-col justify-center items-center text-center shadow-xl hidden md:flex">
              <span className="text-4xl font-serif font-bold">4.9</span>
              <div className="flex gap-1 text-black my-2">
                {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="black" />)}
              </div>
              <span className="text-xs uppercase tracking-widest text-gray-500">Google Reviews</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
              A Symphony of <br/> <span className="italic text-gray-500">Taste & Tranquility</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At VanaBella, we believe that dining is not just about food—it's about the experience. 
              Our space is designed to be a sanctuary from the urban chaos, where the aroma of freshly 
              brewed coffee mingles with the scent of indoor greenery.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you're here for a power breakfast, a lazy afternoon with a book, or a productive 
              coworking session, our doors are open to nourish both your body and soul.
            </p>
            <div className="pt-4">
              <Link href="/about" className="text-black font-bold uppercase tracking-widest text-xs border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
                Read Our Story
              </Link>
            </div>
          </motion.div>
        </div>
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
