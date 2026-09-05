import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { hotelDetails } from "@/data";

export default function ContactPage() {
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
            {/* Contact Form */}
            <ContactForm />

          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="h-[400px] md:h-[500px] w-full relative bg-muted">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.3410453771535!2d73.3342445!3d28.014050299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393fe763aaaaaaab%3A0x345f45499c23dfd1!2sHotel%20Raj%20Haveli!5e0!3m2!1sen!2sin!4v1788437163425!5m2!1sen!2sin"
          className="w-full h-full border-0  transition-all duration-700"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </section>
    </div>
  );
}
