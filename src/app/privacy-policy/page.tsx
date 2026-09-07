import Link from 'next/link';
import { hotelDetails } from "@/data";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: 'Privacy Policy | Raj Havelli',
  description: 'Privacy Policy for Raj Havelli Hotel',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <PageHeader
        title="Privacy Policy"
        description="Learn about how we handle and protect your personal information."
      />

      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Sticky Table of Contents */}
          <div className="md:col-span-1 relative">
            <div className="sticky top-32 bg-[#f8f9fa] p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-serif text-xl mb-4 text-[#031b18] font-semibold border-b border-gray-200 pb-2">Contents</h3>
              <nav className="flex flex-col space-y-3 text-sm font-medium">
                <a href="#information-we-collect" className="text-gray-600 hover:text-secondary transition-colors">1. Information We Collect</a>
                <a href="#how-we-use-information" className="text-gray-600 hover:text-secondary transition-colors">2. How We Use Information</a>
                <a href="#data-protection" className="text-gray-600 hover:text-secondary transition-colors">3. Data Protection</a>
                <a href="#cookies" className="text-gray-600 hover:text-secondary transition-colors">4. Cookies Policy</a>
                <a href="#contact-us" className="text-gray-600 hover:text-secondary transition-colors">5. Contact Us</a>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-3 text-gray-700 leading-relaxed space-y-12">
            <p className="text-xl text-gray-600 font-light">
              At Raj Havelli, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or book a stay with us.
            </p>

            <section id="information-we-collect" className="scroll-mt-32">
              <h2 className="text-3xl font-serif text-[#031b18] mb-6">1. Information We Collect</h2>
              <p className="mb-4">We may collect information about you in a variety of ways. The information we may collect includes:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong className="text-gray-900">Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information.</li>
                <li><strong className="text-gray-900">Payment Data:</strong> Financial information necessary to process your bookings, such as credit card numbers, which are processed securely through our payment partners.</li>
                <li><strong className="text-gray-900">Derivative Data:</strong> Information our servers automatically collect when you access the website, such as your IP address, your browser type, and your operating system.</li>
              </ul>
            </section>

            <section id="how-we-use-information" className="scroll-mt-32">
              <h2 className="text-3xl font-serif text-[#031b18] mb-6">2. How We Use Information</h2>
              <p className="mb-4">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you to:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li>Create and manage your reservations and account.</li>
                <li>Process transactions and send related information, including confirmations and receipts.</li>
                <li>Send you marketing and promotional communications (if opted in).</li>
                <li>Respond to customer service requests and support needs.</li>
                <li>Improve our website and hotel services.</li>
              </ul>
            </section>

            <section id="data-protection" className="scroll-mt-32">
              <h2 className="text-3xl font-serif text-[#031b18] mb-6">3. Data Protection</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
            </section>

            <section id="cookies" className="scroll-mt-32">
              <h2 className="text-3xl font-serif text-[#031b18] mb-6">4. Cookies Policy</h2>
              <p>
                We may use cookies, web beacons, tracking pixels, and other tracking technologies on our website to help customize and improve your experience. When you access the website, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the website.
              </p>
            </section>

            <section id="contact-us" className="scroll-mt-32">
              <h2 className="text-3xl font-serif text-[#031b18] mb-6">5. Contact Us</h2>
              <p className="mb-6">If you have questions or comments about this Privacy Policy, please contact us at:</p>
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <p className="font-serif text-2xl text-[#031b18] mb-2">{hotelDetails.name}</p>
                <div className="space-y-1 text-gray-600 whitespace-pre-wrap">
                  <p>{hotelDetails.address}</p>
                  <p className="pt-4"><strong>Email:</strong> {hotelDetails.email}</p>
                  <p><strong>Phone:</strong> {hotelDetails.phone}</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
}
