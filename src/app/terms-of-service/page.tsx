import Link from 'next/link';
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: 'Terms of Service | Raj Havelli',
  description: 'Terms of Service for Raj Havelli Hotel',
};

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <PageHeader
        title="Terms of Service"
        description="Please read these terms and conditions carefully before using our services."
      />

      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Sticky Table of Contents */}
          <div className="md:col-span-1 relative">
            <div className="sticky top-32 bg-[#f8f9fa] p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-serif text-xl mb-4 text-[#031b18] font-semibold border-b border-gray-200 pb-2">Contents</h3>
              <nav className="flex flex-col space-y-3 text-sm font-medium">
                <a href="#booking-policy" className="text-gray-600 hover:text-secondary transition-colors">1. Booking Policy</a>
                <a href="#cancellation-refund" className="text-gray-600 hover:text-secondary transition-colors">2. Cancellation & Refund</a>
                <a href="#check-in-out" className="text-gray-600 hover:text-secondary transition-colors">3. Check-in & Check-out</a>
                <a href="#guest-responsibilities" className="text-gray-600 hover:text-secondary transition-colors">4. Guest Responsibilities</a>
                <a href="#liability" className="text-gray-600 hover:text-secondary transition-colors">5. Liability</a>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-3 text-gray-700 leading-relaxed space-y-12">
            <p className="text-xl text-gray-600 font-light">
              Welcome to Raj Havelli. These Terms of Service outline the rules and regulations for the use of our website and the terms under which we provide our hotel services to you.
            </p>

            <section id="booking-policy" className="scroll-mt-32">
              <h2 className="text-3xl font-serif text-[#031b18] mb-6">1. Booking Policy</h2>
              <p className="mb-4">By making a reservation with Raj Havelli, you agree to the following booking conditions:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li>All bookings are subject to availability and confirmation by the hotel.</li>
                <li>A valid credit card is required to secure your reservation at the time of booking.</li>
                <li>The name on the credit card used for booking should correspond to the guest staying at the property.</li>
                <li>We reserve the right to pre-authorize the credit card prior to arrival.</li>
              </ul>
            </section>

            <section id="cancellation-refund" className="scroll-mt-32">
              <h2 className="text-3xl font-serif text-[#031b18] mb-6">2. Cancellation & Refund</h2>
              <p className="mb-4">Our cancellation policy is designed to offer flexibility while ensuring we can manage our room inventory effectively:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li>Cancellations made up to 48 hours before the check-in date will incur no charges.</li>
                <li>Cancellations made within 48 hours of check-in will incur a fee equivalent to one night's stay.</li>
                <li>No-shows will be charged the full amount of the reservation.</li>
                <li>Special promotional rates may be non-refundable; please refer to specific booking terms.</li>
              </ul>
            </section>

            <section id="check-in-out" className="scroll-mt-32">
              <h2 className="text-3xl font-serif text-[#031b18] mb-6">3. Check-in & Check-out</h2>
              <p className="mb-4">To ensure a smooth transition for all our guests, please note our standard timings:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Check-in:</strong> 12:00 PM – 11:59 PM</li>
                <li><strong>Check-out:</strong> Until 12:00 PM</li>
                <li>Early check-in and late check-out are subject to availability and may incur additional charges.</li>
                <li>A valid government-issued photo ID is required for all guests at the time of check-in.</li>
              </ul>
            </section>

            <section id="guest-responsibilities" className="scroll-mt-32">
              <h2 className="text-3xl font-serif text-[#031b18] mb-6">4. Guest Responsibilities</h2>
              <p className="mb-4">We strive to maintain a peaceful and safe environment for all our guests. As a guest, you agree to:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li>Conduct yourself in a respectable manner and not cause any nuisance or annoyance to other guests.</li>
                <li>Not smoke in any indoor areas, including rooms. Designated smoking areas are provided outside.</li>
                <li>Pay for any loss or damage to hotel property caused by you or your party during your stay.</li>
                <li>Not bring pets unless specifically arranged and agreed upon prior to arrival.</li>
              </ul>
            </section>

            <section id="liability" className="scroll-mt-32">
              <h2 className="text-3xl font-serif text-[#031b18] mb-6">5. Liability</h2>
              <p>
                Raj Havelli will not be held responsible for any loss or damage to guests' personal belongings, valuables, or vehicles during their stay. Guests are advised to use the in-room safes provided for their valuables. The hotel's total liability for any claims shall not exceed the total cost of the guest's reservation.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
}
