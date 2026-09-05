import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Phone } from "lucide-react";
import { rooms, hotelDetails } from "@/data";

export async function generateStaticParams() {
  return rooms.map((room) => ({
    id: room.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const room = rooms.find((r) => r.id === id);
  if (!room) return { title: "Room Not Found" };
  return {
    title: room.name,
    description: room.longDescription,
  };
}

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const room = rooms.find((r) => r.id === id);

  if (!room) {
    notFound();
  }

  const currentIndex = rooms.findIndex((r) => r.id === id);
  const prevRoom = currentIndex > 0 ? rooms[currentIndex - 1] : null;
  const nextRoom =
    currentIndex < rooms.length - 1 ? rooms[currentIndex + 1] : null;

  const highlights = [
    "Complimentary breakfast buffet",
    "24-hour room service",
    "Daily housekeeping",
    "Premium toiletries",
    "In-room safe & minibar",
    "Smart TV with streaming",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[55vh] min-h-[400px] md:h-[65vh] w-full overflow-hidden">
        <Image
          src={room.image}
          alt={room.name}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-primary/15 mix-blend-multiply" />

        {/* Back Button */}
        <div className="absolute top-24 left-4 md:left-8 z-20">
          <Link
            href="/rooms"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors text-sm font-medium bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
          >
            <ArrowLeft className="h-4 w-4" />
            All Rooms
          </Link>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-4 md:px-8 pb-10 md:pb-14">
          <div className="container mx-auto max-w-7xl">
            <p className="text-secondary tracking-[0.2em] uppercase text-xs md:text-sm font-semibold mb-3">
              Raj Havelli Heritage
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 drop-shadow-md">
              {room.name}
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl leading-relaxed">
              {room.description}
            </p>
          </div>
        </div>
      </section>

      {/* Room Details Section */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left: Description & Amenities */}
            <div className="lg:col-span-3">
              {/* Decorative Divider */}
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[2px] w-12 bg-primary/40" />
                <span className="text-secondary-foreground uppercase tracking-widest text-xs font-semibold">
                  Room Overview
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
                About This Room
              </h2>

              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
                {room.longDescription}
              </p>

              {/* Amenities Grid */}
              <div className="mb-12">
                <h3 className="text-xl font-serif text-primary mb-6">
                  Room Amenities
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                  {room.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-xl bg-muted/40 border border-border/50 hover:border-primary/20 hover:bg-muted/60 transition-all duration-300"
                    >
                      <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                        <amenity.icon className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {amenity.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="text-xl font-serif text-primary mb-6">
                  What&apos;s Included
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <div className="shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Booking Card */}
            <div className="lg:col-span-2">
              <div className="sticky top-28">
                {/* Booking Card */}
                <div className="rounded-2xl border border-border bg-card shadow-lg overflow-hidden">
                  {/* Card Header */}
                  <div className="bg-primary p-6 text-white">
                    <p className="text-secondary text-xs uppercase tracking-widest font-semibold mb-1">
                      Book Your Stay
                    </p>
                    <h3 className="text-2xl font-serif">{room.name}</h3>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-6">
                    {/* Room Image Preview */}
                    <div className="relative h-48 rounded-xl overflow-hidden">
                      <Image
                        src={room.image}
                        alt={room.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      For reservations and rate inquiries, please contact us
                      directly. We&apos;ll be delighted to assist you.
                    </p>

                    {/* Contact Info */}
                    <div className="space-y-3 pt-2">
                      <a
                        href={`tel:${hotelDetails.phone.split(",")[0].trim()}`}
                        className="flex items-center gap-3 text-sm text-foreground/80 hover:text-primary transition-colors"
                      >
                        <Phone className="h-4 w-4 text-primary" />
                        {hotelDetails.phone}
                      </a>
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-3 pt-2">
                      <Link
                        href="/contact"
                        className="block w-full text-center bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium px-6 py-3.5 rounded-xl shadow-sm"
                      >
                        Enquire Now
                      </Link>
                      <a
                        href={`tel:${hotelDetails.phone.split(",")[0].trim()}`}
                        className="block w-full text-center bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors font-medium px-6 py-3.5 rounded-xl border border-border"
                      >
                        Call to Book
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Room Navigation */}
      <section className="border-t border-border bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
            {/* Previous Room */}
            {prevRoom ? (
              <Link
                href={`/rooms/${prevRoom.id}`}
                className="group flex items-center gap-4 p-6 md:p-10 hover:bg-muted/50 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    Previous Room
                  </p>
                  <p className="text-lg font-serif text-primary group-hover:text-secondary-foreground transition-colors">
                    {prevRoom.name}
                  </p>
                </div>
              </Link>
            ) : (
              <div className="p-6 md:p-10" />
            )}

            {/* Next Room */}
            {nextRoom ? (
              <Link
                href={`/rooms/${nextRoom.id}`}
                className="group flex items-center justify-end gap-4 p-6 md:p-10 hover:bg-muted/50 transition-colors text-right"
              >
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    Next Room
                  </p>
                  <p className="text-lg font-serif text-primary group-hover:text-secondary-foreground transition-colors">
                    {nextRoom.name}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </Link>
            ) : (
              <div className="p-6 md:p-10" />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
