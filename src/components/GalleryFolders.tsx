"use client";

import { useState } from "react";
import Image from "next/image";
import { Folder, Image as ImageIcon, ArrowLeft } from "lucide-react";
import LightboxGallery from "./LightboxGallery";

interface Category {
  name: string;
  images: string[];
}

export default function GalleryFolders({ categories }: { categories: Category[] }) {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  if (activeCategory) {
    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex items-center justify-between mb-8">
          <div>
            <button 
              onClick={() => setActiveCategory(null)}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-2 text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Albums
            </button>
            <h2 className="text-3xl font-serif text-primary">
              {activeCategory.name}
            </h2>
          </div>
          <div className="text-sm text-muted-foreground font-medium bg-muted/30 px-3 py-1 rounded-full border border-border">
            {activeCategory.images.length} Photos
          </div>
        </div>
        <LightboxGallery images={activeCategory.images} />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {categories.map((category, index) => (
        <div 
          key={index}
          onClick={() => setActiveCategory(category)}
          className="group cursor-pointer flex flex-col"
        >
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 mb-4 border border-border/50">
            {category.images.length > 0 ? (
              <Image
                src={category.images[0]}
                alt={category.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            ) : (
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <ImageIcon className="w-8 h-8 text-muted-foreground" />
              </div>
            )}
            
            {/* Folder Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
              <div>
                <h3 className="text-white text-2xl font-serif drop-shadow-sm mb-1">{category.name}</h3>
                <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
                  <ImageIcon className="w-4 h-4" />
                  <span>{category.images.length} Photos</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <Folder className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
