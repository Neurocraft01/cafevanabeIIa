"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import Image from "next/image";

const navLinks = [
  { name: "Menu", href: "/menu" },
  { name: "Gallery", href: "/gallery" },
  { name: "Workshop", href: "/workshop" },
  { name: "Celebration", href: "/celebration" },
  { name: "Co-working", href: "/coworking" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname?.startsWith("/admin")) return null;

  // Determine if we are on the home page for initial transparency
  const isHome = pathname === "/";

  return (
    <nav
      className="fixed top-0 w-full z-50 bg-white shadow-sm py-2 transition-all duration-300 border-b border-emerald-100"
    >
      <div className="container mx-auto px-4 md:px-12 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="relative z-[60] group">
          <div className="flex items-center h-12 md:h-14 overflow-hidden bg-gradient-to-br from-emerald-50 to-white rounded-lg px-2 shadow-sm group-hover:shadow-md transition-shadow">
            <Image 
              src="/logo.jpg" 
              alt="Cafe VanaBella Logo" 
              width={120} 
              height={48} 
              className="object-contain object-center w-auto h-full mix-blend-multiply"
              style={{ objectPosition: 'center' }}
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold uppercase tracking-wide transition-all duration-300 relative group text-emerald-900 hover:text-emerald-600"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full bg-gradient-to-r from-emerald-500 to-emerald-700"></span>
            </Link>
          ))}
          <Link
            href="/reservations"
            className="px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800"
          >
            Book a Table
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={clsx(
            "md:hidden relative z-[60] transition-colors duration-300 p-2 rounded-lg hover:bg-emerald-50",
            "text-emerald-950"
          )}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[45] md:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white z-[50] flex flex-col shadow-2xl overflow-hidden"
            >
              {/* Mobile Menu Header */}
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 pt-6 pb-5 px-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-cinzel font-bold text-white">Menu</h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto py-4 px-3 bg-gray-50">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={clsx(
                        "block px-4 py-3 mb-2 rounded-lg text-sm font-bold uppercase tracking-wide transition-all duration-200",
                        pathname === link.href
                          ? "bg-emerald-600 text-white shadow-md"
                          : "text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="p-4 border-t border-gray-200 bg-white">
                <Link
                  href="/reservations"
                  onClick={() => setIsOpen(false)}
                  className="block w-full px-4 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold uppercase tracking-wide text-xs text-center rounded-lg hover:from-emerald-700 hover:to-emerald-800 transition-all shadow-lg"
                >
                  Book a Table
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
