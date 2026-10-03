"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Star, ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      title: "Great Experience",
      user: "Mayur Sangwan",
      date: "4 months ago",
      text: "Last year I had great experience while staying in raj haveli, I was with the italian group, hygiene was top notch, it was kitchen closing time but they took my food order and it was really delicious, in morning the breakfast was also really nice, really enjoyed the staying in Raj haveli.",
      image: "/images/Gallery/Restaurant.jpg",
    },
    {
      title: "Pure Haveli Stay",
      user: "Aradhana Kharode",
      date: "9 months ago",
      text: "I recently stayed in this property. It's a pure Haveli stay which has amazing paintings, lights and touch of Rajasthan. There rooms are so comfortable with all modern amenities... Service is so good. Food is so tasty. Would like to recommend this property.",
      image: "/images/hero_bg.png",
    },
    {
      title: "Perfect Example",
      user: "Sameer Pagare",
      date: "9 months ago",
      text: "Perfect example of how a hotel should be!! I loved their paintings which reflects the Rajasthani art. The colors and painting are carefully choosen. The rooms are so modern with heritage touch. I highly recommend this property to anyone who is visiting Bikaner.",
      image: "/images/room_superior.png",
    },
    {
      title: "Excellent Ambience",
      user: "Hari Kumar G",
      date: "a year ago",
      text: "I stayed one day in this hotel with a group consists of 32 people... Ambience was excellent. Rooms were very spacious and good. Food was delicious. And the behaviour of the staff were also good. I recommend this hotel for others for a comfortable stay.",
      image: "/images/Gallery/Enterce.png",
    },
    {
      title: "Highly Recommended",
      user: "tarun sharma",
      date: "11 months ago",
      text: "Raj Haveli is a beautiful property with clean and comfortable rooms. The staff is professional and courteous, and the food is truly amazing. Overall, a wonderful experience and highly recommended stay in Bikaner.",
      image: "/images/Gallery/Night Look.png",
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
    }, 6000);
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
              Guest Experiences
            </p>
            <div className="h-[1px] w-16 md:w-24 bg-primary/50"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
            What Our Guests Say
          </h2>
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex gap-1 text-[#fbbc04]">
              <Star className="w-6 h-6 fill-current" />
              <Star className="w-6 h-6 fill-current" />
              <Star className="w-6 h-6 fill-current" />
              <Star className="w-6 h-6 fill-current" />
              <Star className="w-6 h-6 fill-current" />
            </div>
            <p className="text-lg font-medium text-foreground flex items-center gap-2">
              4.6/5 <span className="text-muted-foreground font-normal">Google Reviews</span>
            </p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row mt-12">

          {/* Background Image (Right side) */}
          <div className="relative md:absolute right-0 top-0 w-full md:w-[70%] h-[300px] md:h-[550px] z-0">
            <Image
              key={currentIndex}
              src={testimonials[currentIndex].image}
              alt="Hotel View"
              fill
              priority
              className="object-cover animate-in fade-in duration-700"
              sizes="(max-width: 768px) 100vw, 70vw"
            />
          </div>

          {/* Testimonial Card (Overlapping left side) */}
          <div className="relative z-10 w-full md:w-[55%] mt-0 md:mt-12 bg-[#f8f8f8] p-8 md:p-12 lg:p-16 shadow-xl min-h-[350px] md:min-h-[420px] flex flex-col justify-between">
            {/* Huge Watermark Quote Mark */}
            <div className="absolute bottom-4 right-8 text-[12rem] leading-none text-gray-200/60 font-serif opacity-50 pointer-events-none select-none" aria-hidden="true">
              &rdquo;
            </div>

            <div>
              <div className="flex items-center gap-6 mb-8 relative z-10">
                {/* Google Logo instead of Tripadvisor */}
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-8 h-8">
                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-xl lg:text-2xl text-primary mb-1">{testimonials[currentIndex].user}</h3>
                  <p className="text-xs font-bold text-gray-500">{testimonials[currentIndex].date} on Google</p>
                </div>
              </div>

              <div className="relative z-10">
                <p className="text-lg md:text-xl italic text-gray-700 leading-relaxed min-h-[140px] md:min-h-[120px]">
                  &quot;{testimonials[currentIndex].text}&quot;
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between mt-10 relative z-10">
              <div className="flex items-center gap-2">
                <button 
                  onClick={prevTestimonial}
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-12 md:mt-16">
          <a 
            href="https://maps.google.com/?q=Hotel+Raj+Haveli+Bikaner" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-serif text-primary border-b border-primary pb-1 hover:text-primary/70 hover:border-primary/70 transition-colors uppercase tracking-widest text-sm"
          >
            Read all reviews on Google <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
