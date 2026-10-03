import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";
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
    default: "Hotel Raj Haveli | Best Heritage Hotel in Bikaner",
    template: "%s | Hotel Raj Haveli Bikaner",
  },
  description: "Experience premium Rajasthani hospitality at Hotel Raj Haveli in Sadulganj, Bikaner. 49 luxury rooms, swimming pool, banquet hall for weddings, and fine dining near Junagarh Fort.",
  keywords: [
    "Hotel in Bikaner",
    "Heritage Hotel in Bikaner",
    "Best hotel in Bikaner",
    "Hotel near Junagarh Fort",
    "Hotels in Sadulganj Bikaner",
    "Family hotel in Bikaner",
    "Banquet hall in Bikaner",
    "Wedding venue in Bikaner",
    "Restaurant in Bikaner",
    "Hotel with swimming pool in Bikaner",
    "Raj Haveli Bikaner"
  ],
  metadataBase: new URL("https://rajhaveli.com"),
  openGraph: {
    title: "Hotel Raj Haveli | Best Heritage Hotel in Bikaner",
    description: "Experience premium Rajasthani hospitality at Hotel Raj Haveli in Sadulganj, Bikaner.",
    url: "https://rajhaveli.com",
    siteName: "Hotel Raj Haveli",
    images: [
      {
        url: "/images/hero_bg.png",
        width: 1200,
        height: 630,
        alt: "Hotel Raj Haveli Bikaner Exterior",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Raj Haveli | Heritage Hotel in Bikaner",
    description: "Premium Rajasthani hospitality, luxury rooms, swimming pool, and fine dining.",
    images: ["/images/hero_bg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              name: "Hotel Raj Haveli Heritage",
              description: "Established in 2016, Hotel Raj Haveli Heritage brings together the warmth of traditional Rajasthani hospitality with the comfort of a modern hotel. Located in Sadulganj, Bikaner.",
              url: "https://rajhaveli.com",
              telephone: "+91-151-2208777",
              email: "rajhaveliheritage@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "B-222, Sadulganj",
                addressLocality: "Bikaner",
                addressRegion: "Rajasthan",
                postalCode: "334001",
                addressCountry: "IN"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 28.0140503,
                longitude: 73.3342445
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.6",
                reviewCount: "112"
              },
              priceRange: "₹₹",
              amenityFeature: [
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Free Wi-Fi",
                  value: true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Swimming Pool",
                  value: true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Restaurant",
                  value: true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Banquet Hall",
                  value: true
                }
              ]
            })
          }}
        />
      </head>
      <body className={`min-h-screen flex flex-col font-sans antialiased text-foreground bg-background`} suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingContactButtons />
      </body>
    </html>
  );
}
