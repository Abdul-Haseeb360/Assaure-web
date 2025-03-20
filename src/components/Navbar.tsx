import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/constant/data";
import HeroSection from "./HeroSection";
import { Container } from "./Container";
import HeroSectionWrapper from "./HeroSectionWrapper";

export default function Hero() {
  return (
    <div className="relative h-[711px]">
      {/* Background Image */}
      <Container>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#06250FD4] " />
          <Image
            src="/herosection.jpg"
            alt=""
            priority
            className="self-stretch  z-10 w-full h-full"
            width={1440}
            height={711}
          />
        </div>

        <div className="relative w-full ">
          <header className="absolute top-4  left-0 right-0 z-10 px-4 py-4 md:py-6 bg-white rounded-lg flex flex-col md:flex-row justify-between items-center">
            <div className="flex ">
              <Image
                src="/assurelogo.png"
                alt="ASSURE logo icon"
                className="mr-6"
                width={150}
                height={40}
              />
            </div>
            <div className="hidden gap-8 lg:flex">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-montserrat text-[14px] leading-[30px] font-normal"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <Link
              href="/contact"
              className="rounded-lg bg-[#F58220] px-6 py-3 text-base font-medium text-white hover:bg-[#F58220]/90"
            >
              Contact now
            </Link>
          </header>
          <HeroSectionWrapper />
        </div>
      </Container>
    </div>
  );
}
