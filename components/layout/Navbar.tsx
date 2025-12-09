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
      className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-xl shadow-sm py-3 transition-all duration-300 border-b border-emerald-100/50"
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="relative z-50 group">
          <div className="flex items-center h-14 md:h-16 overflow-hidden bg-gradient-to-br from-emerald-50 to-white rounded-xl px-3 shadow-sm group-hover:shadow-md transition-shadow">
            <Image 
              src="/logo.jpg" 
              alt="Cafe VanaBella Logo" 
              width={140} 
              height={56} 
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
            "md:hidden relative z-50 transition-colors duration-300 p-2 rounded-lg hover:bg-emerald-50",
            "text-emerald-950"
          )}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full sm:w-80 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 z-40 flex flex-col shadow-2xl"
          >
            {/* Mobile Menu Header */}
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-cinzel font-bold text-white">Menu</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 overflow-y-auto py-8 px-6 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, type: "spring", damping: 20 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={clsx(
                      "block px-6 py-4 rounded-xl text-lg font-bold uppercase tracking-wide transition-all duration-300",
                      pathname === link.href
                        ? "bg-white text-emerald-900 shadow-lg"
                        : "text-white hover:bg-white/10"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="p-6 border-t border-white/10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="/reservations"
                  onClick={() => setIsOpen(false)}
                  className="block w-full px-8 py-4 bg-white text-emerald-900 font-bold uppercase tracking-wider text-center rounded-full hover:bg-emerald-50 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Book a Table
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
