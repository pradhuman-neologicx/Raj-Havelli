import { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import BookingForm from "@/components/BookingForm";
import { hotelDetails } from "@/data";

export const metadata: Metadata = {
  title: "Book Your Stay",
  description: "Reserve your luxury experience at Hotel Raj Haveli Heritage in Bikaner.",
};

export default function BookingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <PageHeader
        title="Booking Enquiry"
        description="Send us your stay requirements and our team will get back to you with the best available options."
      />

      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Booking Form */}
            <div className="lg:col-span-8">
              <div className="bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
                <div className="p-8 md:p-10 border-b border-border bg-muted/20">
                  <h2 className="text-3xl font-serif text-primary mb-2">Booking Enquiry</h2>
                  <p className="text-muted-foreground">
                    Please fill out the form below. Our reservation team will contact you shortly to confirm your booking and arrange payment details.
                  </p>
                </div>
                
                <BookingForm />
              </div>
            </div>

            {/* Sidebar Information */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Hotel Info Card */}
              <div className="bg-card border border-border rounded-2xl shadow-lg p-8">
                <h3 className="font-serif text-2xl text-primary mb-6">Need Assistance?</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Call Us</p>
                      <a href={`tel:${hotelDetails.phone.split(',')[0]}`} className="text-muted-foreground hover:text-primary transition-colors">
                        {hotelDetails.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Email Us</p>
                      <a href={`mailto:${hotelDetails.email}`} className="text-muted-foreground hover:text-primary transition-colors break-all">
                        {hotelDetails.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Visit Us</p>
                      <p className="text-muted-foreground">
                        {hotelDetails.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Policies Card */}
              <div className="bg-muted/30 border border-border rounded-2xl p-8">
                <h3 className="font-serif text-xl text-foreground mb-4">Booking Policies</h3>
                <ul className="space-y-3">
                  {[
                    "Check-in time is 12:00 PM.",
                    "Check-out time is 12:00 PM.",
                    "Free cancellation up to 48 hours before check-in.",
                    "Valid ID required for all guests at check-in.",
                    "Pets are not allowed on the property."
                  ].map((policy, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground leading-relaxed">{policy}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
