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
      className={clsx(
        "fixed w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-white shadow-lg py-3" 
          : isHome 
            ? "bg-white/5 backdrop-blur-sm py-6" 
            : "bg-white shadow-md py-4"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="relative z-50 group">
          <div className="flex items-center h-12 md:h-14 overflow-hidden">
            <Image 
              src="/logo.jpg" 
              alt="Cafe VanaBella Logo" 
              width={140} 
              height={56} 
              className={clsx(
                "object-cover object-center scale-125 transition-all duration-300",
                scrolled || !isHome ? "brightness-100" : "brightness-110 drop-shadow-2xl"
              )}
              style={{ objectPosition: 'center 50%' }}
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-110 relative group",
                scrolled || !isHome 
                  ? "text-gray-800 hover:text-black" 
                  : "text-white hover:text-gray-200 drop-shadow-md"
              )}
            >
              {link.name}
              <span className={clsx(
                "absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                scrolled || !isHome ? "bg-black" : "bg-white"
              )}></span>
            </Link>
          ))}
          <Link
            href="/reservations"
            className={clsx(
              "px-6 py-2.5 border-2 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg",
              scrolled || !isHome 
                ? "border-black text-black bg-white hover:bg-black hover:text-white" 
                : "border-white text-white bg-black/30 backdrop-blur-sm hover:bg-white hover:text-black"
            )}
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={clsx(
            "md:hidden relative z-50 transition-colors duration-300",
            scrolled || !isHome ? "text-black" : "text-white drop-shadow-lg"
          )}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
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
