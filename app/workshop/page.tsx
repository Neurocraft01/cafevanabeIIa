"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Users, ChefHat, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function WorkshopPage() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      
      {/* HERO */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2000&auto=format&fit=crop"
            alt="Workshop Hero"
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
            Culinary <span className="italic font-light">Workshops</span>
          </motion.h1>
          <p className="text-gray-300 font-light tracking-widest uppercase text-sm md:text-base">
            Master the art of cooking with our expert chefs
          </p>
        </div>
      </section>

      {/* WORKSHOPS LIST */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12">
            {[
              {
                title: "Pasta Making Masterclass",
                date: "Oct 15, 2023",
                time: "10:00 AM - 2:00 PM",
                price: "$120",
                image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1000&auto=format&fit=crop",
                description: "Learn the secrets of handmade pasta from dough to sauce. Includes lunch and wine pairing.",
                level: "Beginner"
              },
              {
                title: "Advanced Pastry Techniques",
                date: "Oct 22, 2023",
                time: "9:00 AM - 3:00 PM",
                price: "$180",
                image: "https://images.unsplash.com/photo-1587241321921-91a834d6d191?q=80&w=1000&auto=format&fit=crop",
                description: "Dive deep into the world of French pastries. Master croissants, eclairs, and macarons.",
                level: "Intermediate"
              },
              {
                title: "Sustainable Seafood",
                date: "Nov 05, 2023",
                time: "11:00 AM - 2:00 PM",
                price: "$150",
                image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?q=80&w=1000&auto=format&fit=crop",
                description: "Learn how to select, fillet, and prepare sustainable seafood dishes with seasonal ingredients.",
                level: "All Levels"
              }
            ].map((workshop, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group flex flex-col md:flex-row bg-white border border-gray-100 hover:border-black transition-all duration-300"
              >
                <div className="relative w-full md:w-1/3 h-64 md:h-auto overflow-hidden bg-gray-100">
                  <Image 
                    src={workshop.image}
                    alt={workshop.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest">
                    {workshop.level}
                  </div>
                </div>
                
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-serif font-bold mb-2 group-hover:text-gray-600 transition-colors">{workshop.title}</h3>
                      <p className="text-gray-500 leading-relaxed max-w-xl">{workshop.description}</p>
                    </div>
                    <span className="text-2xl font-bold">{workshop.price}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                    <div className="flex items-center gap-3 text-gray-500 text-sm">
                      <Calendar size={16} />
                      <span>{workshop.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-500 text-sm">
                      <Clock size={16} />
                      <span>{workshop.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-500 text-sm">
                      <ChefHat size={16} />
                      <span>Expert Chef</span>
                    </div>
                  </div>
                  
                  <button className="self-start px-8 py-3 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors flex items-center gap-2">
                    Reserve Spot <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-24 px-4 text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-serif font-bold mb-6">Private Workshops</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Looking for a unique team building event or private celebration? We offer customized private workshops for groups of 8-20 people.
          </p>
          <button className="px-8 py-4 border border-black text-black text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
            Inquire Now
          </button>
        </div>
      </section>

    </div>
  );
}
