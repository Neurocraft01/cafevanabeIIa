"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const pathname = usePathname();
  
  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="bg-white text-black py-20 border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Brand - Large */}
          <div className="md:col-span-4 space-y-6">
            <div className="h-14 overflow-hidden">
              <Image 
                src="/logo.jpg" 
                alt="Cafe VanaBella Logo" 
                width={160} 
                height={56} 
                className="object-cover object-center scale-125"
                style={{ objectPosition: 'center 50%' }}
              />
            </div>
            <p className="text-sm leading-relaxed text-gray-500 font-light max-w-xs">
              Your Urban Oasis. Where nature meets flavor in a symphony of taste and tranquility.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="https://www.instagram.com/cafevanabella" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300"><Twitter size={18} /></a>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-2"></div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/menu" className="hover:text-gray-500 transition-colors block">Menu</Link></li>
              <li><Link href="/workshop" className="hover:text-gray-500 transition-colors block">Workshops</Link></li>
              <li><Link href="/coworking" className="hover:text-gray-500 transition-colors block">Co-working</Link></li>
              <li><Link href="/gallery" className="hover:text-gray-500 transition-colors block">Gallery</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Visit Us</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 text-black" />
                <span>Cafe VanaBella,<br />Pimple Nilakh, Pune<br />Near Srimal Hospital<br />Maharashtra, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-black" />
                <span>@cafevanabella (Instagram)</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-black" />
                <span>hello@cafevanabella.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 uppercase tracking-wider">
          <p>&copy; 2024 VanaBella. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
