import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { hotelDetails } from "@/data";
import { Phone, Mail, MapPin, MessageCircle, Clock, Map } from "lucide-react";

export default function ContactPage() {
  const phoneNumber = hotelDetails.phone.split(",")[0].trim();
  const rawPhone = phoneNumber.replace(/\s+/g, '');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <PageHeader
        title="Contact Us"
        description="We are here to assist you with any inquiries."
      />

      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-serif text-primary mb-6">Get in Touch</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Whether you are planning a stay, organizing an event, or simply have a question, our dedicated team is ready to assist you.
                </p>

                {/* Quick Action Buttons */}
                <div className="grid grid-cols-2 gap-4 mb-10">
                  <a href={`tel:${rawPhone}`} className="flex items-center gap-3 p-4 rounded-xl border border-border bg-muted/20 hover:bg-muted/50 hover:border-primary/30 transition-all group">
                    <div className="bg-primary/10 p-2 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Phone className="h-5 w-5" />
                    </div>
                    <span className="font-medium text-foreground">Call Us</span>
                  </a>
                  
                  <a href={`https://wa.me/919876543210`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl border border-border bg-muted/20 hover:bg-muted/50 hover:border-green-500/30 transition-all group">
                    <div className="bg-[#25D366]/10 p-2 rounded-lg text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <span className="font-medium text-foreground">WhatsApp</span>
                  </a>

                  <a href="https://maps.google.com/?q=Hotel+Raj+Haveli+Bikaner" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl border border-border bg-muted/20 hover:bg-muted/50 hover:border-primary/30 transition-all group">
                    <div className="bg-primary/10 p-2 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Map className="h-5 w-5" />
                    </div>
                    <span className="font-medium text-foreground">Get Directions</span>
                  </a>

                  <a href={`mailto:${hotelDetails.email}`} className="flex items-center gap-3 p-4 rounded-xl border border-border bg-muted/20 hover:bg-muted/50 hover:border-primary/30 transition-all group">
                    <div className="bg-primary/10 p-2 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <span className="font-medium text-foreground">Email Us</span>
                  </a>
                </div>
              </div>

              {/* Detailed Info */}
              <div className="space-y-6 bg-muted/10 p-8 rounded-2xl border border-border/50">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-serif text-lg font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">{hotelDetails.address}</p>
                  </div>
                </div>

                <div className="h-px bg-border w-full my-4" />

                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-serif text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">{hotelDetails.phone}</p>
                  </div>
                </div>

                <div className="h-px bg-border w-full my-4" />

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-serif text-base font-semibold">Check-in</h3>
                      <p className="text-muted-foreground text-sm">2:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-serif text-base font-semibold">Check-out</h3>
                      <p className="text-muted-foreground text-sm">12:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />

          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="h-[400px] md:h-[500px] w-full relative bg-muted">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.3410453771535!2d73.3342445!3d28.014050299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393fe763aaaaaaab%3A0x345f45499c23dfd1!2sHotel%20Raj%20Haveli!5e0!3m2!1sen!2sin!4v1788437163425!5m2!1sen!2sin"
          className="w-full h-full border-0 transition-all duration-700"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </section>
    </div>
  );
}
