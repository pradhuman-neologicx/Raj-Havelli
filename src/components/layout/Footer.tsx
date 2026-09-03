import Link from "next/link";
import Image from "next/image";
import { navigation, hotelDetails } from "@/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Wave SVG Divider */}
      <div className="w-full overflow-hidden leading-none flex -mb-1">
        <Image
          src="/wave.svg"
          alt=""
          width={1920}
          height={120}
          className="w-full h-auto block rotate-180"
          priority
        />
      </div>
      <style>{`.elementor-shape-fill { fill: #031b18; }`}</style>
      <footer className="bg-[#031b18] text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="space-y-4">
              <Image
                src="/logo.png"
                alt={hotelDetails.name}
                width={260}
                height={100}
                className="object-contain h-20 w-auto mb-2 invert brightness-0 opacity-90"
              />
              <p className="text-primary-foreground/80 max-w-xs">
                Experience the pinnacle of Indian luxury, where heritage meets modern elegance.
              </p>
              <div className="flex space-x-4 pt-2">
                <Link href="#" className="hover:text-secondary transition-colors" aria-label="Instagram">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-secondary transition-colors" aria-label="Facebook">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.81l.39-4h-4.2V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-secondary transition-colors" aria-label="Twitter">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-serif text-xl font-semibold">Quick Links</h4>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-primary-foreground/80 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-serif text-xl font-semibold">Contact Us</h4>
              <ul className="space-y-4 text-primary-foreground/80">
                <li className="flex items-start gap-3">
                  <hotelDetails.contactIcons.address className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>{hotelDetails.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <hotelDetails.contactIcons.phone className="h-5 w-5 shrink-0" />
                  <span>{hotelDetails.phone}</span>
                </li>
                <li className="flex items-center gap-3">
                  <hotelDetails.contactIcons.email className="h-5 w-5 shrink-0" />
                  <span>{hotelDetails.email}</span>
                </li>
              </ul>
            </div>

            {/* Newsletter (UI Only) */}
            <div className="space-y-4">
              <h4 className="font-serif text-xl font-semibold">Newsletter</h4>
              <p className="text-primary-foreground/80 text-sm">
                Subscribe to receive exclusive offers and updates.
              </p>
              <form className="flex flex-col gap-2" action="#">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-md px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                />
                <button
                  type="submit"
                  className="bg-secondary text-secondary-foreground font-medium rounded-md px-4 py-2 hover:bg-secondary/90 transition-colors mt-2"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10">
          <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>&copy; {currentYear} {hotelDetails.name}. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
