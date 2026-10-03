import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import GalleryFolders from "@/components/GalleryFolders";

export const metadata: Metadata = {
  title: "Gallery",
  description: "View the beautiful spaces and amenities at Raj Haveli.",
};

const categorizedGallery = [
  {
    name: "Rooms & Suites",
    images: [
      "/images/room_superior.png",
      "/images/Gallery/Twin Deluxe Room.png",
      "/images/Gallery/Deluxe Room.jpeg",
      "/images/super-delux2.jpg",
      "/images/aatwin-delux1.jpg"
    ]
  },
  {
    name: "Restaurant",
    images: [
      "/images/Gallery/Restaurant.jpg",
      "/images/Gallery/Restaurant (2).jpg",
      "/images/Gallery/Restaurant (3).jpg",
      "/images/Gallery/Resturant.jpg",
      "/images/Gallery/Dinner with Live Kitchen.png",
      "/images/Gallery/Buffet.png"
    ]
  },
  {
    name: "Swimming Pool",
    images: [
      "/images/Gallery/Swimming_Pool.png",
      "/images/Gallery/Sweeming Pool.jpeg",
      "/images/service_pool.png"
    ]
  },
  {
    name: "Banquet & Events",
    images: [
      "/images/service_events.png",
      "/images/Gallery/Lobby.png"
    ]
  },
  {
    name: "Rooftop",
    images: [
      "/images/Gallery/Roof Top Garden.png",
    ]
  },
  {
    name: "Exterior",
    images: [
     
      "/images/Gallery/Entrance.png",
      "/images/Gallery/Outside view.jpeg",
      "/images/Gallery/Night Look.png",
      "/images/Gallery/Enterce.png"
    ]
  },
  {
    name: "Bikaner City",
    images: [
      "/images/junagarh_fort.png",
      "/images/karni_mata.png",
      "/images/rampuria_haveli.png",
      "/images/sand_dunes.png",
      "/images/camel_research.png"
    ]
  }
];

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <PageHeader
        title="Visual Journey"
        description="A glimpse into the luxury that awaits."
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <GalleryFolders categories={categorizedGallery} />
        </div>
      </section>
    </div>
  );
}
