import HeroSectionCarousel from "./HeroSectionCarousel";
import { getHeroBanner } from "@/lib/actions/fetchHeroBanner";
import { BannerItem } from "@/types/type";
import Image from "next/image";
import { Container } from "./Container";

export default async function HeroSectionWrapper() {
  const banner: BannerItem[] = await getHeroBanner();

  return (
    <>
      <Container>
        <div className="absolute inset-0 ">
          <div className="absolute inset-0 bg-[#06250FD4] " />
          <Image
            src="/herosection.jpg"
            alt=""
            priority
            className="self-stretch z-10 w-full h-full"
            width={1440}
            height={711}
          />
        </div>
        <HeroSectionCarousel banner={banner} />
      </Container>
    </>
  );
}
