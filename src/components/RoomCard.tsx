import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface RoomCardProps {
  room: {
    id: string;
    name: string;
    description: string;
    image: string;
    amenities: Array<{ name: string; icon: any }>;
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
        
        <p className="text-muted-foreground mb-6 flex-grow">
          {room.description}
        </p>
        
        <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-6">
          {room.amenities.slice(0, 4).map((amenity, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-foreground/80">
              <amenity.icon className="h-4 w-4 text-secondary-foreground" />
              <span>{amenity.name}</span>
            </div>
          ))}
        </div>
        
        <Link
          href={`/rooms/${room.id}`}
          className="inline-flex items-center text-sm font-medium text-primary hover:text-secondary-foreground transition-colors mt-auto"
        >
          View Details
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
