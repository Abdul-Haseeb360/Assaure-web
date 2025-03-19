import Image from "next/image";
import Link from "next/link";
import { newsItems } from "@/constant/data";
import newsinsight from "../../Public/newsinsight.png";
import { Container } from "./Container";

export default function NewsEvents() {
  return (
    <section className="">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start mb-6 pt-[120px]">
          <div>
            <h2 className="text-[32px] font-plusJakarta leading-[100%] font-medium text-secondary-gray ">
              Latest{" "}
              <span className="text-primary-green text-[32px] leading-[100%] font-bold">
                News & Events
              </span>
            </h2>
            <p className="mt-4 font-normal text-lg font-montserrat">
              From industry updates to key milestones and upcoming events,
              explore what&apos;s <br /> happening at ASSURE.
            </p>
          </div>
          <Link
            href="#"
            className="mt-4 md:mt-0 text-secondary-gray font-montserrat font-medium  text-base hover:border-b-2  border-primary-green pb-1"
          >
            Explore all news & events
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Featured Event */}
          <div className="bg-white rounded-md overflow-hidden">
            <div className="relative h-60 w-full">
              <Image
                src={newsinsight}
                alt="SBTi Awareness Session"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="pt-4">
              <div className="bg-primary-green font-montserrat text-white px-4 py-1 font-medium text-sm inline-block mb-4">
                Event
              </div>
              <h3 className="text-xl font-normal mb-4 font-plusJakarta">
                SBTi Awareness Session
              </h3>
              <p className="mb-4 font-normal text-base font-montserrat">
                ASSURE International recently hosted an insightful session on
                Science-Based Targets (SBTi) at our Lahore office, bringing
                together leading names from the textile sector.
              </p>
              <Link
                href="#"
                className="text-secondary-gray hover:border-b-2 font-montserrat border-primary-green pb-1 text-base font-medium inline-block"
              >
                View
              </Link>
            </div>
          </div>

          {/* News Items */}
          <div className="space-y-6 pb-[86px]">
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="bg-[#F5F5F5] p-6 rounded-md font-montserrat"
              >
                <div className="bg-primary-green text-white px-4 py-1 text-base font-medium inline-block mb-4">
                  {item.type}
                </div>
                <p className=" my-2 font-normal text-base">{item.title}</p>
                <Link
                  href={item.link}
                  className="text-gray-800 hover:border-b-2 border-primary-green pb-1 font-medium inline-block"
                >
                  Read news
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
