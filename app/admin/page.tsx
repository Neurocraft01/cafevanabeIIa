"use client";

import { useState, useEffect } from "react";
import { Lock, Mail, ArrowRight, LayoutDashboard, Users, Calendar, Settings, LogOut, Bell, Search, ChevronDown, Image as ImageIcon, Plus, Trash2, Check, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// --- Mock Data (Simulating Database) ---
const INITIAL_RESERVATIONS: any[] = [];

const INITIAL_EVENTS: any[] = [];

const INITIAL_GALLERY: any[] = [];

export default function AdminPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("Overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Data States
  const [reservations, setReservations] = useState(INITIAL_RESERVATIONS);
  const [events, setEvents] = useState(INITIAL_EVENTS);
  const [gallery, setGallery] = useState(INITIAL_GALLERY);

  // Gallery Form State
  const [newImage, setNewImage] = useState({ src: "", category: "Interior", title: "" });

  // Load data from localStorage on mount (Client-side persistence)
  useEffect(() => {
    const savedGallery = localStorage.getItem("vanaBella_gallery");
    if (savedGallery) setGallery(JSON.parse(savedGallery));
    
    const savedReservations = localStorage.getItem("vanaBella_reservations");
    if (savedReservations) setReservations(JSON.parse(savedReservations));
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("vanaBella_gallery", JSON.stringify(gallery));
      localStorage.setItem("vanaBella_reservations", JSON.stringify(reservations));
    }
  }, [gallery, reservations, isLoggedIn]);


  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "admin@cafevanabella.com" && password === "admin123") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
  };

  const handleAddImage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newImage.src || !newImage.title) return;
    
    const item = { ...newImage, id: Date.now() };
    setGallery([item, ...gallery]);
    setNewImage({ src: "", category: "Interior", title: "" });
  };

  const handleDeleteImage = (id: number) => {
    setGallery(gallery.filter(img => img.id !== id));
  };

  const handleStatusChange = (id: number, newStatus: string) => {
    setReservations(reservations.map(res => 
      res.id === id ? { ...res, status: newStatus } : res
    ));
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-forest-950 flex items-center justify-center relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2000&auto=format&fit=crop"
            alt="Admin Background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/80 to-forest-950/40" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full max-w-md p-8"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 shadow-2xl">
            <div className="text-center mb-10">
              <span className="text-gold-500 uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Restricted Access</span>
              <h1 className="text-3xl font-serif font-bold text-cream-50">Admin Portal</h1>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-cream-100/60 font-medium ml-1">Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gold-500/50 group-focus-within:text-gold-500 transition-colors w-5 h-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-black/20 border border-white/10 text-cream-50 pl-12 pr-4 py-4 focus:outline-none focus:border-gold-500/50 transition-colors placeholder:text-white/20"
                    placeholder="admin@cafevanabella.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-cream-100/60 font-medium ml-1">Password</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gold-500/50 group-focus-within:text-gold-500 transition-colors w-5 h-5" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-black/20 border border-white/10 text-cream-50 pl-12 pr-4 py-4 focus:outline-none focus:border-gold-500/50 transition-colors placeholder:text-white/20"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-red-400 text-sm text-center bg-red-500/10 py-2 border border-red-500/20"
                  >
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                className="w-full bg-gold-500 text-forest-950 py-4 font-bold uppercase tracking-widest hover:bg-gold-400 transition-all hover:scale-[1.02] shadow-lg shadow-gold-500/20 mt-4"
              >
                Enter Dashboard
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-forest-950 flex text-cream-50 font-sans">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/80 z-40 md:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className={`w-72 bg-black/90 backdrop-blur-xl border-r border-white/5 flex flex-col fixed h-full z-50 transition-transform duration-300 md:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-8 border-b border-white/5 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-serif font-bold text-cream-50">Vana<span className="text-gold-500">Bella</span></h2>
            <p className="text-[10px] text-gold-500/60 uppercase tracking-[0.3em] mt-2">Management Console</p>
          </div>
          <button onClick={() => setIsMobileMenuOpen(false)} className="md:hidden text-cream-100/60 hover:text-cream-50">
            <ChevronDown className="rotate-90" />
          </button>
        </div>
        
        <nav className="flex-1 p-6 space-y-2">
          {[
            { icon: LayoutDashboard, label: "Overview" },
            { icon: Users, label: "Reservations" },
            { icon: Calendar, label: "Events" },
            { icon: ImageIcon, label: "Gallery" },
            { icon: Settings, label: "Settings" },
          ].map((item, idx) => (
            <button 
              key={idx}
              onClick={() => { setActiveTab(item.label); setIsMobileMenuOpen(false); }}
              className={`flex items-center w-full px-4 py-4 transition-all group ${activeTab === item.label ? 'bg-gold-500/10 border-r-2 border-gold-500' : 'hover:bg-white/5 hover:pl-6'}`}
            >
              <item.icon size={18} className={`mr-4 ${activeTab === item.label ? 'text-gold-500' : 'text-cream-100/40 group-hover:text-cream-50'}`} /> 
              <span className={`text-sm tracking-wide ${activeTab === item.label ? 'text-gold-500 font-medium' : 'text-cream-100/60 group-hover:text-cream-50'}`}>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-white/5">
          <button 
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-3 text-red-400/60 hover:text-red-400 hover:bg-red-500/5 transition-colors"
          >
            <LogOut size={18} className="mr-4" />
            <span className="text-sm tracking-wide uppercase">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-72 min-h-screen bg-forest-950 relative">
        {/* Header */}
        <header className="h-20 border-b border-white/5 bg-forest-950/80 backdrop-blur-md sticky top-0 z-30 px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden text-cream-50">
              <LayoutDashboard />
            </button>
            <div className="flex items-center text-cream-100/40 text-sm">
              <span className="hidden md:inline">Dashboard</span>
              <span className="mx-2 hidden md:inline">/</span>
              <span className="text-cream-50">{activeTab}</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative text-cream-100/60 hover:text-gold-500 transition-colors">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-gold-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-white/5">
              <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-forest-950 font-bold text-xs">
                AD
              </div>
              <span className="text-sm font-medium text-cream-50">Admin User</span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8 md:p-12 max-w-7xl mx-auto">
          
          {/* OVERVIEW TAB */}
          {activeTab === "Overview" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <div className="mb-12">
                <h1 className="text-3xl font-serif font-bold text-cream-50 mb-2">Welcome Back</h1>
                <p className="text-cream-100/60 font-light">Here's what's happening at VanaBella today.</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                {[
                  { label: "Total Bookings", value: reservations.length.toString(), change: "+12%", trend: "up" },
                  { label: "Revenue", value: "$8,430", change: "+8%", trend: "up" },
                  { label: "New Customers", value: "45", change: "+24%", trend: "up" },
                  { label: "Pending Requests", value: reservations.filter(r => r.status === "Pending").length.toString(), change: "-2%", trend: "down" },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/5 p-6 hover:border-gold-500/30 transition-colors group">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs uppercase tracking-widest text-cream-100/40">{stat.label}</span>
                      <span className={`text-xs font-bold ${stat.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>{stat.change}</span>
                    </div>
                    <div className="text-3xl font-serif font-bold text-cream-50 group-hover:text-gold-500 transition-colors">{stat.value}</div>
                  </div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white/5 border border-white/5 p-8">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="font-serif font-bold text-xl">Recent Reservations</h3>
                    <button onClick={() => setActiveTab("Reservations")} className="text-xs uppercase tracking-widest text-gold-500 hover:text-gold-400">View All</button>
                  </div>
                  <div className="space-y-4">
                    {reservations.slice(0, 4).map((res, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-forest-900 flex items-center justify-center text-gold-500 font-serif font-bold">
                            {res.guests}
                          </div>
                          <div>
                            <div className="font-medium text-cream-50">{res.name}</div>
                            <div className="text-xs text-cream-100/40">{res.date}, {res.time}</div>
                          </div>
                        </div>
                        <span className={`px-3 py-1 text-xs uppercase tracking-wider font-bold ${
                          res.status === 'Confirmed' ? 'bg-green-500/10 text-green-400' : 
                          res.status === 'Pending' ? 'bg-yellow-500/10 text-yellow-400' : 
                          'bg-red-500/10 text-red-400'
                        }`}>{res.status}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 border border-white/5 p-8">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="font-serif font-bold text-xl">Kitchen Status</h3>
                    <button className="text-xs uppercase tracking-widest text-gold-500 hover:text-gold-400">Manage</button>
                  </div>
                  <div className="space-y-6">
                    {[
                      { item: "Wagyu Steak", stock: 85 },
                      { item: "Truffle Pasta", stock: 45 },
                      { item: "Sea Bass", stock: 12 },
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-cream-100/80">{item.item}</span>
                          <span className={item.stock < 20 ? "text-red-400" : "text-green-400"}>{item.stock}% Stock</span>
                        </div>
                        <div className="h-1 bg-white/10 w-full overflow-hidden">
                          <div 
                            className={`h-full ${item.stock < 20 ? 'bg-red-500' : 'bg-gold-500'}`} 
                            style={{ width: `${item.stock}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* RESERVATIONS TAB */}
          {activeTab === "Reservations" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-serif font-bold">Reservations</h2>
                <div className="flex gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4" />
                    <input type="text" placeholder="Search guests..." className="bg-white/5 border border-white/10 pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-gold-500" />
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-white/5 text-xs uppercase tracking-widest text-cream-100/60">
                    <tr>
                      <th className="p-6 font-medium">Guest</th>
                      <th className="p-6 font-medium">Date & Time</th>
                      <th className="p-6 font-medium">Guests</th>
                      <th className="p-6 font-medium">Status</th>
                      <th className="p-6 font-medium text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {reservations.map((res) => (
                      <tr key={res.id} className="hover:bg-white/5 transition-colors">
                        <td className="p-6">
                          <div className="font-medium text-cream-50">{res.name}</div>
                          <div className="text-xs text-cream-100/40">{res.email}</div>
                        </td>
                        <td className="p-6 text-sm text-cream-100/80">{res.date} at {res.time}</td>
                        <td className="p-6 text-sm text-cream-100/80">{res.guests} People</td>
                        <td className="p-6">
                          <span className={`px-3 py-1 text-xs uppercase tracking-wider font-bold ${
                            res.status === 'Confirmed' ? 'bg-green-500/10 text-green-400' : 
                            res.status === 'Pending' ? 'bg-yellow-500/10 text-yellow-400' : 
                            'bg-red-500/10 text-red-400'
                          }`}>{res.status}</span>
                        </td>
                        <td className="p-6 text-right space-x-2">
                          {res.status === 'Pending' && (
                            <>
                              <button onClick={() => handleStatusChange(res.id, 'Confirmed')} className="p-2 hover:bg-green-500/20 text-green-400 rounded transition-colors"><Check size={16} /></button>
                              <button onClick={() => handleStatusChange(res.id, 'Cancelled')} className="p-2 hover:bg-red-500/20 text-red-400 rounded transition-colors"><X size={16} /></button>
                            </>
                          )}
                          {res.status === 'Confirmed' && (
                             <button onClick={() => handleStatusChange(res.id, 'Cancelled')} className="text-xs text-red-400 hover:underline">Cancel</button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* EVENTS TAB */}
          {activeTab === "Events" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-serif font-bold">Upcoming Events</h2>
                <button className="bg-gold-500 text-forest-950 px-6 py-2 font-bold uppercase tracking-widest text-xs hover:bg-gold-400 transition-colors">
                  Create Event
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                  <div key={event.id} className="bg-white/5 border border-white/10 p-6 group hover:border-gold-500/50 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs uppercase tracking-widest text-gold-500">{event.type}</span>
                      <span className="text-xs text-cream-100/40">{event.date}</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-2">{event.title}</h3>
                    <div className="w-full bg-white/10 h-1.5 mt-4 mb-2">
                      <div className="bg-gold-500 h-full" style={{ width: `${(event.registered / event.capacity) * 100}%` }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-cream-100/60">
                      <span>{event.registered} Registered</span>
                      <span>Capacity: {event.capacity}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* GALLERY CMS TAB */}
          {activeTab === "Gallery" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-serif font-bold">Gallery Management</h2>
              </div>

              {/* Add Image Form */}
              <div className="bg-white/5 border border-white/10 p-8 mb-12">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2"><Plus size={18} className="text-gold-500" /> Add New Image</h3>
                <form onSubmit={handleAddImage} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-cream-100/60">Image URL</label>
                    <input 
                      type="text" 
                      value={newImage.src}
                      onChange={(e) => setNewImage({...newImage, src: e.target.value})}
                      placeholder="https://..." 
                      className="w-full bg-black/20 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-gold-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-cream-100/60">Title / Caption</label>
                    <input 
                      type="text" 
                      value={newImage.title}
                      onChange={(e) => setNewImage({...newImage, title: e.target.value})}
                      placeholder="e.g. Summer Terrace" 
                      className="w-full bg-black/20 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-gold-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-cream-100/60">Category</label>
                    <select 
                      value={newImage.category}
                      onChange={(e) => setNewImage({...newImage, category: e.target.value})}
                      className="w-full bg-black/20 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-gold-500 text-cream-50"
                    >
                      <option value="Interior">Interior</option>
                      <option value="Food">Food</option>
                      <option value="Events">Events</option>
                    </select>
                  </div>
                  <button type="submit" className="bg-gold-500 text-forest-950 font-bold uppercase tracking-widest text-xs py-3.5 hover:bg-gold-400 transition-colors">
                    Add to Gallery
                  </button>
                </form>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {gallery.map((img) => (
                  <div key={img.id} className="group relative aspect-square bg-white/5 border border-white/10 overflow-hidden">
                    <Image src={img.src} alt={img.title} fill className="object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                      <span className="text-gold-500 text-xs uppercase tracking-widest font-bold">{img.category}</span>
                      <span className="text-white font-serif">{img.title}</span>
                      <button 
                        onClick={() => handleDeleteImage(img.id)}
                        className="absolute top-2 right-2 bg-red-500/80 p-2 text-white hover:bg-red-500 transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* SETTINGS TAB */}
          {activeTab === "Settings" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <h2 className="text-3xl font-serif font-bold mb-8">System Settings</h2>
              <div className="bg-white/5 border border-white/10 p-8 max-w-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-6 border-b border-white/5">
                    <div>
                      <h4 className="font-bold">Maintenance Mode</h4>
                      <p className="text-xs text-cream-100/60">Disable public access to the site.</p>
                    </div>
                    <div className="w-12 h-6 bg-white/10 rounded-full relative cursor-pointer">
                      <div className="absolute left-1 top-1 w-4 h-4 bg-white/40 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pb-6 border-b border-white/5">
                    <div>
                      <h4 className="font-bold">Email Notifications</h4>
                      <p className="text-xs text-cream-100/60">Receive updates on new reservations.</p>
                    </div>
                    <div className="w-12 h-6 bg-gold-500 rounded-full relative cursor-pointer">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <button className="text-red-400 text-sm hover:text-red-300 font-medium">Reset System Data</button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </div>
      </main>
    </div>
  );
}
