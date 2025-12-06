"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, Coffee, Wifi, Calendar, Leaf, ChefHat, Utensils, MapPin, Clock, Phone } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { menuItems } from "@/data/menu";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const yHero = useTransform(scrollYProgress, [0, 0.2], [0, 300]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="bg-forest-950 text-cream-50 overflow-x-hidden selection:bg-gold-500 selection:text-forest-950">
      
      {/* HERO SECTION - CINEMATIC */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: yHero, opacity: opacityHero }} className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2000&auto=format&fit=crop"
            alt="Luxury Interior"
            fill
            className="object-cover brightness-[0.3]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-950/30 via-transparent to-forest-950"></div>
        </motion.div>

        <div className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="border-y border-gold-500/30 py-12 md:py-20 backdrop-blur-sm bg-forest-950/10"
          >
            <h2 className="text-gold-400 uppercase tracking-[0.5em] text-xs md:text-sm mb-8 font-medium">
              Est. 2024 • Urban Sanctuary
            </h2>
            <h1 className="text-6xl md:text-9xl font-serif font-medium text-cream-50 mb-6 leading-none tracking-tight">
              VANA<span className="italic text-gold-500">BELLA</span>
            </h1>
            <p className="text-lg md:text-xl text-cream-100/80 max-w-xl mx-auto font-light italic font-serif tracking-wide">
              "Where the forest meets the fork."
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-12"
          >
             <Link href="/menu" className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden transition-all border border-gold-500/50 hover:border-gold-500">
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gold-500/20"></span>
                <span className="relative text-sm font-bold tracking-[0.2em] uppercase text-gold-500 group-hover:text-cream-50 transition-colors">
                  Reserve Your Table
                </span>
             </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: THE NARRATIVE (Split Layout) */}
      <section className="py-32 bg-forest-950 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
               <div className="relative h-[700px] w-full overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=1000&auto=format&fit=crop"
                    alt="Coffee Pour"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
                  />
                  <div className="absolute inset-0 border-[1px] border-gold-500/20 m-4 pointer-events-none"></div>
               </div>
               <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-forest-900 p-8 hidden md:flex items-center justify-center border border-gold-500/20">
                  <p className="font-serif italic text-gold-500 text-center text-lg">
                    "Coffee is a language in itself."
                  </p>
               </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-10">
              <span className="text-gold-500 uppercase tracking-[0.3em] text-xs font-bold flex items-center gap-4">
                <span className="w-12 h-[1px] bg-gold-500"></span>
                The Craft
              </span>
              <h2 className="text-5xl md:text-7xl font-serif font-medium text-cream-50 leading-[1.1]">
                Precision in <br/> Every <span className="italic text-gold-500">Pour</span>
              </h2>
              <p className="text-xl text-cream-100/60 font-light leading-relaxed max-w-md">
                We don't just serve coffee; we curate experiences. Our beans are sourced from high-altitude estates, roasted in small batches, and brewed with mathematical precision to unlock flavors you never knew existed.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                <div>
                  <h3 className="text-3xl font-serif text-gold-500 mb-2">100%</h3>
                  <p className="text-xs uppercase tracking-widest text-cream-100/50">Arabica Beans</p>
                </div>
                <div>
                  <h3 className="text-3xl font-serif text-gold-500 mb-2">24h</h3>
                  <p className="text-xs uppercase tracking-widest text-cream-100/50">Cold Brew Process</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: HORIZONTAL SCROLL PREVIEW (The Menu) */}
      <section className="py-32 bg-cream-50 text-forest-950 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 mb-16 flex justify-between items-end">
          <div>
            <span className="text-forest-700 uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Our Offerings</span>
            <h2 className="text-5xl md:text-6xl font-serif font-medium">Curated <span className="italic text-forest-700">Tastes</span></h2>
          </div>
          <Link href="/menu" className="hidden md:flex items-center gap-2 text-forest-900 font-bold uppercase tracking-widest text-xs border-b border-forest-900 pb-1 hover:text-gold-600 hover:border-gold-600 transition-colors">
            View Full Menu <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-12 px-4 md:px-6 scrollbar-hide snap-x">
          {[
            { title: "Artisan Coffee", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop", price: "From $5" },
            { title: "Gourmet Pastries", img: "https://images.unsplash.com/photo-1555507036-ab1f40388085?q=80&w=800&auto=format&fit=crop", price: "From $8" },
            { title: "Fine Dining", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop", price: "From $25" },
            { title: "Signature Cocktails", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop", price: "From $15" },
          ].map((item, idx) => (
            <div key={idx} className="min-w-[300px] md:min-w-[400px] snap-center group cursor-pointer">
              <div className="relative h-[500px] w-full overflow-hidden mb-6">
                <Image 
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="flex justify-between items-baseline border-b border-forest-900/10 pb-4">
                <h3 className="text-2xl font-serif font-bold text-forest-900">{item.title}</h3>
                <span className="font-serif italic text-forest-700">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: AMBIANCE (Full Width Video/Image) */}
      <section className="relative h-[80vh] flex items-center justify-center bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-forest-950/60"></div>
        <div className="relative z-10 text-center max-w-4xl px-4">
          <Star className="w-12 h-12 text-gold-500 mx-auto mb-8" />
          <h2 className="text-4xl md:text-6xl font-serif text-cream-50 leading-tight mb-8">
            "An oasis of calm in the chaos of the city. VanaBella isn't just a cafe, it's a retreat."
          </h2>
          <p className="text-gold-500 uppercase tracking-widest font-bold text-sm">— The Culinary Times</p>
        </div>
      </section>

      {/* SECTION: 360 VIEW PREVIEW */}
      <section className="py-20 bg-forest-900 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <span className="text-gold-500 uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Virtual Tour</span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-cream-50 mb-12">Experience Vana<span className="italic text-gold-500">Bella</span> in 360°</h2>
          
          <div className="relative w-full max-w-5xl mx-auto aspect-video rounded-lg overflow-hidden group cursor-pointer border border-gold-500/20">
            <Image 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2000&auto=format&fit=crop" 
              alt="360 View Placeholder"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full border-2 border-gold-500 flex items-center justify-center bg-forest-950/50 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                <span className="text-gold-500 font-bold text-xl">360°</span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-forest-950 to-transparent text-center">
              <p className="text-cream-100/80 text-sm uppercase tracking-widest">Click to explore the space</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: CHEF'S FAVORITES (Small Menu Section) */}
      <section className="py-24 bg-forest-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="text-gold-500 uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Taste The Magic</span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-cream-50">Chef's <span className="italic text-gold-500">Signatures</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
            {menuItems.filter(item => item.isChefSpecial).slice(0, 4).map((item) => (
              <div key={item.id} className="flex justify-between items-end border-b border-white/10 pb-4 group hover:border-gold-500/50 transition-colors">
                <div>
                  <h3 className="text-xl font-serif font-medium text-cream-50 group-hover:text-gold-500 transition-colors">{item.name}</h3>
                  <p className="text-sm text-cream-100/40 mt-1">{item.category}</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-gold-500 font-bold text-lg">${item.price}</span>
                  {item.isVeg && <span className="text-[10px] text-green-400 uppercase tracking-wider mt-1">Veg</span>}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
             <Link href="/menu" className="inline-block px-8 py-3 border border-gold-500 text-gold-500 uppercase tracking-widest text-xs font-bold hover:bg-gold-500 hover:text-forest-950 transition-all">
               View Complete Menu
             </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: SERVICES (Minimal Grid) */}
      <section className="py-32 bg-forest-950 text-cream-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              { icon: <Wifi className="w-8 h-8" />, title: "Co-Working", desc: "High-speed fiber internet and ergonomic seating for the modern nomad." },
              { icon: <Calendar className="w-8 h-8" />, title: "Events", desc: "Host your private gatherings in our exclusive garden enclosure." },
              { icon: <Leaf className="w-8 h-8" />, title: "Workshops", desc: "Weekly masterclasses on brewing, baking, and sustainable living." },
            ].map((service, idx) => (
              <div key={idx} className="bg-forest-950 p-12 hover:bg-forest-900 transition-colors group">
                <div className="text-gold-500 mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-2xl font-serif font-bold mb-4">{service.title}</h3>
                <p className="text-cream-100/60 font-light leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: CONTACT & VISIT */}
      <section className="py-24 bg-black/20 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            {/* Info */}
            <div className="space-y-10">
              <div>
                <span className="text-gold-500 uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Visit Us</span>
                <h2 className="text-4xl md:text-5xl font-serif font-medium text-cream-50 mb-6">Find Your <span className="italic text-gold-500">Sanctuary</span></h2>
                <p className="text-cream-100/60 font-light leading-relaxed max-w-md">
                  Nestled in the heart of the city, yet worlds away. Join us for a coffee, a meal, or a moment of peace.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold-500 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-cream-50 font-bold uppercase tracking-wider text-sm mb-1">Location</h4>
                    <p className="text-cream-100/60 font-light">123 Forest Avenue, Green District<br/>New York, NY 10012</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold-500 shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="text-cream-50 font-bold uppercase tracking-wider text-sm mb-1">Hours</h4>
                    <p className="text-cream-100/60 font-light">Mon - Sun: 8:00 AM - 10:00 PM<br/>Happy Hour: 4:00 PM - 7:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold-500 shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-cream-50 font-bold uppercase tracking-wider text-sm mb-1">Contact</h4>
                    <p className="text-cream-100/60 font-light">+1 (555) 123-4567<br/>hello@cafevanabella.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative h-[400px] w-full bg-white/5 rounded-lg overflow-hidden border border-white/10 group">
              <Image 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop"
                alt="Map Location"
                fill
                className="object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-forest-950/80 backdrop-blur-md px-6 py-3 rounded-full border border-gold-500/30 flex items-center gap-2">
                  <MapPin size={16} className="text-gold-500" />
                  <span className="text-xs uppercase tracking-widest text-cream-50">View on Google Maps</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
