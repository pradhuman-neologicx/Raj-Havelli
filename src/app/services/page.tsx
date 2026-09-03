import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data";

export const metadata: Metadata = {
  title: "Services & Amenities",
  description: "Discover the world-class services and amenities offered at Raj Havelli.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <PageHeader 
        title="Experiences & Amenities" 
        description="Curated for your ultimate relaxation and enjoyment." 
        image="/images/spa_wellness.png" 
      />

      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
