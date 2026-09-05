"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, CalendarDays } from "lucide-react";
import { navigation, hotelDetails } from "@/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300 ease-in-out border-b",
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-2 border-border/50"
          : "bg-transparent py-6 border-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo (Left) */}
          <div className="flex flex-1 justify-start">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt={hotelDetails.name}
                width={220}
                height={80}
                priority
                className={cn(
                  "h-14 md:h-16 w-auto object-contain transition-all duration-300",
                  scrolled ? "opacity-100" : "opacity-90 invert brightness-0"
                )}
              />
            </Link>
          </div>

          {/* Desktop Nav (Center) */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative text-sm font-medium transition-colors group",
                    isActive
                      ? scrolled ? "text-primary" : "text-white"
                      : scrolled ? "text-foreground/70 hover:text-primary" : "text-white/80 hover:text-white"
                  )}
                >
                  {item.name}
                  <span
                    className={cn(
                      "absolute -bottom-1.5 left-0 h-[2px] transition-all duration-300 ease-out",
                      isActive ? "w-full" : "w-0 group-hover:w-full",
                      scrolled ? "bg-primary" : "bg-white"
                    )}
                  />
                </Link>
              );
            })}
          </div>

          {/* Actions (Right) */}
          <div className="flex flex-1 items-center justify-end gap-4">
            <Link 
              href="/booking" 
              className={cn(
                "hidden md:inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all duration-300 px-6 py-2.5 shadow-sm",
                scrolled 
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-md" 
                  : "bg-white text-primary hover:bg-white/90 hover:shadow-lg"
              )}
            >
              <CalendarDays className="w-4 h-4" />
              Enquire Now
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className={cn("h-6 w-6", scrolled ? "text-foreground" : "text-white")} />
              ) : (
                <Menu className={cn("h-6 w-6", scrolled ? "text-foreground" : "text-white")} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg">
          <div className="flex flex-col px-4 py-6 gap-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-medium transition-colors",
                  pathname === item.href ? "text-primary" : "text-foreground/80 hover:text-primary"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-border">
              <Link
                href="/booking"
                onClick={() => setIsOpen(false)}
                className="w-full flex justify-center items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold px-6 py-3 rounded-xl shadow-sm"
              >
                <CalendarDays className="w-5 h-5" />
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
