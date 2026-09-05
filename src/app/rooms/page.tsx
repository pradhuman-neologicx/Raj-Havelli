import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import RoomCard from "@/components/RoomCard";
import { rooms } from "@/data";

export const metadata: Metadata = {
  title: "Accommodations",
  description: "Explore the luxurious rooms and suites at Raj Haveli.",
};

export default function RoomsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <PageHeader
        title="Our Accommodations"
        description="Sanctuaries of elegance and comfort."
      />

      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
