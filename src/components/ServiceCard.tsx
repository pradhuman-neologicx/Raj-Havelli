import Image from "next/image";

interface ServiceCardProps {
  service: {
    name: string;
    description: string;
    image: string;
    icon: any;
  };
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-card">
      <div className="relative h-72 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
      </div>
      
      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
        <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
          <service.icon className="h-8 w-8 mb-4 text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
          <h3 className="font-serif text-2xl font-semibold mb-2">{service.name}</h3>
          <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
}
