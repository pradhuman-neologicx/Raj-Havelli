import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { hotelDetails } from "@/data";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <PageHeader 
        title="Contact Us" 
        description="We are here to assist you with any inquiries." 
        image="/images/restaurant_bg.png" 
      />

      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-serif text-primary mb-6">Get in Touch</h2>
                <p className="text-muted-foreground text-lg">
                  Whether you are planning a stay, organizing an event, or simply have a question, our dedicated team is ready to assist you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-4 rounded-full text-primary mt-1">
                    <hotelDetails.contactIcons.address className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">{hotelDetails.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-4 rounded-full text-primary mt-1">
                    <hotelDetails.contactIcons.phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">{hotelDetails.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-4 rounded-full text-primary mt-1">
                    <hotelDetails.contactIcons.email className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">{hotelDetails.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border p-8 md:p-10 rounded-xl shadow-lg">
              <h2 className="text-2xl font-serif text-primary mb-6">Send an Inquiry</h2>
              <form action="#" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-foreground">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      required
                      className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-foreground">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      required
                      className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                  <select 
                    id="subject" 
                    className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                  >
                    <option value="reservation">Room Reservation</option>
                    <option value="events">Private Events & Weddings</option>
                    <option value="dining">Dining & Restaurant</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    required
                    className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium py-4 rounded-md shadow-md"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Map UI Mock */}
      <section className="h-[400px] relative w-full bg-muted overflow-hidden">
        <Image 
          src="/images/hero_bg.png" 
          alt="Map location mock" 
          fill 
          className="object-cover opacity-50 grayscale"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-background/90 backdrop-blur p-6 rounded-lg shadow-xl text-center border border-border">
            <hotelDetails.contactIcons.address className="h-8 w-8 text-primary mx-auto mb-2" />
            <h3 className="font-serif text-xl font-bold mb-1">{hotelDetails.name}</h3>
            <p className="text-muted-foreground">{hotelDetails.address}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
