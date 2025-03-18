import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { services } from "@/constant/data";

export default function Home() {
  return (
    <main className="container mx-auto">
      <section className="py-12">
        <h2 className="text-[32px] font-plusJakarta leading-[100%] font-medium mb-6 text-secondary-gray">
          Helping You Meet{" "}
          <span className="text-primary-green text-[32px] leading-[100%] font-bold">
            Global Standards
          </span>
        </h2>
        <div className="flex gap-6 overflow-x-auto">
          {services.map((service, index) => (
            <div key={index}>
              <div className="relative w-[236.8px] h-[416px] rounded-lg overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover "
                />
                <div className="absolute inset-0 bg-[#00000066] hover:border-b-4 transition-all border-primary-green">
                  <div className="absolute bottom-0 p-8 space-y-4 font-montserrat ">
                    <h3 className="text-xl f font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="text-base font-normal  text-white">
                      {service.description}
                    </p>
                    <div className="p-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors inline-flex">
                      <ChevronRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
