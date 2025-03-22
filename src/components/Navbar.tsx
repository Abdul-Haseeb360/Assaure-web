import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/constant/data";
import { Container } from "./Container";

export default function Hero() {
  return (
    <div className=" ">
      {/* Background Image */}
      <Container>
        <div className="relative w-full ">
          <header className="absolute top-4  left-0 right-0 z-10 px-4 py-4 md:py-6 bg-white rounded-lg flex flex-col md:flex-row justify-between items-center">
            <div className="flex ">
              <Link href="/">
                <Image
                  src="/assurelogo.png"
                  alt="ASSURE logo icon"
                  className="mr-6"
                  width={150}
                  height={40}
                />
              </Link>
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
        </div>
      </Container>
    </div>
  );
}
