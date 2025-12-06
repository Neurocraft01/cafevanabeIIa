"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Leaf, Flame, DollarSign, Download, ChevronRight } from "lucide-react";
import { menuItems, categories, MenuItem } from "@/data/menu";
import clsx from "clsx";
import Image from "next/image";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    veg: false,
    chefSpecial: false,
    under200: false,
  });

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      if (activeCategory !== "All" && item.category !== activeCategory) return false;
      if (searchQuery && !item.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      if (filters.veg && !item.isVeg) return false;
      if (filters.chefSpecial && !item.isChefSpecial) return false;
      if (filters.under200 && item.price >= 200) return false;
      return true;
    });
  }, [activeCategory, searchQuery, filters]);

  const toggleFilter = (key: keyof typeof filters) => {
    setFilters(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Group items by category for the "All" view
  const groupedItems = useMemo(() => {
    if (activeCategory !== "All") {
      return { [activeCategory]: filteredItems };
    }
    const groups: Record<string, MenuItem[]> = {};
    filteredItems.forEach(item => {
      if (!groups[item.category]) groups[item.category] = [];
      groups[item.category].push(item);
    });
    return groups;
  }, [activeCategory, filteredItems]);

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      
      {/* HEADER */}
      <header className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000&auto=format&fit=crop"
            alt="Menu Header"
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
            Our <span className="italic font-light">Menu</span>
          </motion.h1>
          <p className="text-gray-300 font-light tracking-widest uppercase text-sm md:text-base max-w-2xl mx-auto">
            Curated flavors for the mindful palate
          </p>
        </div>
      </header>

      {/* CONTROLS SECTION */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Categories */}
            <div className="flex overflow-x-auto pb-2 md:pb-0 gap-6 w-full md:w-auto scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={clsx(
                    "whitespace-nowrap text-sm font-bold uppercase tracking-widest transition-colors relative group",
                    activeCategory === cat ? "text-black" : "text-gray-400 hover:text-gray-600"
                  )}
                >
                  {cat}
                  {activeCategory === cat && (
                    <motion.div layoutId="underline" className="absolute -bottom-2 left-0 right-0 h-[2px] bg-black" />
                  )}
                </button>
              ))}
            </div>

            {/* Search & Filters */}
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input 
                  type="text" 
                  placeholder="Search dishes..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-black transition-colors"
                />
              </div>
              
              <div className="flex gap-2">
                <button 
                  onClick={() => toggleFilter('veg')}
                  className={clsx("p-2 rounded-full border transition-colors", filters.veg ? "bg-green-50 border-green-500 text-green-700" : "border-gray-200 text-gray-400 hover:border-gray-400")}
                  title="Vegetarian Only"
                >
                  <Leaf size={18} />
                </button>
                <button 
                  onClick={() => toggleFilter('chefSpecial')}
                  className={clsx("p-2 rounded-full border transition-colors", filters.chefSpecial ? "bg-orange-50 border-orange-500 text-orange-700" : "border-gray-200 text-gray-400 hover:border-gray-400")}
                  title="Chef's Specials"
                >
                  <Flame size={18} />
                </button>
                <a 
                  href="/Cafe new menu  (2).pdf" 
                  download
                  className="p-2 rounded-full border border-gray-200 text-gray-400 hover:border-black hover:text-black transition-colors"
                  title="Download Menu PDF"
                >
                  <Download size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MENU GRID */}
      <div className="container mx-auto px-4 py-16 min-h-[60vh]">
        {Object.keys(groupedItems).length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No dishes found matching your criteria.</p>
            <button 
              onClick={() => {setSearchQuery(""); setFilters({veg: false, chefSpecial: false, under200: false}); setActiveCategory("All");}}
              className="mt-4 text-black underline hover:text-gray-600"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          Object.entries(groupedItems).map(([category, items]) => (
            <div key={category} className="mb-16">
              <h2 className="text-3xl font-serif font-bold mb-8 border-l-4 border-black pl-4">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group bg-white border border-gray-100 hover:border-black transition-all duration-300 flex flex-col"
                  >
                    <div className="relative h-64 overflow-hidden bg-gray-100">
                      <Image 
                        src={item.image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop"} 
                        alt={item.name} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 right-4 flex flex-col gap-2">
                        {item.isVeg && <span className="bg-white/90 backdrop-blur p-1.5 rounded-full text-green-600 shadow-sm"><Leaf size={14} /></span>}
                        {item.isChefSpecial && <span className="bg-white/90 backdrop-blur p-1.5 rounded-full text-orange-500 shadow-sm"><Flame size={14} /></span>}
                      </div>
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-serif font-bold group-hover:text-gray-600 transition-colors">{item.name}</h3>
                        <span className="text-lg font-bold">${item.price}</span>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{item.description}</p>
                      <button className="w-full py-3 border border-black text-black font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2 group-hover:gap-3">
                        Add to Order <ChevronRight size={14} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
}
