"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface LightboxGalleryProps {
  images: string[];
}

export default function LightboxGallery({ images }: LightboxGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      if (e.key === "ArrowRight") setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, images.length]);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div 
            key={index} 
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
               <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 drop-shadow-md transition-opacity duration-300 scale-75 group-hover:scale-100 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-md animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white z-50 p-2 bg-black/20 rounded-full hover:bg-black/40 transition-colors"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button 
            className="absolute left-4 md:left-8 text-white/70 hover:text-white z-50 p-2 bg-black/40 rounded-full hover:bg-black/60 transition-colors"
            onClick={prevImage}
            aria-label="Previous"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <div className="relative w-full max-w-6xl aspect-video max-h-[85vh]">
            <Image
              src={images[currentIndex]}
              alt={`Gallery Image ${currentIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          <button 
            className="absolute right-4 md:right-8 text-white/70 hover:text-white z-50 p-2 bg-black/40 rounded-full hover:bg-black/60 transition-colors"
            onClick={nextImage}
            aria-label="Next"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 font-medium tracking-widest bg-black/40 px-4 py-1 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
