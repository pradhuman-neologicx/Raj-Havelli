import { Metadata } from "next";
import Image from "next/image";
import {
  Waves,
  Utensils,
  Sofa,
  Snowflake,
  Zap,
  ArrowUpDown,
  Wifi,
  Car,
  ConciergeBell,
  Languages,
  Luggage,
  Stethoscope,
  Accessibility,
  ShirtIcon,
  Newspaper,
  CookingPot,
  ParkingCircle,
  Cigarette,
  Refrigerator,
  BedDouble,
  Lamp,
  Bath,
  Droplets,
  Tv,
  Coffee,
  IceCreamCone,
  Shield,
  Cctv,
  FlameKindling,
  Bell,
  Building2,
  Presentation,
  PartyPopper,
  Shirt,
  Clock,
  Plane,
  CreditCard,
  DoorOpen,
  Armchair,
  Phone,
  Sparkles,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Amenities",
  description:
    "Discover world-class amenities and facilities at Raj Haveli Heritage Hotel — Swimming Pool, Fine Dining, Spa, Conference Hall and more.",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const popularAmenities = [
  { name: "Swimming Pool", icon: Waves },
  { name: "Restaurant", icon: Utensils },
  { name: "Lounge", icon: Sofa },
  { name: "Air Conditioning", icon: Snowflake },
  { name: "Power Backup", icon: Zap },
  { name: "Free Wi-Fi", icon: Wifi },
];

const amenityCategories = [
  {
    title: "Basic Facilities",
    icon: Building2,
    items: [
      { name: "Swimming Pool", icon: Waves },
      { name: "Smoking Rooms", icon: Cigarette },
      { name: "Air Conditioning", icon: Snowflake },
      { name: "Power Backup", icon: Zap },
      { name: "Elevator / Lift", icon: ArrowUpDown },
      { name: "Refrigerator", icon: Refrigerator },
      { name: "Housekeeping", icon: Sparkles },
      { name: "Room Service", icon: ConciergeBell },
    ],
  },
  {
    title: "General Services",
    icon: ConciergeBell,
    items: [
      { name: "Concierge", icon: ConciergeBell },
      { name: "Multilingual Staff", icon: Languages },
      { name: "Luggage Assistance", icon: Luggage },
      { name: "Doctor on Call", icon: Stethoscope },
      { name: "Wheelchair Accessible", icon: Accessibility },
      { name: "Laundry Service", icon: ShirtIcon },
      { name: "Newspaper", icon: Newspaper },
      { name: "Parking", icon: ParkingCircle },
      { name: "Wi-Fi", icon: Wifi },
    ],
  },
  {
    title: "Room Amenities",
    icon: BedDouble,
    items: [
      { name: "Sofa", icon: Sofa },
      { name: "Hairdryer", icon: Droplets },
      { name: "Air Conditioning", icon: Snowflake },
      { name: "Iron / Ironing Board", icon: Shirt },
      { name: "Mini Fridge", icon: Refrigerator },
      { name: "Terrace", icon: Lamp },
      { name: "Free Toiletries", icon: Bath },
      { name: "Work Desk", icon: Presentation },
      { name: "Tea & Coffee Maker", icon: Coffee },
      { name: "Minibar", icon: IceCreamCone },
    ],
  },
  {
    title: "Food & Dining",
    icon: Utensils,
    items: [
      { name: "Multi-Cuisine Restaurant", icon: Utensils },
      { name: "Outdoor Dining Area", icon: Armchair },
      { name: "Electric Kettle", icon: Coffee },
      { name: "Cookware & Utensils", icon: CookingPot },
      { name: "Buffet Breakfast", icon: Utensils },
      { name: "Room Service", icon: ConciergeBell },
    ],
  },
  {
    title: "Safety & Security",
    icon: Shield,
    items: [
      { name: "CCTV Surveillance", icon: Cctv },
      { name: "Fire Extinguishers", icon: FlameKindling },
      { name: "Security Alarms", icon: Bell },
      { name: "In-Room Safe", icon: Shield },
    ],
  },
  {
    title: "Business & Events",
    icon: Presentation,
    items: [
      { name: "Conference Room", icon: Presentation },
      { name: "Banquet Hall", icon: PartyPopper },
      { name: "Lounge", icon: Sofa },
      { name: "Reception", icon: DoorOpen },
    ],
  },
  {
    title: "Payment & Transfers",
    icon: CreditCard,
    items: [
      { name: "Currency Exchange", icon: CreditCard },
      { name: "Airport Transfers", icon: Plane },
    ],
  },
  {
    title: "Media & Entertainment",
    icon: Tv,
    items: [
      { name: "Smart TV", icon: Tv },
      { name: "AM/FM Alarm Clock", icon: Clock },
      { name: "Roof Top Garden", icon: Lamp },
    ],
  },
];

const goodToKnow = [
  { label: "Check-in", value: "12:00 PM – 11:59 PM" },
  { label: "Check-out", value: "Until 12:00 PM" },
  {
    label: "Extra Beds",
    value:
      "Children up to the age of 6 can stay in an extra bed for ₹1,200 per person per night.",
  },
  { label: "Pets", value: "Pets are not allowed." },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function AmenitiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* ====== HERO ====== */}
      <section className="relative h-[50vh] min-h-[360px] w-full overflow-hidden flex items-end">
        <Image
          src="/images/Gallery/Lobby.png"
          alt="Raj Haveli Amenities"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-primary/15 mix-blend-multiply" />

        <div className="relative z-10 container mx-auto max-w-7xl px-4 md:px-6 pb-12 md:pb-16">
          <p className="text-secondary tracking-[0.25em] uppercase text-xs font-bold mb-3">
            Raj Haveli Heritage
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-3 drop-shadow-md">
            Our Amenities
          </h1>
          <p className="text-white/75 text-base md:text-lg max-w-xl leading-relaxed">
            Every detail curated for comfort, convenience and an unforgettable
            stay.
          </p>
        </div>
      </section>

      {/* ====== POPULAR AMENITIES RIBBON ====== */}
      <section className="relative z-20 -mt-8">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="bg-card border border-border rounded-2xl shadow-xl px-6 py-6 md:py-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              {popularAmenities.map((a, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2.5 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                    <a.icon className="w-6 h-6" strokeWidth={1.6} />
                  </div>
                  <span className="text-xs font-semibold text-foreground/80 text-center leading-tight">
                    {a.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== CATEGORY SECTIONS ====== */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-12 md:w-20 bg-primary/60" />
              <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold">
                Everything You Need
              </p>
              <div className="h-[1px] w-12 md:w-20 bg-primary/60" />
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-primary">
              Facilities & Services
            </h2>
          </div>

          {/* Amenity Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {amenityCategories.map((cat, catIdx) => (
              <div
                key={catIdx}
                className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg transition-shadow duration-500"
              >
                {/* Card Header */}
                <div className="flex items-center gap-4 px-7 py-5 border-b border-border bg-muted/30">
                  <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center text-white shrink-0 shadow-sm">
                    <cat.icon className="w-5 h-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-xl font-serif text-primary">
                    {cat.title}
                  </h3>
                </div>

                {/* Card Items */}
                <div className="px-7 py-5">
                  <div className="grid grid-cols-2 gap-x-6 gap-y-3.5">
                    {cat.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="flex items-center gap-3 text-sm text-foreground/80 group/item hover:text-primary transition-colors duration-200"
                      >
                        <item.icon className="w-4 h-4 shrink-0 text-primary/60 group-hover/item:text-primary transition-colors" />
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== PHOTO HIGHLIGHT STRIP ====== */}
      <section className="w-full overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 h-[200px] md:h-[280px]">
          {[
            "/images/Gallery/Sweeming Pool.jpeg",
            "/images/Gallery/Restaurant (3).jpg",
            "/images/Gallery/Roof Top Garden.jpeg",
            "/images/service_events.png",
          ].map((src, i) => (
            <div key={i} className="relative overflow-hidden group">
              <Image
                src={src}
                alt={`Amenity highlight ${i + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* ====== GOOD TO KNOW ====== */}
      <section className="py-20 md:py-24 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-3">
              Good to Know
            </h2>
            <p className="text-muted-foreground">
              Important information for planning your stay.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {goodToKnow.map((item, i) => (
              <div
                key={i}
                className="bg-card rounded-xl border border-border p-6 flex gap-4"
              >
                <div className="shrink-0 mt-0.5">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Check className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-primary mb-1.5">
                    {item.label}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
