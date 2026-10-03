import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { Utensils, Coffee, Moon, CheckCircle2, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Dining",
  description: "Experience royal culinary delights at Raj Haveli's restaurants.",
};

const cuisines = [
  "Rajasthani Cuisine",
  "North Indian",
  "Chinese / Continental",
];

const timings = [
  { name: "Breakfast", icon: Coffee, time: "7:00 AM - 10:30 AM" },
  { name: "Lunch", icon: Utensils, time: "12:30 PM - 3:30 PM" },
  { name: "Dinner", icon: Moon, time: "7:00 PM - 11:00 PM" },
];

export default function DiningPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <PageHeader
        title="Dining at Raj Haveli"
        description="Savor authentic flavors and royal culinary experiences."
      />

      {/* The Palace Kitchen Section */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-primary/70 tracking-[0.2em] uppercase text-xs font-bold mb-4">
                Signature Restaurant
              </p>
              <h2 className="font-serif text-3xl md:text-5xl text-primary mb-6">
                The Palace Kitchen
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Step into a world of rich aromas and exquisite tastes at The Palace Kitchen. With a capacity of 100 covers, our top-class restaurant offers a majestic setting for your meals. We take pride in serving authentic, mouth-watering dishes crafted by our expert chefs.
              </p>

              <div className="grid sm:grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="font-serif text-xl text-primary mb-4 flex items-center gap-2">
                    <Utensils className="h-5 w-5 text-secondary" />
                    Cuisine
                  </h3>
                  <ul className="space-y-3">
                    {cuisines.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-primary mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-secondary" />
                    Timings
                  </h3>
                  <ul className="space-y-3">
                    {timings.map((meal, i) => (
                      <li key={i} className="flex items-center justify-between text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <meal.icon className="h-4 w-4 text-primary/70" />
                          {meal.name}
                        </span>
                        <span className="text-sm font-medium">{meal.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-muted/30 border border-border rounded-xl flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-foreground mb-1">In-Room Dining</h4>
                  <p className="text-sm text-muted-foreground">Prefer to dine in your room? We offer 24-hour room service for all our guests.</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/Gallery/Restaurant (2).jpg"
                alt="The Palace Kitchen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rooftop Garden Dining Section */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-muted/20 border-y border-border">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/Gallery/Roof Top Garden.png"
                alt="Rooftop Garden Dining"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div>
              <p className="text-primary/70 tracking-[0.2em] uppercase text-xs font-bold mb-4">
                Open-Air Experience
              </p>
              <h2 className="font-serif text-3xl md:text-5xl text-primary mb-6">
                Rooftop Garden
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Elevate your dining experience under the stars. Our Rooftop Garden offers a serene and romantic ambiance, perfect for evening meals and special celebrations with a beautiful view.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors shadow-sm"
              >
                Reserve a Table
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Culinary Gallery */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">
              A Taste of Royalty
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A glimpse into the culinary masterpieces waiting for you at Raj Haveli.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-md">
              <Image src="/images/Gallery/Restaurant.jpg" alt="Dining Area" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-md">
              <Image src="/images/Gallery/Dinner with Live Kitchen.png" alt="Dinner with Live Kitchen" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-md">
              <Image src="/images/Gallery/Buffet.png" alt="Buffet Selection" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
