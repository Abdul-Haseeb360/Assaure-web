import React from "react";
import { Container } from "./Container";

function AboutHeroSection() {
  return (
    <div>
      <section className="bg-[#094528] h-[353px] text-white py-28">
        <Container>
          <div className=" ">
            <h1 className="font-plusJakarta font-medium text-[32px] leading-[100%]">
              Who We Are
            </h1>
            <p className="font-montserrat font-normal text-base pt-5 max-w-xl">
              Ensure your business aligns with international human rights
              standards and mitigates risks across supply chains.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default AboutHeroSection;
