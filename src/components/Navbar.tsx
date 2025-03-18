import Image from "next/image";
import Link from "next/link";
import hero from "../../Public/herosection.jpg";
import Logo from "../../Public/Assure logo-01.png";
import { navigation } from "@/constant/data";
import HeroSection from "./HeroSection";

export default function Hero() {
  return (
    <div className="relative h-[711px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#06250FD4] " />
        <Image
          src={hero}
          alt=""
          priority
          className="self-stretch  z-10 w-full h-full"
        />
      </div>

      <div className="relative w-full container mx-auto ">
        <header className="absolute top-4  left-0 right-0 z-10 px-4 py-4 md:py-6 bg-white rounded-lg flex flex-col md:flex-row justify-between items-center">
          <div className="flex ">
            <Image src={Logo} alt="ASSURE logo icon" className="mr-6" />
          </div>
          <div className="hidden gap-8 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium text-gray-700 hover:text-gray-900"
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
        <HeroSection />
      </div>
    </div>
  );
}
