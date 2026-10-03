"use client";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, Mail, CalendarCheck } from "lucide-react";

export default function FloatingContactButtons() {
  return (
    <div className="flex fixed right-2 sm:right-4 md:right-6 bottom-10 sm:bottom-12 md:bottom-16 flex-col gap-2 sm:gap-3 md:gap-4 z-50">
      {/* <Link href="tel:+919876543210" className="group flex items-center justify-end">
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 text-white text-xs md:text-sm py-1 md:py-1.5 px-2 md:px-3 rounded-md md:rounded-lg mr-2 md:mr-3 whitespace-nowrap shadow-md translate-x-4 group-hover:translate-x-0 hidden sm:block">
          Call Now
        </span>
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-[0_4px_14px_0_rgba(0,0,0,0.25)] hover:bg-primary/90 hover:scale-110 transition-all duration-300">
          <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </div>
      </Link> */}

      <Link href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-end">
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 text-white text-xs md:text-sm py-1 md:py-1.5 px-2 md:px-3 rounded-md md:rounded-lg mr-2 md:mr-3 whitespace-nowrap shadow-md translate-x-4 group-hover:translate-x-0 hidden sm:block">
          WhatsApp Now
        </span>
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-[0_4px_14px_0_rgba(37,211,102,0.4)] hover:scale-110 transition-all duration-300">
          <Image src="/whatsapp.svg" alt="WhatsApp" width={56} height={56} className="object-contain w-full h-full" />
        </div>
      </Link>

      {/* <Link href="mailto:info@rajhaveli.com" className="group flex items-center justify-end">
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 text-white text-xs md:text-sm py-1 md:py-1.5 px-2 md:px-3 rounded-md md:rounded-lg mr-2 md:mr-3 whitespace-nowrap shadow-md translate-x-4 group-hover:translate-x-0 hidden sm:block">
          Email Us
        </span>
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#007BFF] text-white rounded-full flex items-center justify-center shadow-[0_4px_14px_0_rgba(0,123,255,0.4)] hover:bg-[#0056b3] hover:scale-110 transition-all duration-300">
          <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </div>
      </Link> */}

      {/* <Link href="/contact" className="group flex items-center justify-end">
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 text-white text-xs md:text-sm py-1 md:py-1.5 px-2 md:px-3 rounded-md md:rounded-lg mr-2 md:mr-3 whitespace-nowrap shadow-md translate-x-4 group-hover:translate-x-0 hidden sm:block">
          Book Direct
        </span>
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center shadow-[0_4px_14px_0_rgba(0,0,0,0.25)] hover:bg-secondary/90 hover:scale-110 transition-all duration-300">
          <CalendarCheck className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </div>
      </Link> */}
    </div>
  );
}
