"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import FloatingLeaves from "./FloatingLeaves";

export default function ConditionalLeaves() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [showLeaves, setShowLeaves] = useState(!isHomePage);
  
  useEffect(() => {
    // If NOT on homepage, always show leaves
    if (!isHomePage) {
      setShowLeaves(true);
      return;
    }
    
    // If on homepage, hide leaves initially and show after scrolling past hero
    const handleScroll = () => {
      // Show leaves after scrolling past hero section (roughly 85vh)
      const heroHeight = window.innerHeight * 0.85;
      setShowLeaves(window.scrollY > heroHeight - 200);
    };
    
    handleScroll(); // Check initial position
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);
  
  // Show leaves based on the state
  if (showLeaves) {
    return <FloatingLeaves forWhiteBackground={true} />;
  }
  
  return null;
}
