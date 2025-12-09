"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Leaf } from "lucide-react";

export default function FloatingLeaves() {
  const [leaves, setLeaves] = useState<{ id: number; x: number; delay: number; duration: number; size: number; rotation: number }[]>([]);

  useEffect(() => {
    // Create a set of leaves with random properties
    const newLeaves = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // Random horizontal position %
      delay: Math.random() * 20, // Random delay
      duration: 15 + Math.random() * 20, // Random duration (slow fall)
      size: 10 + Math.random() * 20, // Random size
      rotation: Math.random() * 360, // Random initial rotation
    }));
    setLeaves(newLeaves);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          initial={{ 
            y: -100, 
            x: `${leaf.x}vw`, 
            opacity: 0, 
            rotate: leaf.rotation 
          }}
          animate={{ 
            y: "110vh", 
            x: [`${leaf.x}vw`, `${leaf.x + (Math.random() * 10 - 5)}vw`, `${leaf.x}vw`], // Swaying motion
            opacity: [0, 0.15, 0], 
            rotate: leaf.rotation + 360 
          }}
          transition={{ 
            duration: leaf.duration, 
            repeat: Infinity, 
            delay: leaf.delay,
            ease: "easeInOut"
          }}
          className="absolute text-emerald-900/30 blur-[0.5px]"
        >
          <Leaf size={leaf.size} fill="currentColor" />
        </motion.div>
      ))}
    </div>
  );
}
