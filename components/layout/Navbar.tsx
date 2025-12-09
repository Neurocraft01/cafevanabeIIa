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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-serif font-bold text-black hover:text-gray-500 transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
            >
              <Link
                href="/reservations"
                onClick={() => setIsOpen(false)}
                className="px-8 py-3 bg-black text-white font-bold uppercase tracking-widest text-sm hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Book Now
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
