import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import {
  BedDouble,
  Utensils,
  Waves,
  Users,
  Presentation,
  Wifi,
  TreePalm,
  MapPin,
  Calendar,
  Star,
  Heart,
  Shield,
  Clock,
  Phone,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover Hotel Raj Haveli Heritage — a newly constructed Heritage Style Hotel in the heart of Bikaner with 49 rooms, fine dining, swimming pool and world-class amenities.",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const highlights = [
  {
    icon: BedDouble,
    value: "49",
    label: "Luxury Rooms",
    detail: "24 Twin Sharing + 24 King Size + 1 Suite",
  },
  {
    icon: Utensils,
    value: "100",
    label: "Dining Covers",
    detail: "Top class multi-cuisine restaurant",
  },
  {
    icon: Users,
    value: "150",
    label: "Banquet Capacity",
    detail: "Grand hall for weddings & events",
  },
  {
    icon: Presentation,
    value: "20",
    label: "Conference Seats",
    detail: "Modern facilities for meetings",
  },
];

const facilities = [
  { icon: Waves, name: "Swimming Pool" },
  { icon: TreePalm, name: "Roof Top Garden" },
  { icon: Wifi, name: "Free Wi-Fi" },
  { icon: Utensils, name: "Fine Dining" },
  { icon: BedDouble, name: "Heritage Rooms" },
  { icon: Shield, name: "24/7 Security" },
];



const nearbyLandmarks = [
  { name: "Junagarh Fort", distance: "10 min drive" },
  { name: "Prachina Museum", distance: "2.4 km" },
  { name: "Rampuria Havelis", distance: "2.9 km" },
  { name: "Bhanda Shaha Jain Temple", distance: "15 min ride" },
  { name: "Brahaman Path", distance: "750 metres" },
  { name: "Milan Travels Bus Stop", distance: "5 min walk" },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* ========== HERO ========== */}
      <section className="relative h-[55vh] min-h-[400px] md:h-[65vh] w-full overflow-hidden flex items-end">
        <Image
          src="/images/Gallery/Enterce .jpg"
          alt="Raj Haveli Heritage Hotel Entrance"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-primary/15 mix-blend-multiply" />

        <div className="relative z-10 container mx-auto max-w-7xl px-4 md:px-6 pb-12 md:pb-16">
          <p className="text-secondary tracking-[0.25em] uppercase text-xs font-bold mb-3">
            Since 22 March 2016
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-3 drop-shadow-md">
            Our Story
          </h1>
          <p className="text-white/75 text-base md:text-lg max-w-lg leading-relaxed">
            A legacy of heritage hospitality in the heart of Bikaner.
          </p>
        </div>
      </section>

      {/* ========== NUMBERS RIBBON ========== */}
      <section className="relative z-20 -mt-10">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="bg-card border border-border rounded-2xl shadow-xl grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {highlights.map((h, i) => (
              <div key={i} className="px-5 py-7 md:px-8 md:py-9 text-center">
                <div className="mx-auto w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3">
                  <h.icon className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <p className="text-3xl md:text-4xl font-serif text-primary font-semibold">
                  {h.value}
                </p>
                <p className="text-sm font-semibold text-foreground mt-1">
                  {h.label}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
                  {h.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ABOUT STORY ========== */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[2px] w-12 bg-primary/40" />
                <span className="text-primary uppercase tracking-widest text-xs font-bold">
                  About the Hotel
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary mb-8 leading-tight">
                Heritage Style Hotel in the Heart of Bikaner
              </h2>

              <div className="space-y-5 text-muted-foreground text-base md:text-[17px] leading-relaxed">
                <p>
                  It gives us immense pleasure to introduce{" "}
                  <strong className="text-primary font-serif font-medium">
                    Hotel Raj Haveli Heritage
                  </strong>
                  , a newly constructed Heritage Style Hotel in the city of
                  Bikaner. Situated in the heart of the city, the hotel offers
                  an inventory of{" "}
                  <strong className="text-foreground">
                    24 Twin Sharing + 24 King Size Bed Rooms + 01 Suite
                  </strong>{" "}
                  — a total of 49 rooms with all amenities and accessories
                  equivalent to a 4-Star Hotel.
                </p>

                <p>
                  The property reflects a traditional haveli-style setting,
                  where the atmosphere leans toward calm and character rather
                  than busy hotel traffic. Deluxe and Super Deluxe Rooms are
                  designed for restful nights after long sightseeing hours, with
                  interiors that feel spacious and suited for short leisure
                  breaks as well as relaxed multi-day stays.
                </p>

                <p>
                  It features a{" "}
                  <strong className="text-foreground">
                    Top Class Restaurant
                  </strong>{" "}
                  with a capacity of 100 covers, Swimming Pool, Roof Top Garden
                  &amp; Free Wi-Fi. Additionally, it has a Banquet Hall for up
                  to 150 persons and a Conference Hall for up to 20 persons
                  equipped with all modern facilities.
                </p>
              </div>

              <div className="flex items-center gap-3 mt-8">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Established{" "}
                  <strong className="text-foreground">
                    22nd March, 2016
                  </strong>
                </span>
              </div>
            </div>

            {/* Image Collage */}
            <div className="grid grid-cols-2 gap-4 h-fit">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/Gallery/Entrance.jpeg"
                  alt="Raj Haveli Entrance"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mt-8">
                <Image
                  src="/images/Gallery/Lobby.jpeg"
                  alt="Raj Haveli Lobby"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-lg col-span-2">
                <Image
                  src="/images/Gallery/Outside view.jpeg"
                  alt="Raj Haveli Exterior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FACILITIES MARQUEE ========== */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 md:gap-6">
            {facilities.map((f, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-secondary">
                  <f.icon className="w-6 h-6" strokeWidth={1.6} />
                </div>
                <span className="text-white/90 text-sm font-medium">
                  {f.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ROOM EXPERIENCE ========== */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src="/images/Gallery/Deluxe Room.jpeg"
                alt="Deluxe Room"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[2px] w-12 bg-primary/40" />
                <span className="text-primary uppercase tracking-widest text-xs font-bold">
                  The Rooms
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
                Comfort Meets Heritage
              </h2>

              <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                <p>
                  The air-conditioned rooms feature a balcony with satellite
                  television, along with comforts such as air conditioning. The
                  bedrooms come with extra-long beds and bathrooms with a
                  separate toilet, shower, hairdryers and bath sheets.
                </p>
                <p>
                  Natural light, simple furnishings, and a quiet environment
                  shape the room experience rather than excess décor. Whether
                  you&apos;re here for a quick business trip or a leisurely
                  heritage tour, every room is your private haven.
                </p>
              </div>

              <Link
                href="/rooms"
                className="inline-flex items-center gap-2 mt-8 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium px-7 py-3.5 rounded-xl shadow-sm"
              >
                Explore Rooms
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== DINING ========== */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[2px] w-12 bg-primary/40" />
                <span className="text-primary uppercase tracking-widest text-xs font-bold">
                  Culinary Experience
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
                Dine Like Royalty
              </h2>

              <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                <p>
                  Dining is centered around our in-house restaurant, making it
                  convenient for guests who prefer meals within the property
                  before heading out or after returning from the city. Hotel Raj
                  Haveli Heritage offers daily continental breakfast alongside an
                  extensive multi-cuisine menu.
                </p>
                <p>
                  The restaurant has a seating capacity of 100 covers, offering
                  a warm and inviting atmosphere. From authentic Rajasthani
                  flavours to Indian and international dishes, every meal is
                  crafted with the finest locally sourced ingredients and
                  impeccable hygiene standards.
                </p>
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/Gallery/Restaurant (3).jpg"
                  alt="Restaurant"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg mt-6">
                <Image
                  src="/images/Gallery/Buffet.jpg"
                  alt="Buffet"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== GUEST REVIEWS ========== */}
      <section className="py-20 md:py-24 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-12 md:w-20 bg-primary/60" />
              <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold">
                Why Choose Us
              </p>
              <div className="h-[1px] w-12 md:w-20 bg-primary/60" />
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-3">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Experience the finest hospitality with our dedicated services and prime location in the heart of Bikaner.
            </p>
          </div>

          {/* Love Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                icon: Heart,
                title: "Cordial Staff",
                desc: "Warm, attentive hospitality that makes every guest feel at home.",
              },
              {
                icon: MapPin,
                title: "Prime Location",
                desc: "Conveniently located in the heart of Bikaner, close to all major attractions.",
              },
              {
                icon: Shield,
                title: "Clean & Hygienic",
                desc: "We prioritize safety and cleanliness for a worry-free stay.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg text-primary mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== LOCATION ========== */}
      <section className="py-20 md:py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Map / Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/Gallery/Night Look .jpg"
                alt="Raj Haveli at Night"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 text-white/90">
                  <MapPin className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium">
                    B-222, Sadulganj, Bikaner, Rajasthan 334001
                  </span>
                </div>
              </div>
            </div>

            {/* Nearby */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[2px] w-12 bg-primary/40" />
                <span className="text-primary uppercase tracking-widest text-xs font-bold">
                  Location
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
                Perfectly Positioned
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Hotel Raj Haveli sits within the historic fabric of Bikaner,
                offering travelers a stay that feels closely tied to the
                city&apos;s heritage streets and local rhythm. The centre of
                Bikaner can be reached in 20 minutes&apos; walk.
              </p>

              <div className="space-y-4">
                {nearbyLandmarks.map((l, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-3 border-b border-border last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-primary/50" />
                      <span className="text-sm font-medium text-foreground">
                        {l.name}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      {l.distance}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== POLICIES / GOOD TO KNOW ========== */}
      <section className="py-16 px-4 md:px-6 bg-muted/30 border-t border-border">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 flex gap-4">
              <div className="shrink-0">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Clock className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-primary mb-1">
                  Check-in / Check-out
                </h4>
                <p className="text-sm text-muted-foreground">
                  Check-in: 2:00 PM
                </p>
                <p className="text-sm text-muted-foreground">
                  Check-out: 12:00 PM
                </p>
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 flex gap-4">
              <div className="shrink-0">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <BedDouble className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-primary mb-1">
                  Extra Beds
                </h4>
                <p className="text-sm text-muted-foreground">
                  Children up to age 6 — ₹1,200 per night for an extra bed.
                </p>
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 flex gap-4">
              <div className="shrink-0">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Phone className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-primary mb-1">
                  Reservations
                </h4>
                <p className="text-sm text-muted-foreground">
                  0151-2208777
                </p>
                <p className="text-sm text-muted-foreground">9950584559</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="py-20 md:py-24 px-4 md:px-6 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-12 md:w-20 bg-primary/60" />
              <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold">
                FAQ
              </p>
              <div className="h-[1px] w-12 md:w-20 bg-primary/60" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about your stay at Hotel Raj Haveli Heritage.
            </p>
          </div>

          <FaqAccordion />
        </div>
      </section>
    </div>
  );
}
