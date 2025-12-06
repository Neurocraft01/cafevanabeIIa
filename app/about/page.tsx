"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChefHat, Award, Users, Clock } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      
      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2000&auto=format&fit=crop"
            alt="Restaurant Interior"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6"
          >
            Our <span className="italic font-light">Story</span>
          </motion.h1>
          <p className="text-gray-300 font-light tracking-widest uppercase text-sm md:text-base max-w-2xl mx-auto">
            Crafting culinary experiences since 2024
          </p>
        </div>
      </section>

      {/* NARRATIVE SECTION */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[600px] w-full"
            >
              <Image 
                src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=1000&auto=format&fit=crop"
                alt="Chef Cooking"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gray-100 p-8 hidden md:flex flex-col justify-center items-center text-center border border-gray-200">
                <span className="text-5xl font-serif font-bold mb-2">2024</span>
                <span className="text-sm uppercase tracking-widest text-gray-500">Established</span>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold mb-8">Tradition Meets <span className="italic text-gray-500">Innovation</span></h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                Founded in the heart of the city, VanaBella began with a simple mission: to honor traditional cooking techniques while embracing modern flavors. What started as a small family kitchen has grown into a culinary destination.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                We believe that food is more than just sustenance—it's a language. Every dish we serve tells a story of its origin, the hands that prepared it, and the passion that drives us. We source our ingredients locally, supporting our community's farmers and ensuring the freshest flavors on your plate.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold uppercase tracking-widest mb-2 text-sm">Our Philosophy</h4>
                  <p className="text-gray-500 text-sm">Sustainable sourcing, zero waste, and authentic flavors.</p>
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest mb-2 text-sm">Our Promise</h4>
                  <p className="text-gray-500 text-sm">To deliver an unforgettable dining experience, every single time.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: ChefHat, label: "Master Chefs", value: "12" },
              { icon: Award, label: "Awards Won", value: "25+" },
              { icon: Users, label: "Happy Guests", value: "50k+" },
              { icon: Clock, label: "Years Open", value: "15" },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <stat.icon size={32} className="mb-4 text-gray-400" />
                <span className="text-4xl font-serif font-bold mb-2">{stat.value}</span>
                <span className="text-xs uppercase tracking-widest text-gray-500">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Meet the <span className="italic text-gray-500">Team</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto">The passionate individuals behind every dish.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Elena Rossi", role: "Executive Chef", img: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=800&auto=format&fit=crop" },
              { name: "Marco Chen", role: "Head Sommelier", img: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?q=80&w=800&auto=format&fit=crop" },
              { name: "Sarah James", role: "Pastry Chef", img: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?q=80&w=800&auto=format&fit=crop" },
            ].map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden"
              >
                <div className="relative h-[500px] w-full grayscale group-hover:grayscale-0 transition-all duration-500">
                  <Image 
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <h3 className="text-white text-2xl font-serif font-bold">{member.name}</h3>
                    <p className="text-gray-300 text-sm uppercase tracking-widest">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
