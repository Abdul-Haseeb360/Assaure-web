import React from "react";
import { Button } from "./ui/button";
import { getHeroBanner } from "@/lib/actions/fetchHeroBanner";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
async function HeroSection() {
  const banner = await getHeroBanner();

  if (!banner || banner.length === 0) {
    return <p>no banner found</p>;
  }

  return (
    <div className="">
      <Carousel>
        <CarouselContent>
          {banner.map((items: any) => (
            <CarouselItem>
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
}

export default HeroSection;

