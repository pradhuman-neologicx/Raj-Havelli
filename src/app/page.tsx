import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Coffee, Globe, ShieldCheck, ConciergeBell, CalendarCheck, Compass } from "lucide-react";
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
            <source src="/images/intro2.mp4" type="video/mp4" />
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
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white mb-4 drop-shadow-lg leading-tight">
            Raj Haveli Heritage Hotel
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-white/90 mb-8 drop-shadow-md">
            A Heritage Stay in the Heart of Bikaner
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-xs md:text-sm text-white/90 font-medium mb-10 max-w-4xl mx-auto uppercase tracking-widest drop-shadow-md">
            <span>49 Rooms</span>
            <span className="text-secondary opacity-70">&bull;</span>
            <span>Multi-Cuisine Restaurant</span>
            <span className="text-secondary opacity-70">&bull;</span>
            <span>Swimming Pool</span>
            <span className="text-secondary opacity-70">&bull;</span>
            <span>Rooftop Garden</span>
            <span className="text-secondary opacity-70">&bull;</span>
            <span>Banquet &amp; Conference</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group flex items-center justify-center gap-2 bg-secondary text-secondary-foreground hover:bg-white transition-colors font-semibold px-8 py-4 rounded-md shadow-lg tracking-wider text-sm md:text-base"
            >
              <CalendarCheck className="w-5 h-5 group-hover:scale-110 transition-transform" />
              BOOK YOUR STAY
            </Link>
            <Link
              href="/rooms"
              className="group flex items-center justify-center gap-2 bg-transparent border border-white text-white hover:bg-white/10 transition-colors font-semibold px-8 py-4 rounded-md backdrop-blur-sm tracking-wider text-sm md:text-base"
            >
              <Compass className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              EXPLORE ROOMS
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 px-4 md:px-6 bg-background">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Since 2016, Hospitality Rooted in Bikaner</h2>
          <div className="text-lg text-muted-foreground leading-relaxed md:text-xl space-y-6 max-w-4xl mx-auto">
            <p>
              Established in 2016, <strong className="text-primary font-serif font-medium">Hotel Raj Haveli Heritage</strong> brings together the warmth of traditional Rajasthani hospitality with the comfort of a modern hotel. Located in Sadulganj, Bikaner, our 49-room property is designed for leisure travellers, families, business guests and celebrations.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-0 items-center bg-muted/30 rounded-3xl overflow-hidden shadow-sm border border-border/50 text-left mx-auto max-w-5xl hover:shadow-md transition-shadow duration-300 group">
            <div className="relative h-64 md:h-full min-h-[350px] w-full overflow-hidden">
              <Image 
                src="/images/sand_dunes.png" 
                alt="Desert Safari in Bikaner" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8 md:p-12 bg-card h-full flex flex-col justify-center">
              <h3 className="font-serif text-3xl text-primary mb-4 font-medium flex items-center">
                <span className="text-2xl mr-2">✨</span> Curated Desert Experiences
              </h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Immerse yourself in the golden sands of Bikaner. We organize exclusive, tailored safari experiences directly from the hotel so you can explore the Thar desert in comfort and style.
              </p>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center text-muted-foreground bg-muted/50 p-4 rounded-2xl border border-border/50 hover:bg-muted transition-colors">
                  <span className="text-3xl mr-4 flex-shrink-0">🐪</span> 
                  <span className="font-semibold text-foreground mr-auto">Camel Safari</span> 
                  <span className="italic text-primary/90 text-sm border border-primary/20 bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap font-medium">On demand</span>
                </li>
                <li className="flex items-center text-muted-foreground bg-muted/50 p-4 rounded-2xl border border-border/50 hover:bg-muted transition-colors">
                  <span className="text-3xl mr-4 flex-shrink-0">🚙</span> 
                  <span className="font-semibold text-foreground mr-auto">Jeep Safari</span> 
                  <span className="italic text-primary/90 text-sm border border-primary/20 bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap font-medium">On demand</span>
                </li>
              </ul>
            </div>
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
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-2">A Glimpse of Raj Haveli</h2>
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

      {/* Weddings & Events Section */}
      <section className="w-full flex flex-col lg:flex-row-reverse bg-[#fcf9f2] overflow-hidden">
        {/* Image Side */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[550px]">
          <Image
            src="/images/service_events.png"
            alt="Weddings & Events at Raj Haveli"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Content Side */}
        <div className="w-full lg:w-1/2 flex items-center p-8 md:p-12 lg:p-20 relative">
          <div className="max-w-2xl relative z-10">
            <p className="text-primary uppercase tracking-widest text-xs md:text-sm font-bold mb-4">
              Weddings & Events
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6 leading-tight">
              Celebrate Your Special Moments at Raj Haveli
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed text-lg">
              Whether it's a grand royal wedding or an intimate corporate retreat, our versatile spaces and impeccable service guarantee a flawless event.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-primary/90 font-medium text-lg">
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-secondary shrink-0" /> Weddings</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-secondary shrink-0" /> Engagements</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-secondary shrink-0" /> Birthday celebrations</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-secondary shrink-0" /> Social gatherings</li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-secondary shrink-0" /> Corporate events</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-secondary shrink-0" /> Conferences</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-secondary shrink-0" /> Meetings</li>
              </ul>
            </div>

            <div className="bg-white border border-primary/10 shadow-sm p-6 rounded-xl mb-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1 font-semibold">Banquet Capacity</p>
                  <p className="text-2xl font-serif text-primary font-bold">150 Guests</p>
                </div>
                <div className="hidden sm:block w-px h-12 bg-primary/20"></div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1 font-semibold">Conference Capacity</p>
                  <p className="text-2xl font-serif text-primary font-bold">20 Guests</p>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center bg-secondary text-secondary-foreground hover:bg-primary hover:text-white transition-colors font-bold px-8 py-4 rounded-md shadow-md tracking-wider"
            >
              ENQUIRE FOR AN EVENT
              <ArrowRight className="ml-3 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />
    </div>
  );
}
