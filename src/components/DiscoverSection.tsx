import Image from "next/image";

export default function DiscoverSection() {
  const destinations = [
    {
      name: "Junagarh Fort",
      description: "Asia's Well Maintained Fort",
      image: "/images/junagarh_fort.png"
    },
    {
      name: "National Research Centre On Camel",
      description: "Only One in Asia",
      image: "/images/camel_research.png"
    },
    {
      name: "Karni Mata Temple",
      description: "World Famous Rat Temple",
      image: "/images/karni_mata.png"
    },
    {
      name: "Lalgarh Palace and Museum",
      description: "A stunning red sandstone palace built in Indo-Saracenic style, now a heritage hotel and museum.",
      image: "/images/lalgarh_palace.png"
    },
    {
      name: "World Famous Rampuria Haveli",
      description: "Renowned for its exquisite architecture and intricate sandstone carvings.",
      image: "/images/rampuria_haveli.png"
    },
    {
      name: "Heritage Route",
      description: "Thousands of Havelis, World Famous Bhandasar Jain Temple, Laxminath Ji Temple Bika Ji Ki Takri, Spice Market, Old Bazar. Due to narrow streets, this is only possible by Horse Cart or Auto.",
      image: "/images/heritage_route.png"
    },
    {
      name: "Gajner Lake and Wildlife Sanctuary",
      description: "A lush green sanctuary with a serene lake, perfect for wildlife spotting.",
      image: "/images/gajner_lake.png"
    },
    {
      name: "Sand Dunes",
      description: "Many Desert Camps In Raisar Village 20 KM from the City.",
      image: "/images/sand_dunes.png"
    },
    {
      name: "Bikaner's Famous Delicacies",
      description: "Bikaner is also famous for Namkin, Bhujia, Papad, and Sweets, specially Bhujia & Rasgulla.",
      image: "/images/bikaner_sweets.png"
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
            Attractions of Bikaner City
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Bikaner, the desert jewel of Rajasthan, is steeped in history, culture, and architectural marvels. Explore its most iconic landmarks, all within easy reach of Raj Haveli.
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, idx) => (
            <div key={idx} className="group relative h-[450px] rounded-2xl overflow-hidden shadow-lg cursor-pointer">
              {/* Full Image */}
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
          ))}
        </div>

      </div>
    </section>
  );
}
