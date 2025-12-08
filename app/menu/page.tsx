"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Leaf, Flame } from "lucide-react";
import { menuItems, categories, MenuItem } from "@/data/menu";
import clsx from "clsx";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    veg: false,
    chefSpecial: false,
  });

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      if (activeCategory !== "All" && item.category !== activeCategory) return false;
      if (searchQuery && !item.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      if (filters.veg && !item.isVeg) return false;
      if (filters.chefSpecial && !item.isChefSpecial) return false;
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
    <div className="min-h-screen bg-[#fdfbf7] text-[#2c2c2c] font-serif selection:bg-emerald-900 selection:text-white">
      
      {/* PAPER TEXTURE OVERLAY */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>

      {/* HEADER */}
      <header className="relative py-20 px-4 text-center border-b-4 border-double border-emerald-900/20 bg-[#f4f1ea]">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-emerald-900 text-sm font-bold tracking-[0.3em] uppercase mb-4">Est. 2024</h2>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter text-emerald-950">
              Cafe Vanabella
            </h1>
            <div className="flex items-center justify-center gap-4 text-emerald-800/60 mb-8">
              <span className="h-px w-12 bg-emerald-900/30"></span>
              <span className="italic text-xl">Fine Dining & Coffee</span>
              <span className="h-px w-12 bg-emerald-900/30"></span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* CONTROLS SECTION */}
      <div className="sticky top-0 z-40 bg-[#fdfbf7]/95 backdrop-blur-sm border-b border-emerald-900/10 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            
            {/* Categories */}
            <div className="flex overflow-x-auto pb-2 lg:pb-0 gap-6 w-full lg:w-auto scrollbar-hide justify-center lg:justify-start">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={clsx(
                    "whitespace-nowrap text-sm font-bold uppercase tracking-widest transition-all duration-300 relative group py-2",
                    activeCategory === cat 
                      ? "text-emerald-900" 
                      : "text-gray-400 hover:text-emerald-800"
                  )}
                >
                  {cat}
                  <span className={clsx(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-emerald-900 transform transition-transform duration-300 origin-left",
                    activeCategory === cat ? "scale-x-100" : "scale-x-0 group-hover:scale-x-50"
                  )}></span>
                </button>
              ))}
            </div>

            {/* Search & Filters */}
            <div className="flex items-center gap-4 w-full lg:w-auto justify-center lg:justify-end">
              <div className="relative w-full max-w-xs">
                <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-emerald-900/40" size={16} />
                <input 
                  type="text" 
                  placeholder="Search menu..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-4 py-1 bg-transparent border-b border-emerald-900/20 text-emerald-900 placeholder-emerald-900/30 focus:outline-none focus:border-emerald-900 transition-colors font-sans text-sm"
                />
              </div>
              
              <div className="flex gap-2">
                <button 
                  onClick={() => toggleFilter('veg')}
                  className={clsx("p-2 rounded-full transition-all duration-300 border", filters.veg ? "bg-emerald-100 text-emerald-800 border-emerald-200" : "bg-transparent text-gray-400 border-transparent hover:bg-emerald-50")}
                  title="Vegetarian Only"
                >
                  <Leaf size={16} />
                </button>
                <button 
                  onClick={() => toggleFilter('chefSpecial')}
                  className={clsx("p-2 rounded-full transition-all duration-300 border", filters.chefSpecial ? "bg-orange-100 text-orange-800 border-orange-200" : "bg-transparent text-gray-400 border-transparent hover:bg-orange-50")}
                  title="Chef's Specials"
                >
                  <Flame size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MENU CONTENT */}
      <div className="container mx-auto px-4 py-16 max-w-5xl relative z-10">
        {Object.keys(groupedItems).length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-block p-6 rounded-full bg-emerald-50 mb-4">
              <Search size={32} className="text-emerald-900/40" />
            </div>
            <h3 className="text-xl font-bold text-emerald-900 mb-2">No items found</h3>
            <button 
              onClick={() => {setSearchQuery(""); setFilters({veg: false, chefSpecial: false}); setActiveCategory("All");}}
              className="text-emerald-700 hover:underline italic"
            >
              Clear filters
            </button>
          </div>
        ) : (
          Object.entries(groupedItems).map(([category, items]) => (
            <motion.div 
              key={category} 
              className="mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Category Title */}
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-emerald-950 mb-2">{category}</h2>
                <div className="flex justify-center items-center gap-2">
                  <span className="h-px w-8 bg-emerald-900/20"></span>
                  <span className="text-emerald-900/40 text-xs uppercase tracking-widest">Selection</span>
                  <span className="h-px w-8 bg-emerald-900/20"></span>
                </div>
              </div>

              {/* Items List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                {items.map((item, idx) => (
                  <div key={item.id} className="group">
                    <div className="flex items-baseline justify-between mb-1 relative">
                      <h3 className="text-xl font-bold text-emerald-950 pr-4 bg-[#fdfbf7] relative z-10 group-hover:text-emerald-700 transition-colors">
                        {item.name}
                      </h3>
                      <div className="absolute bottom-1.5 left-0 w-full border-b border-dotted border-emerald-900/30 -z-0"></div>
                      <span className="text-xl font-bold text-emerald-900 pl-4 bg-[#fdfbf7] relative z-10">
                        ₹{item.price}
                      </span>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <p className="text-gray-600 text-sm italic leading-relaxed flex-1">
                        {item.description}
                      </p>
                      <div className="flex gap-1 mt-1">
                        {item.isVeg && (
                          <span title="Vegetarian" className="text-green-600">
                            <div className="w-3 h-3 border border-green-600 p-[1px] flex items-center justify-center">
                                <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                            </div>
                          </span>
                        )}
                        {item.isChefSpecial && (
                          <span title="Chef's Special" className="text-orange-500">
                            <Flame size={12} fill="currentColor" />
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* FOOTER DECORATION */}
      <div className="text-center pb-20 opacity-40">
        <div className="w-16 h-16 mx-auto border-2 border-emerald-900 rounded-full flex items-center justify-center">
          <span className="font-serif text-2xl text-emerald-900">V</span>
        </div>
      </div>
    </div>
  );
}