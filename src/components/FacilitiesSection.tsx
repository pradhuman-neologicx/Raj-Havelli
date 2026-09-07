import Image from "next/image";
import { Waves, Dumbbell, Wifi, Car, Utensils, ConciergeBell, ArrowRight, Music } from "lucide-react";

export default function FacilitiesSection() {
  const facilities = [
    { name: "Swimming Pool", desc1: "Relax and...", desc2: "...rejuvenate!", icon: Waves },
    { name: "Gymnasium", desc1: "Treat your body...", desc2: "...and your soul!", icon: Dumbbell },
    { name: "Free Wi-Fi", desc1: "Access anywhere!", desc2: "Access everywhere!", icon: Wifi },
    { name: "Parking", desc1: "Ample space for One", desc2: "And for All!", icon: Car },
    { name: "Room Service", desc1: "One phone call away!", desc2: "Raj Haveli At Your Service!", icon: ConciergeBell },
    { name: "Fine Dining", desc1: "A culinary journey", desc2: "Fit for royalty!", icon: Utensils },
  ];

  const venues = [
    { name: "The Palace Kitchen", image: "/images/restaurant_bg.png", icon: Utensils },
    { name: "Swimming Pool", image: "/images/service_pool.png", icon: Waves },
    { name: "The Palace Hall", image: "/images/service_events.png", icon: Music },
  ];

  return (
    <section className="pt-24 bg-background">
      {/* Header */}
      <div className="container mx-auto px-4 md:px-6 mb-20">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 md:w-20 bg-primary/60"></div>
            <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold">
              Raj Haveli At Your Service
            </p>
            <div className="h-[1px] w-12 md:w-20 bg-primary/60"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-primary">
            World-Class Amenities
          </h2>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-24 max-w-6xl mx-auto">
          {facilities.map((fac, idx) => (
            <div key={idx} className="relative bg-white border border-gray-200 p-8 text-center pt-14 shadow-sm hover:shadow-md transition-shadow">
              {/* Overlapping Icon Circle */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-white p-2 shadow-sm border border-gray-100 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-primary flex items-center justify-center text-white">
                  <fac.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
              </div>

              <h3 className="font-serif text-2xl text-primary mb-3">{fac.name}</h3>
              <p className="text-muted-foreground text-sm mb-1">{fac.desc1}</p>
              <p className="text-muted-foreground text-sm">{fac.desc2}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Venues Row */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 mt-12">
        {venues.map((venue, idx) => (
          <div key={idx} className="group relative w-full h-[400px] flex flex-col overflow-hidden">
            {/* Image */}
            <div className="relative w-full h-[320px] overflow-hidden bg-black/10">
              <Image
                src={venue.image}
                alt={venue.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            {/* Bottom Bar */}
            <div className="h-[80px] w-full flex">
              <div className="h-full w-[80px] bg-primary/90 flex items-center justify-center flex-shrink-0  transition-colors">
                <venue.icon strokeWidth={1.5} className="text-white w-6 h-6 transition-transform group-hover:translate-x-1" />
              </div>
              <div className="h-full flex-grow bg-primary flex items-center px-6 group-hover:bg-primary/90 transition-colors gap-4 text-white">
                <span className="font-serif text-xl tracking-wide">{venue.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
