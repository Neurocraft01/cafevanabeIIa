"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const navLinks = [
  { name: "Menu", href: "/menu" },
  { name: "Workshop", href: "/workshop" },
  { name: "Co-working", href: "/coworking" },
  { name: "Gallery", href: "/gallery" },
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
        "fixed w-full z-50 transition-all duration-500",
        scrolled ? "bg-white/95 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-8"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="relative z-50 group">
          <h1 className={clsx("text-2xl md:text-3xl font-serif font-bold tracking-tighter transition-colors", scrolled || !isHome ? "text-black" : "text-white")}>
            VANA<span className="italic font-light">BELLA</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "text-sm font-semibold uppercase tracking-wider hover:text-gray-500 transition-colors drop-shadow-sm",
                scrolled || !isHome ? "text-black" : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/reservations"
            className={clsx(
              "px-6 py-2.5 border-2 text-sm font-bold uppercase tracking-wider transition-all hover:bg-black hover:text-white hover:border-black shadow-md",
              scrolled || !isHome ? "border-black text-black bg-white" : "border-white text-white bg-black/20 backdrop-blur-sm"
            )}
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={clsx("md:hidden relative z-50", scrolled || !isHome ? "text-black" : "text-white")}
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
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-serif font-bold text-black hover:text-gray-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/reservations"
              onClick={() => setIsOpen(false)}
              className="px-8 py-3 bg-black text-white font-bold uppercase tracking-widest text-sm hover:bg-gray-800 transition-colors"
            >
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
