import { Bed, Coffee, Wifi, Car, Utensils, Droplets, Dumbbell, GlassWater, Plane, Phone, Mail, MapPin } from "lucide-react";

export const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Rooms", href: "/rooms" },
  { name: "Amenities", href: "/amenities" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export const rooms = [
  {
    id: "superior",
    name: "Super Deluxe Room",
    description: "Elegant minimalist design meeting premium comfort. Perfect for solo travelers or couples.",
    longDescription: "Our Super Deluxe offer a tranquil retreat with minimalist Indian decor, light beige walls, and deep teal accents. Experience a restful night on a plush king bed and wake up to natural light.",
    image: "/images/room_superior.png",
    gallery: ["/images/room_superior.png", "/images/super-delux2.jpg", "/images/Gallery/Twin Deluxe Room.jpeg"],
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
    image: "/images/Gallery/Deluxe Room.jpeg",
    gallery: ["/images/Gallery/Deluxe Room.jpeg", "/images/Gallery/Twin Deluxe Room.jpeg", "/images/room_superior.png"],
    amenities: [
      { name: "King Bed", icon: Bed },
      { name: "Free Wi-Fi", icon: Wifi },
      { name: "Mini Bar", icon: GlassWater },
      { name: "Room Service", icon: Utensils },
    ],
  },
  {
    id: "twin_deluxe",
    name: "Twin Deluxe Room",
    description: "Twin beds with premium decor and an inviting atmosphere.",
    longDescription: "Our Twin Deluxe Room offers a tranquil retreat with minimalist Indian decor, light beige walls, and deep teal accents. Experience a restful night on a plush king bed and wake up to natural light.",
    image: "/images/Gallery/Twin Deluxe Room.jpeg",
    gallery: ["/images/aatwin-delux1.jpg", "/images/aatwin-delux2.jpg", "/images/aatwin-delux3.jpg"],
    amenities: [
      { name: "Premium King Bed", icon: Bed },
      { name: "Free Wi-Fi", icon: Wifi },
      { name: "Luxury Bath", icon: Droplets },
      { name: "Airport Transfer", icon: Car },
    ],
  },
  // {
  //   id: "suite",
  //   name: "Luxury Suite",
  //   description: "Expansive suite with a separate lounge area and rich, elegant decor.",
  //   longDescription: "The pinnacle of our offerings, the Luxury Suite features an expansive living area with floor-to-ceiling windows, deep rich green upholstery, and the finest amenities for an unforgettable stay.",
  //   image: "/images/room_suite.png",
  //   gallery: ["/images/room_suite.png", "/images/Gallery/Deluxe Room.jpeg", "/images/Gallery/Twin Deluxe Room.jpeg", "/images/room_superior.png"],
  //   amenities: [
  //     { name: "Master Bedroom", icon: Bed },
  //     { name: "Separate Lounge", icon: Coffee },
  //     { name: "Spa Bathroom", icon: Droplets },
  //     { name: "Butler Service", icon: Plane },
  //   ],
  // }
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
    image: "/images/Gallery/Swimming_Pool.png",
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
  name: "Raj Haveli Heritage Hotel",
  address: "B-222, Sadulganj Bikaner Rajasthan-334001",
  phone: "0151-2208777, 9950584559",
  email: "rajhaveliheritage@gmail.com",
  website: "www.rajhaveliheritage.com",
  contactIcons: { phone: Phone, email: Mail, address: MapPin }
};

export const galleryImages = [
  "/images/Gallery/Deluxe Room.jpeg",
  "/images/Gallery/Twin Deluxe Room.jpeg",
  "/images/Gallery/Buffet.png",

  "/images/Gallery/Dinner with Live Kitchen.png",
  "/images/Gallery/Enterce.png",
  "/images/Gallery/Entrance.png",
  "/images/Gallery/Galary.png",
  "/images/Gallery/Lobby.png",
  "/images/Gallery/Night Look.png",
  "/images/Gallery/Outside view.jpeg",
  "/images/Gallery/Restaurant (2).jpg",
  "/images/Gallery/Restaurant (3).jpg",
  "/images/Gallery/Restaurant.jpg",
  "/images/Gallery/Resturant.jpg",
  "/images/Gallery/Roof Top Garden.jpeg",
  "/images/Gallery/Swimming_Pool.png",

];
