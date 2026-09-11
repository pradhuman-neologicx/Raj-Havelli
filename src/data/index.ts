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
    image: "/images/camel_research.png",
    detailedDescription: [
      "The National Camel Research Centre in Bikaner, Rajasthan, is a beacon of cultural heritage and scientific endeavour. Established in 1984 by the Central Government of India, this pioneering institution is dedicated to the research, conservation, and promotion of the majestic camel—an integral part of Rajasthan.",
      "For generations, camels have been serving as lifelines for local communities by providing transportation, milk, and companionship in harsh desert conditions. The centre plays a crucial role in safeguarding the future of Rajasthan's camel population through pioneering efforts in breeding, nutrition, and disease management.",
      "It is more than just a scientific institution; it is a living museum of Rajasthan's cultural heritage. You can explore research laboratories, veterinary clinics, and breeding enclosures. You can also witness traditional camel performances, such as races and dances, which showcase the deep bond between humans and camels.",
      "If you want to take home a memento, the centre's souvenir shop offers a wide range of camel-themed merchandise, including handicrafts, textiles, and artworks created by local artisans."
    ],
    location: "ICAR-National Research Centre on Camel, Shivbari Jorbeer, Jodhpur Bypass, Bikaner, Rajasthan 334001",
    timings: "02:00 PM to 06:00 PM (Closed on Sundays and public holidays)",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d28183.583011998573!2d73.32834903707551!3d27.995491065158223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x393fe763aaaaaaab%3A0x345f45499c23dfd1!2sHotel%20Raj%20Haveli%2C%20B-222%2C%20Sadul%20Ganj%2C%20Bikaner%2C%20Rajasthan%20334002!3m2!1d28.0140504!2d73.33424269999999!4m5!1s0x393fe72935874b9f%3A0x5c887c3b61e60021!2sICAR-National%20Research%20Centre%20on%20Camel%2C%20Shiv%20bari%20Jorbeer%2C%20Jodhpur%20Bypass%2C%20Bikaner%2C%20Rajasthan%20334001!3m2!1d27.9790086!2d73.3613065!5e0!3m2!1sen!2sin!4v1789110900762!5m2!1sen!2sin",
    directionsUrl: "https://www.google.com/maps/dir/Hotel+Raj+Haveli,+Bikaner/ICAR-National+Research+Centre+on+Camel,+Bikaner/",
    galleryImages: [
      "/images/camel_research.png",
      "/images/camel_centre_main_1789110754490.png",
      "/images/camel_centre_performance_1789110768720.png",
      "/images/camel_centre_souvenir_1789110784037.png"
    ]
  },
  {
    slug: "karni-mata-temple",
    name: "Karni Mata Temple",
    description: "World Famous Rat Temple",
    image: "/images/karni_mata.png",
    location: "Deshnok, Bikaner, Rajasthan",
    detailedDescription: [
      "The famous Karni Mata Temple is located in the Deshnok town of Bikaner district in Rajasthan. The present magnificent marble structure was built in the early 20th century by Maharaja Ganga Singh of Bikaner. The entrance of the temple features solid silver doors with beautiful depictions of the stories of the goddess.",
      "Karni Mata is considered an incarnation of Goddess Durga, who is the family deity of the royal families of Bikaner and Jodhpur. The temple is famous worldwide as the 'Rat Temple'. It is home to around 25,000 black rats, known as 'Kaaba' in the local language.",
      "These rats are considered highly sacred. According to local belief, they are the descendants of Mata Karni and the reincarnation of her sons. Despite having so many rats, there is remarkably no foul smell in the temple premises, nor has any disease like the plague ever spread.",
      "Devotees consider it incredibly auspicious to spot a white rat (white Kaaba) among the thousands of black ones; doing so is believed to fulfill one's wishes. Before being distributed among the devotees, the Prasad (sacred offering) is first eaten by the rats, which is considered a profound blessing."
    ],
    galleryImages: [
      "/images/karni_mata.png",
      "/images/karni_mata_exterior.png"
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d225662.47952262388!2d73.18579459132692!3d27.902702368469438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x393fe763aaaaaaab%3A0x345f45499c23dfd1!2sHotel%20Raj%20Haveli%2C%20B-222%2C%20Sadul%20Ganj%2C%20Bikaner%2C%20Rajasthan%20334002!3m2!1d28.0140504!2d73.33424269999999!4m5!1s0x393ffb097861b639%3A0x33d6f39cad95e6ac!2sKarni%20Mata%20Temple%2C%20NH%2089%2C%20Deshnok%2C%20Rajasthan%20334801!3m2!1d27.7909966!2d73.3408206!5e0!3m2!1sen!2sin!4v1789111243061!5m2!1sen!2sin",
    directionsUrl: "https://www.google.com/maps/dir/Hotel+Raj+Haveli,+Bikaner/Karni+Mata+Temple,+Deshnok/"
  },
  {
    slug: "lalgarh-palace",
    name: "Lalgarh Palace and Museum",
    description: "A stunning red sandstone palace built in Indo-Saracenic style, now a heritage hotel and museum.",
    image: "/images/lalgarh_palace.png",
    detailedDescription: [
      "The Lalgarh Palace is a striking architectural masterpiece in Bikaner, Rajasthan, built between 1902 and 1926 by Maharaja Ganga Singh in memory of his father, Maharaja Lall Singh. Designed by British architect Sir Samuel Swinton Jacob, it features a spectacular blending of Indo-Saracenic style, combining European, Mughal, and Rajput elements carved out of the region's iconic red sandstone.",
      "Today, the sprawling complex is split into three main functionalities: a grand luxury heritage hotel, the private residence of the Bikaner royal family, and the Sri Sadul Museum. Because much of the palace operates as a private estate or a hotel, regular tourists are primarily allowed access to the Sri Sadul Museum, located inside the complex.",
      "The Sri Sadul Museum occupies the first floor and displays a massive collection of royal artifacts, historical memorabilia, Georgian paintings, hunting trophies, and rare vintage photographs. A major highlight is an original old train coach kept inside, which the Maharaja used for personal travel.",
      "A major portion of the property operates as a highly-rated 4-star heritage hotel, featuring authentic royal suites decorated with period furniture, sprawling lawns, and an indoor swimming pool. Booking a stay or a meal here is the only way to explore the deeper, non-museum quarters of the palace."
    ],
    // timings: "Museum Entry: ₹100 per person",
    location: "Lallgarh Palace Complex Opposite Roadways Bus Stand, Samta Nagar, Bikaner, Rajasthan 334001",
    galleryImages: [
      "/images/lalgarh_palace.png",
      "/images/lalgarhPalace.jpg"
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d14087.591958893561!2d73.31844425549835!3d28.02759351600431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x393fe763aaaaaaab%3A0x345f45499c23dfd1!2sHotel%20Raj%20Haveli%2C%20B-222%2C%20Sadul%20Ganj%2C%20Bikaner%2C%20Rajasthan%20334002!3m2!1d28.0140504!2d73.33424269999999!4m5!1s0x393fdda3c7d9ec1d%3A0xfa0a623e20e0c6a8!2sLalgarh%20Palace%2C%20NH15%2C%20Samta%20Nagar%2C%20Bikaner%2C%20Rajasthan%20334001!3m2!1d28.040946599999998!2d73.3310776!5e0!3m2!1sen!2sin!4v1789111863851!5m2!1sen!2sin",
    directionsUrl: "https://www.google.com/maps/dir/Hotel+Raj+Haveli,+Bikaner/Lalgarh+Palace,+Bikaner/"
  },
  {
    slug: "rampuria-haveli",
    name: "World Famous Rampuria Haveli",
    description: "Pride of Bikaner, Group of Seven Havelis",
    image: "/images/rampuria_haveli.png",
    location: "Rampuria Havellis, Joshiwara, Old Bikaner, Bikaner, Rajasthan 334001",
    detailedDescription: [
      "The Rampuria Haveli is renowned as 'the pride of Bikaner', a title bestowed upon it by the prominent writer and philosopher Aldous Huxley. His profound admiration after visiting is truly justified by the haveli's antiquity, grandeur, and sheer exquisiteness. Initiated around the 15th century, the haveli was idealized and constructed by Balujee Chalva under the express orders of the influential and wealthy merchant family, the Rampurias.",
      "The stunning complex is built with Dulmera red sandstone as its crucial base material, demonstrating gorgeous artistic abilities prevalent during that era. The seamless fusion of Mughal, Victorian, and Rajputana architecture in the drawing rooms is truly inspiring and magnificent.",
      "The affluent and lavish inner halls and rooms are beautifully decorated with aesthetic objet d'art, featuring first-class landscapes, portraits, and artifacts crafted from fine wood. Today, while you don't need a ticket to bask in the exquisite exterior beauty of the intricate wall designs, some havelis are open for public display.",
      "A splendid addition to the complex is Bhanwar Niwas, built in the 1920s by Bhanwarlalji Rampuria, an heir to a textile and real estate fortune. Incorporating the architectural styles of the 1920s, Bhanwar Niwas has now been established as a popular heritage hotel, offering tourists the chance to stay in its uniquely designed guest rooms."
    ],
    timings: "Open 24/7 (No entry fee for exterior viewing)",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d28178.75593767605!2d73.30000303711824!3d28.01394491449144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x393fe763aaaaaaab%3A0x345f45499c23dfd1!2sHotel%20Raj%20Haveli%2C%20B-222%2C%20Sadul%20Ganj%2C%20Bikaner%2C%20Rajasthan%20334002!3m2!1d28.0140504!2d73.33424269999999!4m5!1s0x393fdd8666c64045%3A0xa15b17ae22ab4af2!2sRampuria%20Haveli%2C%20Rampuria%20Havellis%2C%20Joshiwara%2C%20Old%20Bikaner%2C%20Bikaner%2C%20Rajasthan%20334001!3m2!1d28.0122429!2d73.3047854!5e0!3m2!1sen!2sin!4v1789113895666!5m2!1sen!2sin",
    directionsUrl: "https://www.google.com/maps/dir/Hotel+Raj+Haveli,+Bikaner/Rampuria+Haveli,+Bikaner/",
    galleryImages: [
      "/images/rampuria_haveli.png"
    ]
  },
  {
    slug: "heritage-route",
    name: "Heritage Route",
    description: "Thousands of Havelis, World Famous Bhandasar Jain Temple, Laxminath Ji Temple Bika Ji Ki Takri, Spice Market, Old Bazar. Due to narrow streets, this is only possible by Horse Cart or Auto.",
    image: "/images/heritage_route.png",
    location: "Joshiwara, Old Bikaner, Bikaner, Rajasthan 334001",
    detailedDescription: [
      "The official Bikaner Heritage Walk is a curated route designed by the municipal corporation and local tourism cells. It masterfully guides visitors through the architectural marvels, vibrant bazaars, and deep cultural roots of the historic old city. The trail weaves through narrow sandstone lanes, opening up into historic squares (Chowks), active local marketplaces, and traditional residential clusters.",
      "1. Laxminath Ji Temple (Starting Point): The walk begins at the city's oldest temple, built in the early 16th century. Dedicated to Lord Vishnu and Goddess Lakshmi, it features exquisite silver artwork and offers a serene local morning vibe.",
      "2. Bhandasar Jain Temple: A short distance away sits this magnificent three-story mirror-and-fresco-covered shrine. It is famous for its unique architecture and the fascinating local legend that 40,000 kg of ghee (clarified butter) was used in its mortar foundation instead of water.",
      "3. Market Squares (Sabzi Bazaar & Mohta Chowk): Moving deeper into the old town, you will traverse traditional market lanes including the spice market, bangle bazaar, and 'Tea Street'. It is highly recommended to stop here to try local culinary mainstays like hot jalebis, rabdi, and fresh moring kachoris.",
      "4. Rampuria Group of Havelis (Culmination Point): The route reaches its peak architectural climax at Rampuria Street. This cluster features unparalleled 20th-century mansions constructed from red Dulmera sandstone, complete with intricate stone latticework (jalis), European-influenced windows, and grand wooden doors."
    ],
    timings: "Takes 2 to 3 hours (Best starting at 7:30 AM)",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d28179.059464397!2d73.29770118711556!3d28.012784864533327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x393fe763aaaaaaab%3A0x345f45499c23dfd1!2sHotel%20Raj%20Haveli%2C%20B-222%2C%20Sadul%20Ganj%2C%20Bikaner%2C%20Rajasthan%20334002!3m2!1d28.0140504!2d73.33424269999999!4m5!1s0x393fdd62fff3ef39%3A0x4bc6276f233f5d19!2sRampuria%20Rd%2C%20Joshiwara%2C%20Old%20Bikaner%2C%20Bikaner%2C%20Rajasthan%20334001!3m2!1d28.0114612!2d73.3052733!5e0!3m2!1sen!2sin!4v1789114277906!5m2!1sen!2sin",
    directionsUrl: "https://www.google.com/maps/dir/Hotel+Raj+Haveli,+Bikaner/Rampuria+Rd,+Old+Bikaner,+Bikaner/",
    galleryImages: [
      "/images/heritage_route.png"
    ]
  },
  {
    slug: "gajner-lake",
    name: "Gajner Lake and Wildlife Sanctuary",
    description: "A lush green sanctuary with a serene lake, perfect for wildlife spotting.",
    image: "/images/gajner_lake.png",
    location: "Gajner, Rajasthan 334024 (32 km from Bikaner)",
    detailedDescription: [
      "Gajner Lake and Wildlife Sanctuary is a scenic lakeside nature reserve located about 32 kilometers from Bikaner. Originally established as the royal hunting grounds for the Maharajas of Bikaner, the area features a crystal-clear artificial lake surrounded by lush green foliage and unique desert terrain.",
      "The historic Gajner Palace sits right on the water's edge, operating today as a magnificent heritage hotel where you can truly immerse yourself in royal history.",
      "The sanctuary is a haven for wildlife enthusiasts. Animals like the nilgai, chinkara, blackbuck, deer, desert foxes, and wild boars frequently visit the lake area to drink. It's also a paradise for birdwatching; winter brings numerous migratory and resident birds, including the famous Imperial Sandgrouse and various wildfowl.",
      "Visitors can enjoy a range of activities, including solar-powered boat rides on the serene lake, guided nature walks, and exciting safaris organized near the sanctuary grounds. The cooler winter months between November and February offer the best weather and optimal birdwatching conditions."
    ],
    timings: "10:00 AM to 5:00 PM (Everyday)",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d225477.05705557577!2d73.02879050523526!3d27.991478812545218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x393fe763aaaaaaab%3A0x345f45499c23dfd1!2sHotel%20Raj%20Haveli%2C%20B-222%2C%20Sadul%20Ganj%2C%20Bikaner%2C%20Rajasthan%20334002!3m2!1d28.0140504!2d73.33424269999999!4m5!1s0x393f95b220a13961%3A0x30e064425f7d6eac!2sGajner%20Wildlife%20Sanctuary%2C%20W3V3%2BX48%2C%20Gajner%2C%20Rajasthan%20334024!3m2!1d27.9449103!2d73.05281939999999!5e0!3m2!1sen!2sin!4v1789114611102!5m2!1sen!2sin",
    directionsUrl: "https://www.google.com/maps/dir/Hotel+Raj+Haveli,+Bikaner/Gajner+Wildlife+Sanctuary,+Gajner/",
    galleryImages: [
      "/images/gajner_lake.png"
    ]
  },
  {
    slug: "sand-dunes",
    name: "Sand Dunes Safari",
    description: "Authentic, peaceful, and relatively untouched desert safari experience.",
    image: "/images/sand_dunes.png",
    location: "Raisar Village (Outskirts of Bikaner), Rajasthan",
    detailedDescription: [
      "The Raisar and Samantsar Sand Dunes offer an authentic, peaceful, and relatively untouched desert safari experience on the outskirts of Bikaner. Unlike more commercialized desert destinations, these dunes provide a tranquil setting where you can experience traditional Thar Desert village life, spot local wildlife, and truly escape the crowds.",
      "Experience the desert at your own pace with a variety of activities. Take a slow, rolling trek across the rippling golden sands atop a camel to explore the local flora and traditional village life. For thrill-seekers, board an open-top SUV for an exhilarating Jeep Safari over the high ridges and steep crests of the dunes.",
      "As evening falls, find a perfect vantage point to watch the brilliant orange sunset drop below the horizon. The night truly comes alive around a campfire, where you can enjoy authentic Rajasthani folk music and mesmerizing Kalbeliya dance performances under the starlit desert sky.",
      "The area is also excellent for wildlife spotting. Look closely at the landscape and you might spot desert species like antelopes, foxes, wild deer, and desert lizards roaming near the camps. Several well-rated wilderness camps, such as Raisar Camp, Golden Sands, and Bambloo Desert Camp, offer distinct styles of desert lodging ranging from rustic tents to premium glamping."
    ],
    timings: "Best visited October to March (Overnight stays available)",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d225403.9176772582!2d73.2632934607212!3d28.026425331742615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x393fe763aaaaaaab%3A0x345f45499c23dfd1!2sHotel%20Raj%20Haveli%2C%20B-222%2C%20Sadul%20Ganj%2C%20Bikaner%2C%20Rajasthan%20334002!3m2!1d28.0140504!2d73.33424269999999!4m5!1s0x39156016e0b319b7%3A0x2f2f37e3c1ba81d2!2sRaisar%20Camp%2C%20Raisar%20Camp%2C%20Village%20Raisar%2C%20Bikaner%2C%20Rajasthan%20334001!3m2!1d28.0238651!2d73.5212859!5e0!3m2!1sen!2sin!4v1789114779805!5m2!1sen!2sin",
    directionsUrl: "https://www.google.com/maps/dir/Hotel+Raj+Haveli,+Bikaner/Raisar+Camp,+Village+Raisar,+Bikaner/",
    galleryImages: [
      "/images/sand_dunes.png"
    ]
  },
  {
    slug: "bikaner-delicacies",
    name: "Bikaner's Famous Delicacies",
    description: "Bikaner is a culinary paradise renowned for its fiery savouries and ghee-laden sweets.",
    image: "/images/bikaner_sweets.png",
    location: "Various local eateries and bazaars across Bikaner",
    detailedDescription: [
      "Bikaner is a culinary paradise renowned for its distinct blend of fiery, aromatic savouries and rich, ghee-laden sweets. Crafted using time-honoured techniques, the city's signature dishes reflect its deep-rooted royal heritage. From its world-famous crispy Bhujia to mouth-watering street chaats and syrup-soaked Ghevar, Bikaner offers a sensational gastronomic journey.",
      "**Iconic Sweets & Desserts:** Indulge in the spongey, saffron-infused Bikaneri Rasgulla at Chhotu Motu Joshi. Try the syrup-soaked Ghevar topped with creamy Rabdi at Brja Maharaj Ki Dukan, or the melt-in-your-mouth Fini at Gulabchand Fini Wala. To cool down, grab a scoop of rich Sankhla Kesar Kulfi near Kote Gate.",
      "**Savoury Namkeens & Street Chaat:** The city's crown jewel snack is the Bikaneri Bhujia made from ground moth lentils. For street food, sample the explosive Raj Kachori at Laxman Chat House, or grab a flaky Dal Kachori and Shahi Samosa for an unforgettable breakfast from Juniya Maharaj Kachori Wale.",
      "**Traditional Rajasthani Meals:** No trip is complete without a full Rajasthani thali. Savor authentic Dal Baati Churma baked over open coals at Jai Hind Restaurant. Relish home-style Gatte ki Sabzi or try the clever desert staple, Papad ki Sabzi, at classic joints like Ramlal Ji Ka Bassa."
    ],
    timings: "From morning breakfast until late night",
    galleryImages: [
      "/images/bikaner_sweets.png"
    ]
  },
  {
    slug: "jain-temple",
    name: "Seth Bhandashah Jain Temple",
    description: "Famous for its beautiful wall paintings and intricate architecture.",
    image: "/images/jain_temple.png",
    location: "Sitla Gate / Bara Bazar area, Old City, Bikaner, Rajasthan",
    detailedDescription: [
      "The Seth Bhandashah Jain Temple (also known as the Bhandasar Jain Temple) is a famous 15th-century Śvetāmbara Jain temple dedicated to the fifth Tirthankara, Lord Sumatinatha. Commissioned in 1468 by a wealthy Jain merchant named Bhandasa Oswal, it is one of the oldest and most visually stunning architectural landmarks in Bikaner.",
      "The temple is famous for 'The Ghee Legend'. According to local folklore and historical accounts, 40,000 kg of purified butter (ghee) was used instead of water to mix the mortar during the foundation's construction. Locals claim that traces of ghee still seep through the walls during extreme summer heat.",
      "This imposing three-story structure is built primarily from red sandstone and white marble, featuring rich yellow-stone carvings. Its interior walls, pillars, and domed ceilings are heavily decorated with vibrant Matheran and Usta art paintings, gold leaf frescoes, and intricate mirror mosaics. Don't forget to visit the elevated top floor, which offers a panoramic bird’s-eye view of the Bikaner city skyline.",
      "Recognized as a site of national historical importance, the temple is meticulously protected and maintained under the observation of the Archaeological Survey of India."
    ],
    timings: "Open daily until around 8:00 PM",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d28180.41876287077!2d73.29694458710352!3d28.007589214721012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x393fe763aaaaaaab%3A0x345f45499c23dfd1!2sHotel%20Raj%20Haveli%2C%20B-222%2C%20Sadul%20Ganj%2C%20Bikaner%2C%20Rajasthan%20334002!3m2!1d28.0140504!2d73.33424269999999!4m5!1s0x393fe78b57395717%3A0x1a6cd2357f795b9d!2sSeth%20Bhandashah%20Jain%20Temple%2C%202832%2BW82%2C%20Old%20Bikaner%2C%20Bikaner%2C%20Rajasthan%20334001!3m2!1d28.004758499999998!2d73.3006706!5e0!3m2!1sen!2sin!4v1789115566309!5m2!1sen!2sin",
    directionsUrl: "https://www.google.com/maps/dir/Hotel+Raj+Haveli,+Bikaner/Seth+Bhandashah+Jain+Temple,+Bikaner/",
    galleryImages: [
      "/images/jain_temple.png",
      "/images/Bhandasar_Jain_Temple_Bikaner_DSC_1089.jpg",
      "/images/Bhandasar_Jain_Temple_Bikaner_DSC_1081.JPG_2.jpg",
      "/images/Bhandasar_Jain_temple_pillared_interior_-_2.jpg",
      "/images/Ceiling_of_Bhandasar_Temple_-_6.jpg",
      "/images/Sculptures_around_the_sactum_of_Bhandasar_Jain_temple_-_2.jpg"
    ]
  },
  {
    slug: "acharya-tulsi-samadhi",
    name: "Acharya Tulsi Samadhi Sthal",
    description: "A serene memorial honoring the great Jain saint Acharya Tulsi.",
    image: "/images/acharya_tulsi.png",
    location: "Choudhary Colony Road, Gangashahar, Bikaner, Rajasthan 334001",
    detailedDescription: [
      "Acharya Tulsi Samadhi Sthal, also known as Naitikta Ka Shaktipith, is a prominent Jain memorial and temple located in the suburbs of Bikaner. Dedicated to Acharya Tulsi, the revered ninth head of the Terapanth Jain sect and founder of the Anuvrat Movement, this beautifully constructed site serves as his final resting place.",
      "The site is deeply appreciated by visitors as a quiet, serene, and remarkably well-maintained space that is perfect for meditation, prayer, and deep introspection. The surrounding Meditation Gardens offer beautifully manicured green spaces that further enhance the peaceful environment.",
      "A key highlight of the site is the Museum & Library. It houses historical exhibits detailing the life, literary works (he authored over 100 books), and spiritual journey of Acharya Tulsi. Visitors can even see a unique display of a commemorative 5-rupee coin bearing his likeness.",
      "The complex is designed to be welcoming for all, featuring wheelchair-accessible entrances and exits, on-site parking, and clean facilities to ensure a comfortable visit."
    ],
    timings: "Open daily for visitors",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d28181.929321124997!2d73.30096313709015!3d28.00181436492968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x393fe763aaaaaaab%3A0x345f45499c23dfd1!2sHotel%20Raj%20Haveli%2C%20B-222%2C%20Sadul%20Ganj%2C%20Bikaner%2C%20Rajasthan%20334002!3m2!1d28.0140504!2d73.33424269999999!4m5!1s0x393fe79632728977%3A0x5a2219d763d5b9d4!2sAcharya%20Tulsi%20Samadhi%20Sthal%20(Naitikta%20ka%20Shaktipith)%2C%20X8Q5%2BVQ7%2C%20Choudhary%20Colony%20Rd%2C%20Gangashahar%2C%20Bikaner%2C%20Rajasthan%20334401!3m2!1d27.989717799999998!2d73.3094156!5e0!3m2!1sen!2sin!4v1789115688249!5m2!1sen!2sin",
    directionsUrl: "https://www.google.com/maps/dir/Hotel+Raj+Haveli,+Bikaner/Acharya+Tulsi+Samadhi+Sthal,+Bikaner/",
    galleryImages: [
      "/images/acharya_tulsi.png"
    ]
  },
  {
    slug: "sagar-chatri",
    name: "Devi Kund Sagar (Sagar Chatri)",
    description: "A royal crematorium and memorial site featuring intricately carved cenotaphs.",
    image: "/images/sagar_chatri.png",
    location: "Outskirts of Bikaner (8 km from city center)",
    detailedDescription: [
      "Sagar Chatri, more commonly known as Devi Kund Sagar, is a magnificent royal crematorium and memorial site located about 8 km on the outskirts of Bikaner city. It serves as the final resting place and memorial grounds for the royal family of Bikaner, honoring generations of rulers starting from Rao Kalyanmal (the 5th ruler) up to more recent times.",
      "The site is a striking showcase of architectural evolution, featuring a beautiful blend of Rajputana and Islamic architectural styles. The older cenotaphs (chhatris) are predominantly constructed using the region's famous red Dulmera sandstone, while the newer memorials are carved from pristine white marble.",
      "Beyond the impressive structural design, Devi Kund Sagar is renowned for its detailed artworks. Visitors can admire the intricately carved pillars and vibrant, traditional Rajasthani paintings that adorn the ceilings of several prominent chhatris. It stands as a peaceful, historical tribute to Bikaner's royal legacy."
    ],
    timings: "Open daily for visitors",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d56355.505646586964!2d73.31889747835343!3d28.017778407263428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x393fe763aaaaaaab%3A0x345f45499c23dfd1!2sHotel%20Raj%20Haveli%2C%20B-222%2C%20Sadul%20Ganj%2C%20Bikaner%2C%20Rajasthan%20334002!3m2!1d28.0140504!2d73.33424269999999!4m5!1s0x393fe1e9a4f6b0e7%3A0x6ae1bc3291f8c779!2sSagar%20Chatri%2C%20299R%2BQ44%2C%20Sagar%20Rd%2C%20Ridmalsar%2C%20Sharah%20Kajani%2C%20Rajasthan%20334022!3m2!1d28.019376899999997!2d73.39033789999999!5e0!3m2!1sen!2sin!4v1789116054709!5m2!1sen!2sin",
    directionsUrl: "https://www.google.com/maps/dir/Hotel+Raj+Haveli,+Bikaner/Sagar+Chatri,+Bikaner/",
    galleryImages: [
      "/images/sagar_chatri.png"
    ]
  },
  {
    slug: "laxminath-temple",
    name: "Shri Laxminath Temple",
    description: "One of the oldest temples in Bikaner, dedicated to Lord Vishnu and Goddess Laxmi.",
    image: "/images/laxminath_temple.png",
    location: "Old Bikaner, Bikaner, Rajasthan",
    detailedDescription: [
      "Shri Laxminath Temple is the oldest standing Hindu temple in Bikaner, serving as a highly revered spiritual and cultural landmark. Dedicated to Lord Vishnu and his consort, Goddess Laxmi, the temple holds a profound place in local heritage. Historically, the rulers of Bikaner regarded Lord Laxminath as the true king and actual ruler of the state, considering themselves merely as ministers governing on his behalf.",
      "The temple boasts immense historical significance. It was commissioned around 1488 AD by the city's founder, Rao Bika Ji, and structurally completed between 1504 and 1526 CE by Maharaja Rao Lunakaran, with later enhancements by Maharaja Ganga Singh.",
      "Architecturally, it is a masterpiece constructed primarily from high-grade red sandstone imported from Jaisalmer and pristine white marble. The shrine features a spectacular silver-embellished main doorway and intricately carved internal columns.",
      "During major festivals like Diwali, Janmashtami, Ram Navami, and Nirjala Ekadashi, the temple transforms into a lively, vibrant cultural hub. Please note the strict entry rules: leather items (belts, wallets, bags), footwear, and photography are strictly prohibited inside the main temple premises."
    ],
    timings: "5:00 AM - 1:00 PM & 5:00 PM - 11:00 PM (Entry is Free)",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7045.409578766379!2d73.29083069238061!3d28.002926963436558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x393fe763aaaaaaab%3A0x345f45499c23dfd1!2sHotel%20Raj%20Haveli%2C%20B-222%2C%20Sadul%20Ganj%2C%20Bikaner%2C%20Rajasthan%20334002!3m2!1d28.0140504!2d73.33424269999999!4m5!1s0x393fe78b554784b3%3A0xcd8e868d13b9656c!2sNagar%20Seth%20Shree%20Laxminath%20Ji%20mandir%2C%202832%2BV47%2C%20Bara%20Bazar%20Rd%2C%20Old%20City%20Rampuriya%2C%20Bikaner%2C%20Rajasthan%20334001!3m2!1d28.0046598!2d73.3002934!5e0!3m2!1sen!2sin!4v1789116489805!5m2!1sen!2sin",
    directionsUrl: "https://www.google.com/maps/dir/Hotel+Raj+Haveli,+Bikaner/Nagar+Seth+Shree+Laxminath+Ji+mandir,+Bikaner/",
    galleryImages: [
      "/images/laxminath_temple.png"
    ]
  },
  {
    slug: "bikaji-ki-tekri",
    name: "Bikaji Ki Tekri",
    description: "The first fort of Bikaner and the exact birthplace of the city, built by Rao Bika.",
    image: "/images/bikaji_tekri.webp",
    location: "Old City area near Hammalon Ki Bari, Bikaner, Rajasthan",
    detailedDescription: [
      "Bikaji Ki Tekri is the first fort and the oldest surviving structure in Bikaner, marking the exact birthplace where the foundation of the city was laid in 1488. Constructed around 500 years ago by Rao Bika, the founder of Bikaner, this hillock (tekri) is the very spot where he first camped and established his kingdom after leaving Jodhpur.",
      "Built predominantly from the region's distinct red sandstone (Dulmera stone), the fort offers a humble yet fascinating glimpse into the early military architecture and history of the area, long before the grand Junagarh Fort was constructed.",
      "Unlike the later lavish palaces, Bikaji Ki Tekri is smaller and more rugged. It features interconnected rooms and beautiful royal chhatris (cenotaphs) dedicated to the early rulers of Bikaner.",
      "Conveniently located in the old city area near Hammalon Ki Bari, the fort is within just 500 meters of the famous Bhandashah Jain Temple and the highly revered Laxminath Ji Temple, making it an excellent addition to a historic walking tour. Most visitors spend about 2 to 3 hours exploring the structure."
    ],
    timings: "Open daily for visitors",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d28180.41876287077!2d73.29764438710352!3d28.007589214721012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x393fe763aaaaaaab%3A0x345f45499c23dfd1!2sHotel%20Raj%20Haveli%2C%20B-222%2C%20Sadul%20Ganj%2C%20Bikaner%2C%20Rajasthan%20334002!3m2!1d28.0140504!2d73.33424269999999!4m5!1s0x393fe78cf944364d%3A0xf03d8b5c2a3b11a2!2sBikaji%20Ki%20Tekri%2C%202823%2BW4V%2C%20Hammalon%20Ki%20Bari%2C%20Bikaner%2C%20Rajasthan%20334001!3m2!1d28.0023506!2d73.3027951!5e0!3m2!1sen!2sin!4v1789117301236!5m2!1sen!2sin",
    directionsUrl: "https://www.google.com/maps/dir/Hotel+Raj+Haveli,+Bikaner/Bikaji+Ki+Tekri,+Bikaner/",
    galleryImages: [
      "/images/bikaji_tekri.webp",
    ]
  },
  {
    slug: "kem-road",
    name: "KEM Road (Shopping District)",
    description: "The premier shopping district and bustling commercial artery in the heart of Bikaner.",
    image: "/images/kem_road.png",
    location: "K.E.M. Road, Bikaner, Rajasthan",
    detailedDescription: [
      "KEM Road (King Edward Memorial Road) is the premier shopping district and a bustling commercial artery located right in the heart of Bikaner. Serving as a vital transit link, it directly connects the historic Junagarh Fort area to the vibrant Old City and the famous Kotegate market complex.",
      "Known as a one-stop destination for both locals and tourists, the street is celebrated for its wide array of traditional goods. You can find exquisite local Rajasthani fabrics, colorful bandhani saris, authentic leather and wooden artifacts, and intricately embroidered footwear (mojris).",
      "Beyond textiles and crafts, KEM Road is a paradise for food lovers. It houses numerous legendary sweet and namkeen shops serving up fresh Bikaneri bhujia, famous rasgullas, and a variety of mouth-watering street snacks.",
      "The street is also home to major local commercial hubs like Khajanchi Market, Jain Market, and Heeralal Mall, alongside modern amenities including electronics stores and key banking institutions. Bargaining is a common practice across the smaller stalls, making it an excellent spot to purchase local souvenirs at budget-friendly rates."
    ],
    timings: "10:00 AM to 9:00 PM (Most shops closed on Tuesdays)",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d14089.011118440594!2d73.31542730549208!3d28.01674886610218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x393fe763aaaaaaab%3A0x345f45499c23dfd1!2sHotel%20Raj%20Haveli%2C%20B-222%2C%20Sadul%20Ganj%2C%20Bikaner%2C%20Rajasthan%20334002!3m2!1d28.0140504!2d73.33424269999999!4m5!1s0x393fdd7b94c90517%3A0x2d7d7319ae176e16!2sKEM%20Rd%2C%20Bikaner%2C%20Rajasthan%20334001!3m2!1d28.019297599999998!2d73.3170708!5e0!3m2!1sen!2sin!4v1789117228286!5m2!1sen!2sin",
    directionsUrl: "https://www.google.com/maps/dir/Hotel+Raj+Haveli,+Bikaner/KEM+Rd,+Bikaner/",
    galleryImages: [
      "/images/kem_road.png"
    ]
  }
];
