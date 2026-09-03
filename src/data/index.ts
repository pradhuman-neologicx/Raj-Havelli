import { Bed, Coffee, Wifi, Car, Utensils, Droplets, Dumbbell, GlassWater, Plane, Phone, Mail, MapPin } from "lucide-react";

export const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Rooms", href: "/rooms" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export const rooms = [
  {
    id: "superior",
    name: "Superior Room",
    description: "Elegant minimalist design meeting premium comfort. Perfect for solo travelers or couples.",
    longDescription: "Our Superior Rooms offer a tranquil retreat with minimalist Indian decor, light beige walls, and deep teal accents. Experience a restful night on a plush king bed and wake up to natural light.",
    image: "/images/room_superior.png",
    amenities: [
      { name: "King Bed", icon: Bed },
      { name: "Free Wi-Fi", icon: Wifi },
      { name: "Coffee Maker", icon: Coffee },
    ],
  },
  {
    id: "deluxe",
    name: "Deluxe Room",
    description: "Spacious premium room with natural light and modern luxury decor.",
    longDescription: "The Deluxe Room provides extra space and enhanced amenities. Featuring a sitting area, modern luxury decor with teal accents, and a large marble bathroom.",
    image: "/images/room_deluxe.png",
    amenities: [
      { name: "King Bed", icon: Bed },
      { name: "Free Wi-Fi", icon: Wifi },
      { name: "Mini Bar", icon: GlassWater },
      { name: "Room Service", icon: Utensils },
    ],
  },
  {
    id: "signature",
    name: "Signature Room",
    description: "Luxury Indian heritage style room with intricate carvings and rich colors.",
    longDescription: "Immerse yourself in authentic Indian heritage in our Signature Room. With intricate wood carvings, golden accents, and plush textiles, this room is a true luxury experience.",
    image: "/images/room_signature.png",
    amenities: [
      { name: "Premium King Bed", icon: Bed },
      { name: "Free Wi-Fi", icon: Wifi },
      { name: "Luxury Bath", icon: Droplets },
      { name: "Airport Transfer", icon: Car },
    ],
  },
  {
    id: "suite",
    name: "Luxury Suite",
    description: "Expansive suite with a separate lounge area and rich, elegant decor.",
    longDescription: "The pinnacle of our offerings, the Luxury Suite features an expansive living area with floor-to-ceiling windows, deep rich green upholstery, and the finest amenities for an unforgettable stay.",
    image: "/images/room_suite.png",
    amenities: [
      { name: "Master Bedroom", icon: Bed },
      { name: "Separate Lounge", icon: Coffee },
      { name: "Spa Bathroom", icon: Droplets },
      { name: "Butler Service", icon: Plane },
    ],
  }
];

export const services = [
  {
    id: "restaurant",
    name: "Fine Dining Restaurant",
    description: "Experience authentic Indian and international cuisine in an elegant setting.",
    image: "/images/restaurant_bg.png",
    icon: Utensils
  },
  {
    id: "spa",
    name: "Wellness & Spa",
    description: "Rejuvenate your body and mind in our serene luxury spa.",
    image: "/images/spa_wellness.png",
    icon: Droplets
  },
  {
    id: "pool",
    name: "Swimming Pool",
    description: "Relax by our indoor/outdoor pool with soft warm lighting.",
    image: "/images/service_pool.png",
    icon: Droplets
  },
  {
    id: "fitness",
    name: "Fitness Center",
    description: "State-of-the-art modern gym equipment in a clean, natural light environment.",
    image: "/images/service_fitness.png",
    icon: Dumbbell
  },
  {
    id: "events",
    name: "Private Events",
    description: "Grand banquet halls perfect for weddings, corporate events, and private parties.",
    image: "/images/service_events.png",
    icon: GlassWater
  }
];

export const hotelDetails = {
  name: "Raj Havelli",
  address: "123 Heritage Marg, Royal District, City, India",
  phone: "+91 98765 43210",
  email: "reservations@rajhavelli.example.com",
  contactIcons: { phone: Phone, email: Mail, address: MapPin }
};

export const galleryImages = [
  "/images/hero_bg.png",
  "/images/room_deluxe.png",
  "/images/room_signature.png",
  "/images/room_suite.png",
  "/images/room_superior.png",
  "/images/restaurant_bg.png",
  "/images/spa_wellness.png",
  "/images/service_pool.png",
  "/images/service_fitness.png",
  "/images/service_events.png",
];
