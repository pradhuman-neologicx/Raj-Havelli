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
    gallery: ["/images/room_superior.png", "/images/super-delux2.jpg", "/images/Gallery/Twin Deluxe Room.png"],
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
    gallery: ["/images/Gallery/Deluxe Room.jpeg", "/images/Gallery/Twin Deluxe Room.png", "/images/room_superior.png"],
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
    image: "/images/Gallery/Twin Deluxe Room.png",
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
  //   gallery: ["/images/room_suite.png", "/images/Gallery/Deluxe Room.jpeg", "/images/Gallery/Twin Deluxe Room.png", "/images/room_superior.png"],
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
  "/images/Gallery/Twin Deluxe Room.png",
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
  "/images/Gallery/Roof Top Garden.png",
  "/images/Gallery/Swimming_Pool.png",

];

export const bikanerDestinations = [
  {
    slug: "junagarh-fort",
    name: "Junagarh Fort",
    description: "Asia's Well Maintained Fort",
    image: "/images/junagarh_fort.png",
    detailedDescription: [
      "Junagarh Fort in Bikaner is famous because it is one of the very few major forts in Rajasthan built on flat desert ground rather than on a high hilltop. The structure was originally known as Chintamani and was renamed Junagarh or 'Old Fort' in the early 20th century when the ruling family moved to Lalgarh Palace.",
      "Built between 1589 and 1594 by Raja Rai Singh, the sixth ruler of Bikaner, the fort was constructed under the watchful eye of his prime minister, Karan Chand. It features a stunning mix of Rajput, Mughal, and Gujarati architecture made from red sandstone and marble.",
      "The fort has an unconquered history. Despite many attacks over the centuries, enemies never successfully captured it, except for a brief one-day occupation.",
      "Inside, the complex houses opulent palaces like the mirror-worked Phool Mahal, the cloud-painted Badal Mahal, and the intricately carved Anup Mahal. Today, it also acts as a living royal museum displaying historical weapons, traditional costumes, jewels, and manuscripts."
    ],
    timings: "10:00 AM to 4:30 PM (open all days)",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d14088.88700228218!2d73.31589000549265!3d28.01769746609361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x393fe763aaaaaaab%3A0x345f45499c23dfd1!2sHotel%20Raj%20Haveli%2C%20B-222%2C%20Sadul%20Ganj%2C%20Bikaner%2C%20Rajasthan%20334002!3m2!1d28.0140504!2d73.33424269999999!4m5!1s0x393fdd798ad1841f%3A0x9356163efda8b9d6!2sJunagarh%20Fort%2C%20Bikaner%20Fort%2C%20Bikaner%2C%20Rajasthan%20334001!3m2!1d28.021958599999998!2d73.3179962!5e0!3m2!1sen!2sin!4v1789109698886!5m2!1sen!2sin",
    directionsUrl: "https://www.google.com/maps/dir/Hotel+Raj+Haveli,+B-222,+Sadul+Ganj,+Bikaner,+Rajasthan+334002/Junagarh+Fort,+Bikaner+Fort,+Bikaner,+Rajasthan+334001/@28.0176975,73.31589,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x393fe763aaaaaaab:0x345f45499c23dfd1!2m2!1d73.3342427!2d28.0140504!1m5!1m1!1s0x393fdd798ad1841f:0x9356163efda8b9d6!2m2!1d73.3179962!2d28.0219586!3e0?entry=ttu&g_ep=EgoyMDI2MDkwOC4wIKXMDSoASAFQAw%3D%3D",
    galleryImages: [
      "/images/junagarh_fort.png",
      "/images/junagarh_anup_mahal.png",
      "/images/junagarh_badal_mahal.png",
      "/images/junagarh_exterior.png"
    ]
  },
  {
    slug: "camel-research-centre",
    name: "National Research Centre On Camel",
    description: "Only One in Asia",
    image: "/images/camel_research.png"
  },
  {
    slug: "karni-mata-temple",
    name: "Karni Mata Temple",
    description: "World Famous Rat Temple",
    image: "/images/karni_mata.png"
  },
  {
    slug: "lalgarh-palace",
    name: "Lalgarh Palace and Museum",
    description: "A stunning red sandstone palace built in Indo-Saracenic style, now a heritage hotel and museum.",
    image: "/images/lalgarh_palace.png"
  },
  {
    slug: "rampuria-haveli",
    name: "World Famous Rampuria Haveli",
    description: "Renowned for its exquisite architecture and intricate sandstone carvings.",
    image: "/images/rampuria_haveli.png"
  },
  {
    slug: "heritage-route",
    name: "Heritage Route",
    description: "Thousands of Havelis, World Famous Bhandasar Jain Temple, Laxminath Ji Temple Bika Ji Ki Takri, Spice Market, Old Bazar. Due to narrow streets, this is only possible by Horse Cart or Auto.",
    image: "/images/heritage_route.png"
  },
  {
    slug: "gajner-lake",
    name: "Gajner Lake and Wildlife Sanctuary",
    description: "A lush green sanctuary with a serene lake, perfect for wildlife spotting.",
    image: "/images/gajner_lake.png"
  },
  {
    slug: "sand-dunes",
    name: "Sand Dunes",
    description: "Many Desert Camps In Raisar Village 20 KM from the City.",
    image: "/images/sand_dunes.png"
  },
  {
    slug: "bikaner-delicacies",
    name: "Bikaner's Famous Delicacies",
    description: "Bikaner is also famous for Namkin, Bhujia, Papad, and Sweets, specially Bhujia & Rasgulla.",
    image: "/images/bikaner_sweets.png"
  },
  {
    slug: "jain-temple",
    name: "Seth Bhandashah Jain Temple",
    description: "Famous for its beautiful wall paintings and intricate architecture.",
    image: "/images/jain_temple.png"
  },
  {
    slug: "acharya-tulsi-samadhi",
    name: "Acharya Tulsi Samadhi Sthal",
    description: "A serene memorial honoring the great Jain saint Acharya Tulsi.",
    image: "/images/acharya_tulsi.png"
  },
  {
    slug: "sagar-chatri",
    name: "Sagar Chatri",
    description: "A historical site featuring beautiful cenotaphs.",
    image: "/images/sagar_chatri.png"
  },
  {
    slug: "laxminath-temple",
    name: "Shri Laxminath Temple",
    description: "One of the oldest temples in Bikaner, dedicated to Lord Vishnu and Goddess Laxmi.",
    image: "/images/laxminath_temple.png"
  },
  {
    slug: "bikaji-ki-tekri",
    name: "Bikaji Ki Tekri",
    description: "The original fort of Bikaner built by Rao Bika, a site of immense historical importance.",
    image: "/images/bikaji_tekri.png"
  },
  {
    slug: "kem-road",
    name: "KEM Road",
    description: "The main shopping street of Bikaner, bustling with local markets and shops.",
    image: "/images/kem_road.png"
  }
];
