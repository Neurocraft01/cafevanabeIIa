"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChefHat, Award, Users, Clock, Star } from "lucide-react";

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
              <p className="text-gray-600 leading-relaxed mb-6">
                Founded in 2024 in Pimple Nilakh, Pune, VanaBella began with a simple mission: to create a green urban sanctuary where nature meets exceptional culinary experiences. With 200+ plants, pet-friendly ambiance, and garden seating, what started as a vision has grown into a beloved destination for food enthusiasts and coffee lovers alike. Rated ⭐ 4.8/5 by 55+ verified guests.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                We believe that food is more than just sustenance—it's an experience, a connection. Every dish we serve tells a story of passion, quality, and authenticity. We source our ingredients locally, supporting our community's farmers and ensuring the freshest flavors on your plate.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold uppercase tracking-widest mb-2 text-sm">Our Philosophy</h4>
                  <p className="text-gray-500 text-sm">Fresh ingredients, authentic flavors, and a welcoming atmosphere for all.</p>
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
              { icon: ChefHat, label: "Master Chefs", value: "5+" },
              { icon: Award, label: "Menu Items", value: "100+" },
              { icon: Users, label: "Happy Guests", value: "5k+" },
              { icon: Clock, label: "Established", value: "2024" },
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
            <p className="text-gray-500 max-w-2xl mx-auto">The passionate individuals behind every dish at VanaBella.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Head Chef", role: "Culinary Director", img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop" },
              { name: "Sous Chef", role: "Kitchen Manager", img: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=800&auto=format&fit=crop" },
              { name: "Pastry Chef", role: "Dessert Specialist", img: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?q=80&w=800&auto=format&fit=crop" },
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

      {/* REVIEWS SECTION */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Guest <span className="italic text-gray-500">Reviews</span></h2>
            <p className="text-gray-500">What our community says about us.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Food Blogger",
                review: "The ambiance is simply magical. It feels like dining in a forest! The pasta was authentic and the coffee is the best in Pimple Nilakh.",
                rating: 5
              },
              {
                name: "Rahul Deshmukh",
                role: "Coworking Member",
                review: "I've been working from here for a month. The WiFi is fast, the seating is comfortable, and the staff is incredibly polite. Highly recommended!",
                rating: 5
              },
              {
                name: "Ananya Patel",
                role: "Regular Guest",
                review: "Celebrated my birthday here last week. The decoration was beautiful and the cake was delicious. Thank you VanaBella for making it special!",
                rating: 4
              }
            ].map((review, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 shadow-sm border border-gray-100"
              >
                <div className="flex gap-1 mb-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} className={i < review.rating ? "" : "text-gray-300"} />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{review.review}"</p>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest">{review.name}</h4>
                  <span className="text-xs text-gray-400">{review.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
