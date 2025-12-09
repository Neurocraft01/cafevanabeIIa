"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Users, Music, Gift, Cake, Star } from "lucide-react";

export default function CelebrationPage() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      
      {/* HERO BANNER */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-emerald-950">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2000&auto=format&fit=crop"
            alt="Celebration Hero"
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
            Celebrate <span className="italic font-light font-serif">Life</span>
          </motion.h1>
          <p className="text-emerald-100 font-light tracking-widest uppercase text-sm md:text-base max-w-2xl mx-auto">
            Make your special moments unforgettable at VanaBella
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Your Perfect <span className="italic text-gray-500">Celebration Spot</span></h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-12">
            Whether it's a birthday bash, an anniversary dinner, or a corporate gathering, VanaBella offers the perfect blend of ambiance, culinary delight, and impeccable service. Let us handle the details while you make memories.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { icon: Cake, label: "Custom Cakes" },
              { icon: Users, label: "Private Areas" },
              { icon: Music, label: "Music System" },
              { icon: Gift, label: "Decorations" },
              { icon: Star, label: "Dedicated Staff" },
              { icon: Calendar, label: "Flexible Booking" },
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center p-6 border border-gray-100 hover:border-black transition-colors"
              >
                <feature.icon size={24} className="mb-4 text-gray-400" />
                <span className="text-sm font-bold uppercase tracking-widest">{feature.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE VANABELLA (Moved from Coworking) */}
      <section className="py-24 px-4 bg-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4 text-emerald-950">Why Choose <span className="italic text-emerald-600">VanaBella</span>?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Experience the perfect blend of celebration and nature in our thoughtfully designed space.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 border border-emerald-100 hover:border-emerald-600 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-emerald-100 flex items-center justify-center mb-6 rounded-full">
                <Star size={24} className="text-emerald-800" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-emerald-950">Exquisite Ambiance</h3>
              <p className="text-gray-600 leading-relaxed">A nature-inspired setting that provides the perfect backdrop for your photos and memories.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 border border-emerald-100 hover:border-emerald-600 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-emerald-100 flex items-center justify-center mb-6 rounded-full">
                <Cake size={24} className="text-emerald-800" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-emerald-950">Gourmet Catering</h3>
              <p className="text-gray-600 leading-relaxed">Customizable menus featuring our signature dishes and beverages to delight your guests.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 border border-emerald-100 hover:border-emerald-600 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-emerald-100 flex items-center justify-center mb-6 rounded-full">
                <Gift size={24} className="text-emerald-800" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-emerald-950">Personalized Decor</h3>
              <p className="text-gray-600 leading-relaxed">From balloons to floral arrangements, we tailor the decor to match your theme perfectly.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 border border-emerald-100 hover:border-emerald-600 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-emerald-100 flex items-center justify-center mb-6 rounded-full">
                <Users size={24} className="text-emerald-800" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-emerald-950">Dedicated Team</h3>
              <p className="text-gray-600 leading-relaxed">Our experienced staff will handle everything from planning to execution, so you can enjoy.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 border border-emerald-100 hover:border-emerald-600 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-emerald-100 flex items-center justify-center mb-6 rounded-full">
                <Music size={24} className="text-emerald-800" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-emerald-950">Entertainment</h3>
              <p className="text-gray-600 leading-relaxed">Music systems and AV equipment available to keep the party going all night long.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-white p-8 border border-emerald-100 hover:border-emerald-600 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-emerald-100 flex items-center justify-center mb-6 rounded-full">
                <Calendar size={24} className="text-emerald-800" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-emerald-950">Flexible Booking</h3>
              <p className="text-gray-600 leading-relaxed">Easy reservation process with flexible slots to suit your schedule and requirements.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Celebration Packages</h2>
            <p className="text-gray-500">Curated experiences for your special day.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Intimate Gathering",
                price: "₹999",
                per: "/person",
                features: ["Reserved Seating", "3-Course Meal", "Welcome Drink", "Basic Decoration"],
                highlight: false
              },
              {
                name: "Grand Celebration",
                price: "₹1,499",
                per: "/person",
                features: ["Private Area", "5-Course Meal", "Custom Cake (1kg)", "Premium Decoration", "Dedicated Server"],
                highlight: true
              },
              {
                name: "Corporate Event",
                price: "Custom",
                per: "",
                features: ["Full Venue Access", "Buffet Setup", "AV Equipment", "Branding Space", "Event Coordinator"],
                highlight: false
              }
            ].map((plan, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-8 border ${plan.highlight ? 'border-black bg-black text-white' : 'border-gray-200 bg-white text-black'} flex flex-col`}
              >
                {plan.highlight && (
                  <span className="absolute top-0 right-0 bg-gray-200 text-black text-xs font-bold px-3 py-1 uppercase tracking-widest">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold uppercase tracking-widest mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-serif font-bold">{plan.price}</span>
                  <span className={`text-sm ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>{plan.per}</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <span className={`w-1.5 h-1.5 rounded-full ${plan.highlight ? 'bg-white' : 'bg-black'}`}></span>
                      <span className={plan.highlight ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/reservations" 
                  className={`w-full py-4 text-center text-sm font-bold uppercase tracking-widest border-2 transition-all ${
                    plan.highlight 
                      ? 'border-white text-white hover:bg-white hover:text-black' 
                      : 'border-black text-black hover:bg-black hover:text-white'
                  }`}
                >
                  Book Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-black text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Ready to Celebrate?</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Book your spot now and let us make your special day truly magical.
          </p>
          <Link 
            href="/reservations" 
            className="inline-block px-12 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors"
          >
            Reserve Your Date
          </Link>
        </div>
      </section>

    </div>
  );
}
