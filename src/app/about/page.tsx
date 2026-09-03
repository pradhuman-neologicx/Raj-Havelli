import { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the history, philosophy, and luxury experience at Raj Havelli.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <PageHeader 
        title="Our Story" 
        description="A legacy of unparalleled luxury and Indian heritage." 
        image="/images/hero_bg.png" 
      />

      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-serif text-primary">The Philosophy of True Luxury</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Raj Havelli, we believe that true luxury lies in the details. Founded on the principles of regal Indian hospitality, our sanctuary is designed to transport you to an era of grandeur while providing every modern comfort imaginable.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is to create unforgettable experiences that touch the soul. From the moment you step through our intricately carved doors, you are treated not just as a guest, but as royalty.
              </p>
            </div>
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/room_signature.png" 
                alt="Raj Havelli Interior" 
                fill 
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-6 bg-primary text-white">
        <div className="container mx-auto max-w-4xl text-center space-y-12">
          <h2 className="text-3xl md:text-5xl font-serif">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-secondary">Heritage</h3>
              <p className="text-white/80">Preserving and celebrating the rich cultural tapestry and architectural marvels of India.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-secondary">Excellence</h3>
              <p className="text-white/80">Uncompromising standards in service, dining, and comfort to ensure perfection.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-secondary">Serenity</h3>
              <p className="text-white/80">Creating a tranquil haven where guests can escape, rejuvenate, and find peace.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
