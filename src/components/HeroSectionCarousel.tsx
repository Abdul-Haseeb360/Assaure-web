"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { HeroSectionProps } from "@/types/type";
import { cn } from "@/lib/utils";

const HeroSectionCarousel: React.FC<HeroSectionProps> = ({ banner }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    // Update `current` index when slide changes
    const updateIndex = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", updateIndex);
    updateIndex(); // Initialize current index on mount

    return () => {
      api.off("select", updateIndex);
    };
  }, [api]);

  if (!banner || banner.length === 0) {
    return <p className="min-h-full mx-auto text-center">No banner found</p>;
  }

  return (
    <div className="h-[711px]">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        setApi={setApi} // Set the API when Carousel initializes
      >
        <CarouselContent>
          {banner.map((items) => (
            <CarouselItem key={items._id}>
              <div className="relative text-white pt-32 md:pt-48">
                <h1 className="text-[40px] leading-[100%] font-medium font-plusJakarta md:text-5xl mb-6 mt-[120px] max-w-4xl">
                  {items.title}
                  <span className="font-bold text-[40px] leading-[100%]">
                    Ethical, Safe,
                  </span>{" "}
                  <span className="font-bold text-[40px] leading-[100%]">
                    and Sustainable
                  </span>{" "}
                  Practices
                </h1>
                <p className="text-xl font-normal mb-6 max-w-2xl font-montserrat">
                  {items.description}
                </p>
                <Button className="bg-white text-black font-montserrat hover:bg-gray-100 font-medium py-2 px-4 rounded-lg border-2 border-primary-green">
                  {items.cta.buttonText}
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Pagination Dots */}
      {banner.length > 1 && (
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {banner.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all",
                index === current
                  ? "bg-primary-green w-8"
                  : "bg-white/50 hover:bg-white/80"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroSectionCarousel;
