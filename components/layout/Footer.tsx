"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();
  
  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="bg-forest-950 text-cream-50 py-20 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-bold text-cream-50">Vana<span className="text-gold-500">Bella</span></h3>
            <p className="text-sm leading-relaxed text-sage-300 font-light">
              Your Urban Oasis - Where Nature Meets Flavor. Experience the perfect blend of culinary excellence and serene atmosphere.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/10 hover:bg-gold-500 hover:text-forest-950 hover:border-gold-500 transition-all duration-300"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/10 hover:bg-gold-500 hover:text-forest-950 hover:border-gold-500 transition-all duration-300"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/10 hover:bg-gold-500 hover:text-forest-950 hover:border-gold-500 transition-all duration-300"><Twitter size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-gold-500 mb-6 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/menu" className="hover:text-gold-500 transition-colors hover:pl-2 duration-300 block text-sage-300">Our Menu</Link></li>
              <li><Link href="/workshop" className="hover:text-gold-500 transition-colors hover:pl-2 duration-300 block text-sage-300">Workshops</Link></li>
              <li><Link href="/coworking" className="hover:text-gold-500 transition-colors hover:pl-2 duration-300 block text-sage-300">Co-working</Link></li>
              <li><Link href="/gallery" className="hover:text-gold-500 transition-colors hover:pl-2 duration-300 block text-sage-300">Gallery</Link></li>
              <li><Link href="/admin" className="hover:text-gold-500 transition-colors hover:pl-2 duration-300 block text-sage-300">Admin Login</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-gold-500 mb-6 uppercase tracking-widest">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3 group">
                <MapPin size={18} className="mt-1 text-gold-500/70 group-hover:text-gold-500 transition-colors" />
                <span className="text-sage-300 group-hover:text-cream-50 transition-colors">123 Green Street, Urban City, India</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone size={18} className="text-gold-500/70 group-hover:text-gold-500 transition-colors" />
                <span className="text-sage-300 group-hover:text-cream-50 transition-colors">+91-9074627887</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Mail size={18} className="text-gold-500/70 group-hover:text-gold-500 transition-colors" />
                <span className="text-sage-300 group-hover:text-cream-50 transition-colors">info@cafevanabella.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-bold text-gold-500 mb-6 uppercase tracking-widest">Opening Hours</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-sage-300">Mon - Fri</span>
                <span className="font-medium text-cream-50">9:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-sage-300">Sat - Sun</span>
                <span className="font-medium text-cream-50">8:00 AM - 11:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-16 pt-8 text-center text-xs text-sage-500 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Café VanaBella. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
