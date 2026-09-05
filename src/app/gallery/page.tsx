import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import LightboxGallery from "@/components/LightboxGallery";
import { galleryImages } from "@/data";

export const metadata: Metadata = {
  title: "Gallery",
  description: "View the beautiful spaces and amenities at Raj Haveli.",
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <PageHeader
        title="Visual Journey"
        description="A glimpse into the luxury that awaits."
      />

      <section className="py-10 bg-background">
        <div className="container mx-auto">
          <LightboxGallery images={galleryImages} />
        </div>
      </section>
    </div>
  );
}
