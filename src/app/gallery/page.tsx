import { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { galleryImages } from "@/data";

export const metadata: Metadata = {
  title: "Gallery",
  description: "View the beautiful spaces and amenities at Raj Havelli.",
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <PageHeader 
        title="Visual Journey" 
        description="A glimpse into the luxury that awaits." 
        image="/images/service_events.png" 
      />

      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((src, index) => (
              <div 
                key={index} 
                className={`relative overflow-hidden rounded-lg group ${
                  index === 0 || index === 7 ? 'md:col-span-2 md:row-span-2 aspect-square' : 'aspect-square'
                }`}
              >
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
