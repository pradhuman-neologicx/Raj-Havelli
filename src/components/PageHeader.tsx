import Image from "next/image";
import Link from "next/link";

interface PageHeaderProps {
  title: string;
  description?: string;
  image?: string;
  showLogo?: boolean;
}

export default function PageHeader({
  title,
  description,
  image = "/images/page_header_bg.png",
  showLogo = false,
}: PageHeaderProps) {
  return (
    <div className="relative h-[42vh] min-h-[320px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/40 md:bg-primary/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center px-4 max-w-3xl mx-auto ${showLogo ? "mt-4" : "mt-16"}`}>
        {showLogo && (
          <div className="flex justify-center mb-4">
            <Link href="/" className="inline-block transition-transform hover:scale-105">
              <Image
                src="/logo.png"
                alt="Hotel Raj Haveli"
                width={240}
                height={85}
                priority
                className="h-16 md:h-20 w-auto object-contain invert brightness-0 drop-shadow-md"
              />
            </Link>
          </div>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 drop-shadow-sm">
          {title}
        </h1>
        {description && (
          <p className="text-lg text-white/90 font-medium">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
