"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Leaf } from "lucide-react";

interface FloatingLeavesProps {
  forWhiteBackground?: boolean;
}

export default function FloatingLeaves({ forWhiteBackground = false }: FloatingLeavesProps) {
  const [leaves, setLeaves] = useState<{ id: number; x: number; delay: number; duration: number; size: number; rotation: number }[]>([]);

  useEffect(() => {
    // Create a set of leaves with random properties
    const newLeaves = Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // Random horizontal position %
      delay: Math.random() * 15, // Random delay
      duration: 20 + Math.random() * 15, // Random duration (slow fall)
      size: 14 + Math.random() * 20, // Random size
      rotation: Math.random() * 360, // Random initial rotation
    }));
    setLeaves(newLeaves);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
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
            x: [`${leaf.x}vw`, `${leaf.x + (Math.random() * 8 - 4)}vw`, `${leaf.x}vw`], // Swaying motion
            opacity: forWhiteBackground ? [0, 0.5, 0] : [0, 0.15, 0], 
            rotate: leaf.rotation + 180 
          }}
          transition={{ 
            duration: leaf.duration, 
            repeat: Infinity, 
            delay: leaf.delay,
            ease: "linear"
          }}
          className={forWhiteBackground ? "absolute text-emerald-600/90" : "absolute text-emerald-900/30 blur-[0.5px]"}
        >
          <Leaf size={leaf.size} fill="currentColor" />
        </motion.div>
      ))}
    </div>
  );
}
