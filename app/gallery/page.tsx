"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ZoomIn, X, ImageOff } from "lucide-react";

const categories = ["All", "Food", "Interior", "Events"];

export default function GalleryPage() {
  const [activeCat, setActiveCat] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [galleryImages, setGalleryImages] = useState<any[]>([]);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const yHero = useTransform(scrollYProgress, [0, 0.2], [0, 200]);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedGallery = localStorage.getItem("vanaBella_gallery");
    if (savedGallery) {
      setGalleryImages(JSON.parse(savedGallery));
    }
  }, []);

  const filteredImages = activeCat === "All" ? galleryImages : galleryImages.filter(img => img.category === activeCat);

  return (
    <div ref={containerRef} className="bg-forest-950 text-cream-50 selection:bg-gold-500 selection:text-forest-950 overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: yHero }} className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=2000&auto=format&fit=crop"
            alt="Gallery Hero"
            fill
            className="object-cover brightness-[0.3]"
            priority
          />
        </motion.div>
        <div className="relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-4"
          >
            Visual <span className="text-gold-500 italic">Journey</span>
          </motion.h1>
          <p className="text-cream-100/60 font-light tracking-widest uppercase text-sm">Moments captured in time</p>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-20 px-4 md:px-8 min-h-screen">
        
        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`text-sm uppercase tracking-[0.2em] transition-all duration-300 relative group ${
                activeCat === cat ? "text-gold-500 font-bold" : "text-cream-100/50 hover:text-cream-50"
              }`}
            >
              {cat}
              <span className={`absolute -bottom-2 left-0 w-full h-px bg-gold-500 transition-transform duration-300 origin-left ${
                activeCat === cat ? "scale-x-100" : "scale-x-0 group-hover:scale-x-50"
              }`}></span>
            </button>
          ))}
        </div>

        {/* Empty State */}
        {galleryImages.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-cream-100/40">
            <ImageOff size={48} className="mb-4 opacity-50" />
            <p className="text-lg font-serif italic">No images in the gallery yet.</p>
            <p className="text-xs uppercase tracking-widest mt-2">Visit the Admin Dashboard to add photos.</p>
          </div>
        )}

        {/* Masonry Grid */}
        {galleryImages.length > 0 && (
          <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 max-w-7xl mx-auto">
            <AnimatePresence>
              {filteredImages.map((img) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  key={img.id}
                  className="break-inside-avoid relative group cursor-pointer overflow-hidden"
                  onClick={() => setSelectedImage(img.src)}
                >
                  <div className="relative w-full h-auto">
                    <Image
                      src={img.src}
                      alt={img.title || "Gallery Image"}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-forest-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
                    <span className="text-gold-500 text-xs uppercase tracking-widest font-bold">{img.category}</span>
                    <h3 className="text-2xl font-serif italic">{img.title}</h3>
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white mt-4 hover:bg-gold-500 hover:border-gold-500 hover:text-forest-950 transition-all">
                      <ZoomIn size={18} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors">
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Gallery Preview"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
