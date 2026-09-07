"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      title: "Excellent Stay",
      user: "830BHUPENDRAJ",
      text: "Its just fulfill all you requirements in nice way, good location, good rooms, amazing views from top of terrace place, amazing restaurant set ups, good food options, excellent breakfast and peaceful rooms - nothing to complaint about!",
      image: "/images/service_events.png",
    },
    {
      title: "A Royal Experience",
      user: "ELEANOR_T",
      text: "An absolutely breathtaking experience. The attention to detail in the decor, the impeccable service, and the serene atmosphere make Raj Haveli the finest hotel we have ever stayed in. Highly recommended!",
      image: "/images/Gallery/Lobby.png",
    },
    {
      title: "Unforgettable Hospitality",
      user: "JAMES_SMITH",
      text: "The staff went above and beyond to make our anniversary special. From the luxurious suite to the fine dining restaurant, every moment was perfection. We will definitely be returning next year.",
      image: "/images/restaurant_bg.png",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="h-[1px] w-16 md:w-24 bg-primary/50"></div>
            <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold">
              Testimonials And Opinions
            </p>
            <div className="h-[1px] w-16 md:w-24 bg-primary/50"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-primary">
            What Our Guests Say
          </h2>
        </div>

        {/* Main Content Area */}
        <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row mt-12 md:mt-20">

          {/* Background Image (Right side) */}
          <div className="md:absolute right-0 top-0 w-full md:w-[70%] h-[300px] md:h-[550px] z-0">
            <Image
              key={currentIndex}
              src={testimonials[currentIndex].image}
              alt="Testimonial background"
              fill
              className="object-cover animate-in fade-in duration-700"
              sizes="(max-width: 768px) 100vw, 70vw"
            />
          </div>

          {/* Testimonial Card (Overlapping left side) */}
          <div className="relative z-10 w-full md:w-[55%] mt-0 md:mt-16 bg-[#f8f8f8] p-8 md:p-12 lg:p-16 shadow-xl min-h-[350px] md:min-h-[420px] flex flex-col justify-between">

            {/* Huge Watermark Quote Mark */}
            <div className="absolute bottom-4 right-8 text-[12rem] leading-none text-gray-200/60 font-serif opacity-50 pointer-events-none select-none" aria-hidden="true">
              &rdquo;
            </div>

            <div>
              <div className="flex items-center gap-6 mb-8 relative z-10">
                {/* Tripadvisor-like Logo */}
                <div className="w-16 h-16 rounded-full bg-[#34e0a1] flex items-center justify-center flex-shrink-0 shadow-sm border-[3px] border-white">
                  <svg viewBox="0 0 24 24" fill="black" className="w-8 h-8">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-4 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm8 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
                    <circle cx="8" cy="12" r="1.5" fill="white" />
                    <circle cx="16" cy="12" r="1.5" fill="white" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-2xl lg:text-3xl text-primary mb-1">{testimonials[currentIndex].title}</h3>
                  <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">{testimonials[currentIndex].user}</p>
                </div>
              </div>

              <p className="text-gray-500 leading-relaxed md:text-lg relative z-10 mb-10">
                {testimonials[currentIndex].text}
              </p>
            </div>

            {/* Gold Stars */}
            <div className="flex gap-1 relative z-10">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="max-w-6xl mx-auto mt-6 flex gap-4 z-20 relative">
          <button
            onClick={prevTestimonial}
            className="w-14 h-14 border border-gray-300 flex items-center justify-center bg-white hover:bg-gray-50 transition-colors text-gray-500 hover:text-black"
            aria-label="Previous Testimonial"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="w-14 h-14 border border-gray-300 flex items-center justify-center bg-white hover:bg-gray-50 transition-colors text-gray-500 hover:text-black"
            aria-label="Next Testimonial"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
