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
    <div className="min-h-screen bg-forest-950 text-cream-50 selection:bg-gold-500 selection:text-forest-950">
      
      {/* HEADER */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2000&auto=format&fit=crop"
          alt="Menu Header"
          fill
          className="object-cover brightness-[0.3]"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-serif font-medium text-cream-50 mb-4">Our <span className="italic text-gold-500">Menu</span></h1>
          <p className="text-gold-500 uppercase tracking-[0.3em] text-xs font-bold">Season 2024 • Chef's Selection</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20 max-w-5xl">
        
        {/* CONTROLS */}
        <div className="mb-16 space-y-8">
          {/* Search & Filters */}
          <div className="flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-8 gap-6">
            <div className="w-full md:w-1/3">
              <div className="relative group">
                <Search className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gold-500 group-focus-within:text-cream-50 transition-colors" size={20} />
                <input
                  type="text"
                  placeholder="Search dishes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-4 py-2 bg-transparent border-b border-white/10 focus:border-gold-500 focus:outline-none text-cream-50 placeholder:text-white/20 transition-colors font-serif italic text-lg"
                />
              </div>
            </div>

            <div className="flex gap-6 text-xs uppercase tracking-widest font-bold text-sage-300">
              <button onClick={() => toggleFilter("veg")} className={clsx("hover:text-gold-500 transition-colors flex items-center gap-2", filters.veg && "text-gold-500")}>
                <div className={clsx("w-3 h-3 border border-current", filters.veg && "bg-gold-500")}></div> Veg
              </button>
              <button onClick={() => toggleFilter("chefSpecial")} className={clsx("hover:text-gold-500 transition-colors flex items-center gap-2", filters.chefSpecial && "text-gold-500")}>
                <div className={clsx("w-3 h-3 border border-current", filters.chefSpecial && "bg-gold-500")}></div> Chef's Special
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={clsx(
                  "text-sm uppercase tracking-[0.2em] transition-all relative py-2",
                  activeCategory === cat ? "text-gold-500 font-bold" : "text-sage-400 hover:text-cream-50"
                )}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div layoutId="activeCat" className="absolute bottom-0 left-0 w-full h-[1px] bg-gold-500" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* MENU LIST */}
        <div className="space-y-20">
          {Object.entries(groupedItems).map(([category, items]) => (
            items.length > 0 && (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-serif text-gold-500 mb-10 text-center italic decoration-gold-500/30 underline-offset-8 decoration-1">
                  — {category} —
                </h2>
                
                <div className="grid grid-cols-1 gap-x-16 gap-y-12">
                  {items.map((item) => (
                    <div key={item.id} className="group">
                      <div className="flex items-baseline justify-between mb-2 relative">
                        <h3 className="text-xl md:text-2xl font-serif text-cream-50 group-hover:text-gold-400 transition-colors pr-4 bg-forest-950 z-10 relative">
                          {item.name}
                        </h3>
                        <div className="flex-grow border-b border-dotted border-white/20 absolute bottom-2 w-full"></div>
                        <span className="text-xl font-serif text-gold-500 pl-4 bg-forest-950 z-10 relative">₹{item.price}</span>
                      </div>
                      
                      <div className="flex justify-between items-start">
                        <p className="text-sage-300 font-light text-sm md:text-base max-w-2xl leading-relaxed">
                          {item.description || "A classic preparation with our signature twist."}
                        </p>
                        <div className="flex gap-2 mt-1">
                           {item.isVeg && <Leaf size={14} className="text-green-400" />}
                           {item.isChefSpecial && <Flame size={14} className="text-gold-500" />}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          ))}

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-sage-400 font-serif italic">"Simplicity is the ultimate sophistication."</p>
              <p className="text-sm text-sage-500 mt-2 uppercase tracking-widest">No items match your search.</p>
            </div>
          )}
        </div>

        <div className="mt-32 text-center border-t border-white/10 pt-12">
           <p className="text-sage-400 text-sm font-light italic">
             * All prices are exclusive of government taxes. Service charge of 10% is discretionary.
           </p>
        </div>

      </div>
    </div>
  );
}
