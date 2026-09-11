import { bikanerDestinations } from "@/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, Map, Navigation, Clock, Image as ImageIcon } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import LightboxGallery from "@/components/LightboxGallery";

export default async function DestinationPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  // Use any to bypass strict type checking if some properties are missing in other destinations
  const destination = bikanerDestinations.find(d => d.slug === slug) as any;

  if (!destination) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background pb-12">
      <PageHeader 
        title={destination.name} 
        description={destination.description}
        image={destination.image}
      />

      <div className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
        
        {/* Navigation */}
        <Link href="/" className="inline-flex items-center text-primary/80 hover:text-primary mb-12 font-medium transition-colors group">
          <ArrowLeft className="mr-2 h-5 w-5 transform group-hover:-translate-x-1 transition-transform" />
          Back to Explore
        </Link>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-8 space-y-16">

            
            {/* Description */}
            <div className="prose prose-lg prose-headings:font-serif max-w-none text-muted-foreground">
              <h2 className="text-3xl md:text-4xl text-primary font-serif mb-8 leading-tight">
                About {destination.name}
              </h2>
              
              {destination.detailedDescription ? (
                destination.detailedDescription.map((paragraph: string, idx: number) => (
                  <p key={idx} className={`text-xl leading-relaxed ${idx === 0 ? 'first-letter:text-6xl first-letter:font-serif first-letter:text-primary first-letter:mr-2 first-letter:float-left' : 'mt-6'}`}>
                    {paragraph}
                  </p>
                ))
              ) : (
                <>
                  <p className="text-xl leading-relaxed first-letter:text-6xl first-letter:font-serif first-letter:text-primary first-letter:mr-2 first-letter:float-left">
                    Experience the magic of {destination.name}. Detailed information about this destination will be beautifully presented here. We will curate the most fascinating historical facts, cultural significance, and architectural details to give visitors a true sense of the place.
                  </p>
                  <p className="text-lg leading-relaxed mt-6">
                    Bikaner is known for its rich heritage, and {destination.name} stands as a testament to the glorious past of the region. Visitors from all over the world come to marvel at its unique features, exquisite craftsmanship, and timeless beauty that transports you back in time.
                  </p>
                </>
              )}
            </div>

            {/* Gallery Section */}
            {destination.galleryImages && destination.galleryImages.length > 0 && (
              <div className="pt-8 border-t border-border/50">
                <h3 className="text-2xl font-serif text-primary mb-6 flex items-center">
                  <ImageIcon className="w-6 h-6 mr-3" />
                  Gallery
                </h3>
                <LightboxGallery images={destination.galleryImages} />
              </div>
            )}
            
            {/* Map Section */}
            {destination.mapEmbedUrl && (
              <div className="pt-8 border-t border-border/50">
                <h3 className="text-2xl font-serif text-primary mb-6 flex items-center">
                  <MapPin className="w-6 h-6 mr-3" />
                  Location Map
                </h3>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-border/50 h-[400px]">
                  <iframe 
                    src={destination.mapEmbedUrl} 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            )}
            
          </div>

          <div className="lg:col-span-4 space-y-8">
            {/* Quick Info Card */}
            <div className="bg-card rounded-3xl p-8 shadow-xl border border-border/50 sticky top-28 hover:shadow-2xl transition-shadow duration-500">
              <h3 className="text-2xl font-serif text-primary mb-8 border-b border-border/60 pb-4">Essential Info</h3>
              <ul className="space-y-8">
                <li className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Map className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold tracking-wider uppercase text-primary mb-1">Location</h4>
                    <p className="text-base text-muted-foreground">Bikaner, Rajasthan</p>
                  </div>
                </li>

                {destination.timings && (
                  <li className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold tracking-wider uppercase text-primary mb-1">Timings</h4>
                      <p className="text-base text-muted-foreground">{destination.timings}</p>
                    </div>
                  </li>
                )}

                <li className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Navigation className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold tracking-wider uppercase text-primary mb-1">Getting There</h4>
                    <p className="text-base text-muted-foreground">Easily reachable from Raj Haveli by auto or cab.</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-10 pt-8 border-t border-border/60 space-y-4">
                {destination.directionsUrl ? (
                  <a 
                    href={destination.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-primary text-primary-foreground py-4 rounded-xl hover:bg-primary/90 transition-colors font-medium text-lg shadow-lg hover:shadow-xl active:scale-[0.98] duration-200 flex items-center justify-center"
                  >
                    <MapPin className="mr-2 w-5 h-5" />
                    Get Directions
                  </a>
                ) : (
                  <button className="w-full bg-primary text-primary-foreground py-4 rounded-xl hover:bg-primary/90 transition-colors font-medium text-lg shadow-lg hover:shadow-xl active:scale-[0.98] duration-200">
                    Ask Concierge
                  </button>
                )}
                
                <p className="text-xs text-center text-muted-foreground mt-4">
                  We can arrange transport and guides for your visit.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return bikanerDestinations.map((dest) => ({
    slug: dest.slug,
  }));
}
