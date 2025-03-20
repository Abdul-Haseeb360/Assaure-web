import React from "react";
import { whyUs } from "@/constant/data";
import Image from "next/image";
import { Container } from "./Container";

function TrustSection() {
  return (
    <div className="bg-[#F9F9F9]">
      <Container>
        <div className="">
          <section className="mx-auto py-12  ">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <h1 className="text-secondary-gray font-plusJakarta text-[32px] font-medium leading-[100%]  max-w-[400px]">
                  Why choose{" "}
                  <span className="text-primary-green text-[32px] leading-[100%] font-bold">
                    ASSURE?
                  </span>
                </h1>
              </div>
              <div className="md:w-2/3">
                <p className="text-secondary-gray font-montserrat text-[20px] leading-8  font-normal">
                  At ASSURE, we are dedicated to promoting ethical, safe, and
                  sustainable business practices. With a team of highly skilled
                  professionals and APSCA- registered auditors, we have earned
                  the trust of industries worldwide through our expertise in
                  social compliance, sustainability, and safety assessments.
                </p>
              </div>
            </div>
          </section>

          <div className="flex gap-8">
            {whyUs.map((choose, index) => (
              <div key={index}>
                <Image
                  src={choose.image}
                  alt={choose.title}
                  width={75}
                  height={75}
                />
                <h1 className="text-[24px] leading-[24px] font-plusJakarta font-semibold pb-4 mt-2">
                  {choose.title}
                </h1>
                <p className="font-normal font-montserrat text-base pb-[91px]">
                  {choose.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TrustSection;
