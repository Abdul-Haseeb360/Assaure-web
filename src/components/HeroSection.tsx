"use client";

import React from "react";
import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { HeroSectionProps } from "@/types/type";

// const HeroSection: React.FC<HeroSectionProps> = ({ banner }) => {

// const plugin = React.useRef(
//   Autoplay({ delay: 2000, stopOnInteraction: true })
// );

// import React, { useState } from "react";
// import { Button } from "./ui/button";
// import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
// import Autoplay from "embla-carousel-autoplay";
// import { HeroSectionProps } from "@/types/type";

const HeroSection: React.FC<HeroSectionProps> = ({ banner }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
  if (!banner || banner.length === 0) {
    return <p className="min-h-full mx-auto text-center">No banner found</p>;
  }
  return (
    <div className="">
      <Carousel
        plugins={[plugin.current]}
        className="w-full "
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {banner.map((items) => (
            <CarouselItem key={items._id}>
              <div
                key={items._id}
                className="relative text-white  pt-32 md:pt-48"
              >
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
    </div>
  );
};

export default HeroSection;
