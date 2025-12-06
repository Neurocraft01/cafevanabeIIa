"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Workshop", href: "/workshop" },
  { name: "Co-working", href: "/coworking" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname?.startsWith("/admin")) return null;

  return (
    <nav
      className={clsx(
        "fixed w-full z-50 transition-all duration-500 border-b",
        scrolled ? "bg-forest-950/90 backdrop-blur-md py-4 border-white/10" : "bg-transparent py-6 border-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif font-bold text-cream-50">
          Vana<span className="text-gold-500">Bella</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-medium text-sm uppercase tracking-widest text-cream-50/80 hover:text-gold-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-6 py-2 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-forest-950 transition-all font-bold uppercase tracking-widest text-xs"
          >
            Book a Table
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cream-50 hover:text-gold-500 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 bg-forest-950 z-40 pt-24 px-6"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-cream-50 text-2xl font-serif font-medium border-b border-white/10 pb-4 hover:text-gold-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="inline-block text-center w-full py-4 bg-gold-500 text-forest-950 font-bold uppercase tracking-widest mt-4"
                onClick={() => setIsOpen(false)}
              >
                Book a Table
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
