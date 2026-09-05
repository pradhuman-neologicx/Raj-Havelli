import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Coffee, Globe, ShieldCheck, ConciergeBell } from "lucide-react";
import RoomCard from "@/components/RoomCard";
import ServiceCard from "@/components/ServiceCard";
import LightboxGallery from "@/components/LightboxGallery";
import VideoSection from "@/components/VideoSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import DiscoverSection from "@/components/DiscoverSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { rooms, services, galleryImages } from "@/data";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover object-center w-full h-full"
            poster="/images/hero_bg.png"
          >
            <source src="/images/intro.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-primary/40 md:bg-primary/30 mix-blend-multiply" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="h-[1px] w-16 md:w-24 bg-white"></div>
            <p className="text-secondary tracking-[0.2em] uppercase text-sm md:text-base font-medium ">
              Welcome to
            </p>
            <div className="h-[1px] w-16 md:w-24 bg-white"></div>
          </div>
          <h1 className="sr-only">Raj Havelli</h1>
          <Image
            src="/images/Lage-Logo.png"
            alt="Raj Havelli Logo"
            width={800}
            height={300}
            className="mx-auto w-auto h-32 md:h-48 lg:h-64 mb-6 drop-shadow-lg object-contain brightness-0 invert"
            priority
          />
          <p className="text-lg md:text-xl text-white/90 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience the pinnacle of Indian luxury, where heritage meets modern elegance in a serene sanctuary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/rooms"
              className="bg-secondary text-secondary-foreground hover:bg-white transition-colors font-medium px-8 py-4 rounded-md shadow-lg"
            >
              Discover Rooms
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border border-white text-white hover:bg-white/10 transition-colors font-medium px-8 py-4 rounded-md backdrop-blur-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 px-4 md:px-6 bg-background">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Introduction to Raj Haveli Heritage Hotel</h2>
          <div className="text-lg text-muted-foreground leading-relaxed md:text-xl space-y-6">
            <p>
              It gives us immense pleasure to introduce the existence of a newly constructed Heritage Style Hotel in the city of Bikaner viz. <strong className="text-primary font-serif font-medium">HOTEL RAJ HAVELI HERITAGE</strong>, in the heart of the city with an inventory of 24 Twin Sharing + 24 King Size Bed Room + 01 Suite making a total inventory of 49 Rooms with all the amenities and accessories equivalent to a 4-Star Hotel.
            </p>
            <p>
              It features a Top Class Restaurant with a capacity of 100 Covers, Swimming Pool, Roof Top Garden & Free Wi-Fi. Additionally, it has a Banquet Hall for up to 150 persons and a Conference Hall for up to 20 persons equipped with all modern facilities.
            </p>
            <p className="text-base md:text-lg">
              This property came into existence on 22nd March, 2016 and till then a lot of Travel Agencies throughout India have extended their co-operation and this year also we are getting good response from them. But we would like to put forward our humble request with you to kindly extend your cooperation and kindly experience our services and we are confident enough that we can prove our worth.
            </p>
          </div>

        </div>
      </section>



      {/* Featured Rooms */}
      <section className="py-24 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <p className="text-secondary-foreground uppercase tracking-wider text-sm font-semibold mb-2">Accommodations</p>
              <h2 className="text-3xl md:text-5xl font-serif text-primary">Featured Rooms</h2>
            </div>
            <Link href="/rooms" className="inline-flex items-center text-primary font-medium hover:text-secondary-foreground transition-colors">
              View All Rooms
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.slice(0, 3).map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <FacilitiesSection />


      {/* Gallery Preview */}
      <section className="py-24 px-4 md:px-6 bg-background">
        <div className="container mx-auto">

          <div className="text-center mb-12 gap-4">
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-2">A Glimpse of Raj Havelli</h2>
            <p className="text-muted-foreground text-lg">Immerse yourself in the beauty of our property.</p>
          </div>

          <LightboxGallery images={galleryImages.slice(0, 8)} />

          {/* <div className="text-center mt-10">
            <Link href="/gallery" className="inline-flex items-center text-primary font-medium hover:text-secondary-foreground transition-colors pb-1 border-b border-primary hover:border-secondary-foreground">
              View Full Gallery
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div> */}
        </div>
      </section>

      {/* Discover Section */}
      <DiscoverSection />


      {/* Culinary Excellence Section */}
      <section className="w-full flex flex-col lg:flex-row bg-primary text-white overflow-hidden">
        {/* Image Side */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[500px]">
          <Image
            src="/images/restaurant_bg.png"
            alt="The Restaurant"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Content Side */}
        <div className="w-full lg:w-1/2 flex items-center p-8 md:p-12 lg:p-20">
          <div className="max-w-2xl">
            <p className="text-secondary uppercase tracking-widest text-xs md:text-sm font-semibold mb-4">
              Culinary Excellence
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
              The Restaurant
            </h2>
            <p className="text-white/70 mb-12 leading-relaxed text-sm md:text-base">
              Savour an exquisite culinary journey at our in-house restaurant, where traditional Rajasthani flavours meet contemporary gastronomy. Our chefs craft each dish with passion, using the finest locally sourced ingredients.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 mb-12">
              <div className="flex gap-4">
                <div className="mt-0.5 bg-secondary/10 p-2 rounded-md text-secondary border border-secondary/20 shrink-0 h-fit">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-base text-white mb-1">Rajasthani Cuisine</h4>
                  <p className="text-sm text-white/60">Authentic royal recipes passed down through generations.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-0.5 bg-secondary/10 p-2 rounded-md text-secondary border border-secondary/20 shrink-0 h-fit">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-base text-white mb-1">Multi-Cuisine</h4>
                  <p className="text-sm text-white/60">A diverse menu featuring Indian and international dishes.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-0.5 bg-secondary/10 p-2 rounded-md text-secondary border border-secondary/20 shrink-0 h-fit">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-base text-white mb-1">Hygienic & Fresh</h4>
                  <p className="text-sm text-white/60">Highest standards of hygiene with farm-fresh ingredients.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-0.5 bg-secondary/10 p-2 rounded-md text-secondary border border-secondary/20 shrink-0 h-fit">
                  <ConciergeBell className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-base text-white mb-1">Room Service</h4>
                  <p className="text-sm text-white/60">In-room dining available for your comfort and convenience.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* Testimonials */}
      <TestimonialsSection />
    </div>
  );
}
