import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "Raj Haveli | Luxury Hotel",
    template: "%s | Raj Haveli",
  },
  description: "Experience premium Indian luxury at Raj Haveli. Discover elegant rooms, fine dining, and world-class spa facilities.",
  metadataBase: new URL("https://raj-haveli.example.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`min-h-screen flex flex-col font-sans antialiased text-foreground bg-background`} suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
