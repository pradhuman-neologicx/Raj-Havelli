import Image from "next/image";
import { galleryImages } from "@/data";

export default function VideoSection() {
  return (
    <section className="py-24 px-4 md:px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="h-[1px] w-16 md:w-24 bg-primary/50"></div>
            <p className="text-primary uppercase tracking-[0.2em] text-xs md:text-sm font-bold">
              Royal Experiences
            </p>
            <div className="h-[1px] w-16 md:w-24 bg-primary/50"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-primary">
            Immerse Into Raj Havelli
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Left: Mini Image Gallery */}
          <div className="lg:col-span-1 grid grid-cols-2 gap-4 w-full">
            <div className="space-y-4 pt-8">
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-md group">
                <Image src={galleryImages[0]} fill className="object-cover group-hover:scale-110 transition-transform duration-700" alt="Raj Havelli Preview 1" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
              <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-md group">
                <Image src={galleryImages[4]} fill className="object-cover group-hover:scale-110 transition-transform duration-700" alt="Raj Havelli Preview 2" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-md group">
                <Image src={galleryImages[5]} fill className="object-cover group-hover:scale-110 transition-transform duration-700" alt="Raj Havelli Preview 3" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-md group">
                <Image src={galleryImages[6]} fill className="object-cover group-hover:scale-110 transition-transform duration-700" alt="Raj Havelli Preview 4" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
            </div>
          </div>

          {/* Right: Video */}
          <div className="lg:col-span-2 relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-black/5">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/images/hero_bg.png"
              preload="metadata"
            >
              <source src="/images/intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
