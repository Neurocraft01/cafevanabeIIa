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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2000&auto=format&fit=crop"
            alt="Admin Background"
            fill
            className="object-cover opacity-10"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 w-full max-w-md p-8 bg-white shadow-2xl border border-gray-100"
        >
          <div className="text-center mb-10">
            <h1 className="text-3xl font-serif font-bold text-black mb-2">Admin Portal</h1>
            <p className="text-gray-500 text-sm">Secure access for management only</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 focus:border-black focus:outline-none transition-colors text-black"
                  placeholder="admin@cafevanabella.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 focus:border-black focus:outline-none transition-colors text-black"
                  placeholder=""
                />
              </div>
            </div>

            {error && (
              <p className="text-red-500 text-xs text-center bg-red-50 py-2">{error}</p>
            )}

            <button 
              type="submit" 
              className="w-full bg-black text-white py-3 font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              Login <ArrowRight size={16} />
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex text-black font-sans">
      
      {/* SIDEBAR */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 lg:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 border-b border-gray-100">
          <div className="h-12 overflow-hidden">
            <Image 
              src="/logo.jpg" 
              alt="Cafe VanaBella Logo" 
              width={140} 
              height={48} 
              className="object-cover object-center scale-125"
              style={{ objectPosition: 'center 50%' }}
            />
          </div>
          <p className="text-xs text-gray-400 mt-3 uppercase tracking-widest">Admin Dashboard</p>
        </div>

        <nav className="p-4 space-y-2">
          {[
            { name: "Overview", icon: LayoutDashboard },
            { name: "Reservations", icon: Calendar },
            { name: "Gallery", icon: ImageIcon },
            { name: "Settings", icon: Settings },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => { setActiveTab(item.name); setIsMobileMenuOpen(false); }}
              className={`w-full flex items-center gap-4 px-6 py-4 text-sm font-medium transition-colors ${
                activeTab === item.name 
                  ? "bg-black text-white" 
                  : "text-gray-500 hover:bg-gray-100 hover:text-black"
              }`}
            >
              <item.icon size={20} />
              {item.name}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-gray-100">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-6 py-4 text-sm font-medium text-red-500 hover:bg-red-50 transition-colors"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 lg:ml-64 min-h-screen">
        
        {/* TOP BAR */}
        <header className="bg-white border-b border-gray-200 h-20 flex items-center justify-between px-8 sticky top-0 z-40">
          <div className="flex items-center gap-4 lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-black">
              <LayoutDashboard size={24} />
            </button>
          </div>

          <div className="flex items-center gap-6 ml-auto">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-black w-64"
              />
            </div>
            <button className="relative text-gray-500 hover:text-black">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-xs">AD</div>
              <span className="text-sm font-medium hidden md:block">Admin User</span>
              <ChevronDown size={14} className="text-gray-400" />
            </div>
          </div>
        </header>

        {/* DASHBOARD CONTENT */}
        <div className="p-8">
          
          {/* OVERVIEW TAB */}
          {activeTab === "Overview" && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: "Total Reservations", value: reservations.length, change: "+12%", icon: Users },
                  { label: "Active Events", value: "3", change: "Coming Soon", icon: Calendar },
                  { label: "Gallery Images", value: gallery.length, change: "Updated", icon: ImageIcon },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white p-6 border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <stat.icon size={24} className="text-black" />
                      </div>
                      <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">{stat.change}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-black mb-1">{stat.value}</h3>
                    <p className="text-gray-500 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-gray-100 p-6">
                <h3 className="text-lg font-bold mb-6">Recent Activity</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-100">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                      <p className="text-sm text-gray-600">New reservation received from <span className="font-bold text-black">John Doe</span></p>
                      <span className="ml-auto text-xs text-gray-400">2 mins ago</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* RESERVATIONS TAB */}
          {activeTab === "Reservations" && (
            <div className="bg-white border border-gray-100">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h3 className="text-lg font-bold">All Reservations</h3>
                <button className="flex items-center gap-2 px-4 py-2 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-gray-800">
                  <Plus size={16} /> New Booking
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50 text-gray-500 uppercase tracking-wider font-bold text-xs">
                    <tr>
                      <th className="p-6">Guest</th>
                      <th className="p-6">Date & Time</th>
                      <th className="p-6">Guests</th>
                      <th className="p-6">Status</th>
                      <th className="p-6">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {reservations.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="p-8 text-center text-gray-400 italic">No reservations found.</td>
                      </tr>
                    ) : (
                      reservations.map((res) => (
                        <tr key={res.id} className="hover:bg-gray-50 transition-colors">
                          <td className="p-6 font-medium">{res.name}<br/><span className="text-xs text-gray-400 font-normal">{res.email}</span></td>
                          <td className="p-6">{res.date}<br/><span className="text-xs text-gray-400">{res.time}</span></td>
                          <td className="p-6">{res.guests} People</td>
                          <td className="p-6">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${
                              res.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 
                              res.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                            }`}>
                              {res.status}
                            </span>
                          </td>
                          <td className="p-6">
                            <div className="flex gap-2">
                              <button onClick={() => handleStatusChange(res.id, 'Confirmed')} className="p-2 hover:bg-green-50 text-green-600 rounded"><Check size={16} /></button>
                              <button onClick={() => handleStatusChange(res.id, 'Cancelled')} className="p-2 hover:bg-red-50 text-red-600 rounded"><X size={16} /></button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* GALLERY TAB */}
          {activeTab === "Gallery" && (
            <div className="space-y-8">
              {/* Add New Image */}
              <div className="bg-white border border-gray-100 p-6">
                <h3 className="text-lg font-bold mb-6">Add New Image</h3>
                <form onSubmit={handleAddImage} className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Image URL</label>
                    <input 
                      type="text" 
                      value={newImage.src}
                      onChange={(e) => setNewImage({...newImage, src: e.target.value})}
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 focus:border-black focus:outline-none"
                      placeholder="https://..."
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Title</label>
                    <input 
                      type="text" 
                      value={newImage.title}
                      onChange={(e) => setNewImage({...newImage, title: e.target.value})}
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 focus:border-black focus:outline-none"
                      placeholder="Image Title"
                    />
                  </div>
                  <button type="submit" className="px-6 py-2 bg-black text-white font-bold uppercase tracking-widest hover:bg-gray-800 h-[42px]">
                    Add Image
                  </button>
                </form>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {gallery.map((img) => (
                  <div key={img.id} className="group relative aspect-square bg-gray-100 overflow-hidden">
                    <Image 
                      src={img.src || img.url || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop"} 
                      alt={img.title || img.caption} 
                      fill 
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button 
                        onClick={() => handleDeleteImage(img.id)}
                        className="p-3 bg-white text-red-600 rounded-full hover:bg-red-50 transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white font-medium truncate">{img.title || img.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
