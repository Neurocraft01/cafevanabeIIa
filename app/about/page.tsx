"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChefHat, Award, Users, Clock, Star } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      
      {/* HERO BANNER */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-emerald-950">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2000&auto=format&fit=crop"
            alt="About Hero"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 font-cinzel"
          >
            Our <span className="italic font-light font-serif">Story</span>
          </motion.h1>
          <p className="text-emerald-100 font-light tracking-widest uppercase text-sm md:text-base max-w-2xl mx-auto">
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
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb4c?q=80&w=1000&auto=format&fit=crop"
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
              },
              {
                name: "Aanya P.",
                role: "Guest",
                review: "Loved the vibe and the pastries. Perfect for birthdays!",
                rating: 5
              },
              {
                name: "Rahul M.",
                role: "Coffee Lover",
                review: "Cozy spot, great coffee, friendly staff.",
                rating: 5
              },
              {
                name: "Priya S.",
                role: "Parent",
                review: "Booked for my kid’s party — seamless experience.",
                rating: 5
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

      {/* 360 VIRTUAL TOUR SECTION */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-cinzel font-bold mb-4 text-emerald-950">
              Experience Our <span className="italic font-light">Space</span>
            </h2>
            <p className="text-gray-600 font-serif max-w-2xl mx-auto">
              Take a virtual tour of our beautiful cafe and explore the ambiance before you visit
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-3xl overflow-hidden shadow-2xl border border-emerald-200"
          >
            <div className="aspect-video relative bg-emerald-900/10 flex items-center justify-center">
              {/* Placeholder for 360 view - can be replaced with actual 360 viewer */}
              <div className="text-center p-12">
                <div className="w-24 h-24 mx-auto mb-6 bg-emerald-600 rounded-full flex items-center justify-center animate-pulse">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-cinzel font-bold text-emerald-950 mb-3">360° Virtual Tour</h3>
                <p className="text-emerald-800 mb-6">Interactive tour coming soon</p>
                <button className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold uppercase tracking-wider text-sm transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Launch Virtual Tour
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* LOCATION & CONTACT SECTION */}
      <section className="py-24 px-4 bg-emerald-50 relative">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-cinzel font-bold mb-4 text-emerald-950">
              Visit <span className="italic font-light">Us</span>
            </h2>
            <p className="text-gray-600 font-serif">Find us in the heart of Pimple Nilakh</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Google Maps */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl border border-emerald-200"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.0358!2d73.7713!3d18.6015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM2JzA1LjQiTiA3M8KwNDYnMTYuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </motion.div>

            {/* Contact Details */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-emerald-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-emerald-100 rounded-full">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-cinzel font-bold text-emerald-950 mb-2">Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Pimple Nilakh<br />
                      Pune, Maharashtra 411027<br />
                      India
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border border-emerald-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-emerald-100 rounded-full">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-cinzel font-bold text-emerald-950 mb-2">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+919876543210" className="hover:text-emerald-600 transition-colors">+91 98765 43210</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border border-emerald-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-emerald-100 rounded-full">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-cinzel font-bold text-emerald-950 mb-2">Hours</h3>
                    <p className="text-gray-600">
                      Monday - Sunday<br />
                      9:00 AM - 11:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border border-emerald-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-emerald-100 rounded-full">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-cinzel font-bold text-emerald-950 mb-2">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@cafevanabella.com" className="hover:text-emerald-600 transition-colors">info@cafevanabella.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
