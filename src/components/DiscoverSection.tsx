import Image from "next/image";
import Link from "next/link";
import { bikanerDestinations } from "../data";

export default function DiscoverSection() {
  const destinations = bikanerDestinations;

  return (
    <section id="discover" className="py-24 bg-background">
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
            Attractions of Bikaner City
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Bikaner, the desert jewel of Rajasthan, is steeped in history, culture, and architectural marvels. Explore its most iconic landmarks, all within easy reach of Raj Haveli.
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, idx) => (
            <Link key={idx} href={`/bikaner/${dest.slug}`}>
              <div className="group relative h-[450px] rounded-2xl overflow-hidden shadow-lg cursor-pointer block">
                {/* Full Image */}
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={idx <= 2}
                />

                {/* Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Bottom Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-500 group-hover:-translate-y-2">

                  <h3 className="text-2xl font-serif mb-3">{dest.name}</h3>
                  <p className="text-white/80 text-sm leading-relaxed border-t border-white/20 pt-3 mt-3">
                    {dest.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
