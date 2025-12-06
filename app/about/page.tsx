"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Leaf, Heart, Users, Award, Star } from "lucide-react";
import { useRef } from "react";

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const yHero = useTransform(scrollYProgress, [0, 0.2], [0, 200]);

  return (
    <div ref={containerRef} className="bg-forest-950 text-cream-50 selection:bg-gold-500 selection:text-forest-950 overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: yHero }} className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2000&auto=format&fit=crop"
            alt="About Hero"
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
            <span className="text-gold-500 uppercase tracking-[0.3em] text-xs font-bold mb-6 block">Our Essence</span>
            <h1 className="text-6xl md:text-8xl font-serif font-medium text-cream-50 mb-8 leading-tight">
              Rooted in <span className="italic text-gold-500">Nature</span>
            </h1>
            <p className="text-xl md:text-2xl text-cream-100/80 font-light leading-relaxed font-serif italic">
              "We are more than just a cafe; we are a movement towards mindful living."
            </p>
          </motion.div>
        </div>
      </section>

      {/* STORY SECTION - Split Layout */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
               <div className="relative h-[800px] w-full overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1507914372368-b2b085b925a1?q=80&w=1000&auto=format&fit=crop"
                    alt="Our Story"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 border-[1px] border-gold-500/20 m-6 pointer-events-none"></div>
               </div>
            </div>
            
            <div className="space-y-10">
              <h2 className="text-5xl md:text-6xl font-serif font-medium text-cream-50 leading-[1.1]">
                Born from the <br/> <span className="italic text-gold-500">Earth</span>
              </h2>
              <div className="space-y-6 text-lg text-cream-100/60 font-light leading-relaxed">
                <p>
                  Café VanaBella started with a vision to bring the tranquility of nature into the heart of the city. We believe that good food tastes even better when enjoyed in a peaceful environment.
                </p>
                <p>
                  Our journey began 5 years ago when we transformed an old warehouse into the lush sanctuary you see today. Every corner is designed to be a retreat, a place where time slows down.
                </p>
                <p>
                  We are committed to sustainability, sourcing our ingredients locally, and maintaining a zero-waste kitchen as much as possible. Every plant in our cafe is cared for with love, just like every dish we serve.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-12 pt-10 border-t border-white/10">
                <div>
                  <h3 className="text-4xl font-serif text-gold-500 mb-2">100%</h3>
                  <p className="text-xs uppercase tracking-widest text-cream-100/50">Organic Ingredients</p>
                </div>
                <div>
                  <h3 className="text-4xl font-serif text-gold-500 mb-2">500+</h3>
                  <p className="text-xs uppercase tracking-widest text-cream-100/50">Plants in our Space</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES - Minimal Cards */}
      <section className="py-32 bg-cream-50 text-forest-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <span className="text-forest-700 uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Our Philosophy</span>
            <h2 className="text-5xl md:text-6xl font-serif font-medium">Guided by <span className="italic text-forest-700">Values</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-forest-900/10 border border-forest-900/10">
            {[
              { title: "Sustainability", desc: "Eco-friendly practices in everything we do, from composting to plastic-free packaging.", icon: <Leaf className="w-10 h-10" /> },
              { title: "Quality", desc: "Only the freshest, locally sourced ingredients make it to your plate.", icon: <Award className="w-10 h-10" /> },
              { title: "Community", desc: "A space for people to connect, grow, and share ideas in a nurturing environment.", icon: <Users className="w-10 h-10" /> }
            ].map((val, idx) => (
              <div key={idx} className="bg-cream-50 p-16 hover:bg-white transition-colors group text-center">
                <div className="text-forest-900 mb-8 mx-auto flex justify-center group-hover:scale-110 transition-transform duration-300 group-hover:text-gold-600">{val.icon}</div>
                <h3 className="text-2xl font-serif font-bold mb-4">{val.title}</h3>
                <p className="text-forest-900/60 leading-relaxed font-light">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM - Cinematic Grid */}
      <section className="py-32 bg-forest-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <span className="text-gold-500 uppercase tracking-[0.3em] text-xs font-bold mb-4 block">The Artisans</span>
              <h2 className="text-5xl md:text-6xl font-serif font-medium text-cream-50">Meet the <span className="italic text-gold-500">Team</span></h2>
            </div>
            <p className="text-cream-100/60 max-w-md text-right font-light">
              The passionate souls who work tirelessly behind the scenes to bring you the VanaBella experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Sarah Jenkins", role: "Co-Founder & Head Chef", img: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=600&auto=format&fit=crop" },
              { name: "David Chen", role: "Co-Founder & Operations", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop" },
              { name: "Elena Rodriguez", role: "Pastry Chef", img: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?q=80&w=600&auto=format&fit=crop" },
              { name: "Marcus Johnson", role: "Head Barista", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop" }
            ].map((member, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative h-[500px] w-full overflow-hidden mb-6">
                  <Image 
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-serif font-bold text-cream-50">{member.name}</h3>
                    <p className="text-gold-500 text-xs uppercase tracking-widest mt-1">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
