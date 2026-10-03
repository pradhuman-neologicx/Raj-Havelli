import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Maximize, Users, Utensils, Eye, Droplets, Wifi, Snowflake, Bed } from "lucide-react";

interface RoomCardProps {
  room: {
    id: string;
    name: string;
    description: string;
    image: string;
    amenities: Array<{ name: string; icon: any }>;
    details?: {
      size: string;
      bed: string;
      occupancy: string;
      breakfast: string;
      view: string;
      bathroom: string;
      wifi: string;
      ac: string;
    };
  };
}

export default function RoomCard({ room }: RoomCardProps) {
  return (
    <div className="group flex flex-col bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border">
      <div className="relative h-64 md:h-72 overflow-hidden">
        <Image
          src={room.image}
          alt={room.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-serif text-2xl font-semibold text-primary mb-3">
          {room.name}
        </h3>
        
        <p className="text-muted-foreground mb-6">
          {room.description}
        </p>

        {room.details && (
          <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-8 text-sm text-foreground/80 flex-grow">
            <div className="flex items-center gap-2">
              <Maximize className="h-4 w-4 text-secondary-foreground" />
              <span className="truncate" title={room.details.size}>{room.details.size}</span>
            </div>
            <div className="flex items-center gap-2">
              <Bed className="h-4 w-4 text-secondary-foreground" />
              <span className="truncate" title={room.details.bed}>{room.details.bed}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-secondary-foreground" />
              <span className="truncate" title={room.details.occupancy}>{room.details.occupancy}</span>
            </div>
            <div className="flex items-center gap-2">
              <Utensils className="h-4 w-4 text-secondary-foreground" />
              <span className="truncate" title={room.details.breakfast}>{room.details.breakfast}</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4 text-secondary-foreground" />
              <span className="truncate" title={room.details.view}>{room.details.view}</span>
            </div>
            <div className="flex items-center gap-2">
              <Droplets className="h-4 w-4 text-secondary-foreground" />
              <span className="truncate" title={room.details.bathroom}>{room.details.bathroom}</span>
            </div>
            <div className="flex items-center gap-2">
              <Wifi className="h-4 w-4 text-secondary-foreground" />
              <span className="truncate" title={room.details.wifi}>{room.details.wifi}</span>
            </div>
            <div className="flex items-center gap-2">
              <Snowflake className="h-4 w-4 text-secondary-foreground" />
              <span className="truncate" title="Air Conditioned">{room.details.ac === "Yes" ? "Air Conditioned" : "No AC"}</span>
            </div>
          </div>
        )}

        {!room.details && (
          <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-6 flex-grow">
            {room.amenities.slice(0, 4).map((amenity, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-foreground/80">
                <amenity.icon className="h-4 w-4 text-secondary-foreground" />
                <span>{amenity.name}</span>
              </div>
            ))}
          </div>
        )}
        
        <Link
          href={`/rooms/${room.id}`}
          className="mt-auto w-full inline-flex justify-center items-center bg-primary text-white hover:bg-primary/90 transition-colors font-medium px-6 py-3 rounded-md shadow-sm"
        >
          Check Availability
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
