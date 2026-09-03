import Image from "next/image";
import { MapPin } from "lucide-react";

export default function DiscoverSection() {
  const destinations = [
    {
      name: "Junagarh Fort",
      distance: "2 km",
      description: "A magnificent 16th-century fort with 37 palaces, temples, and pavilions showcasing exquisite architecture.",
      image: "/images/junagarh_fort.png"
    },
    {
      name: "Lalgarh Palace",
      distance: "3 km",
      description: "A stunning red sandstone palace built in Indo-Saracenic style, now a heritage hotel and museum.",
      image: "/images/lalgarh_palace.png"
    },
    {
      name: "Ratan Bihari Temple",
      distance: "1.5 km",
      description: "A beautiful Jain temple known for intricate marble carvings and peaceful atmosphere.",
      image: "/images/ratan_bihari_temple.png"
    },
    {
      name: "Karni Mata Temple",
      distance: "30 km",
      description: "The famous 'Temple of Rats' in Deshnoke, a unique and revered pilgrimage site.",
      image: "/images/karni_mata_temple.webp"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 md:w-20 bg-primary/60"></div>
            <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold">
              Discover
            </p>
            <div className="h-[1px] w-12 md:w-20 bg-primary/60"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
            Explore Bikaner
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Bikaner, the desert jewel of Rajasthan, is steeped in history, culture, and architectural marvels. Explore its most iconic landmarks, all within easy reach of Raj Havelli.
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, idx) => (
            <div key={idx} className="group relative h-[450px] rounded-2xl overflow-hidden shadow-lg cursor-pointer">
              {/* Full Image */}
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />

              {/* Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Bottom Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="flex items-center gap-2 mb-3 text-secondary">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-bold tracking-wider">{dest.distance}</span>
                </div>
                <h3 className="text-2xl font-serif mb-3">{dest.name}</h3>
                <p className="text-white/80 text-sm leading-relaxed border-t border-white/20 pt-3 mt-3">
                  {dest.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
