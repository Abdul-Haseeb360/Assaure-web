import Image from "next/image";
import React from "react";
import { Container } from "./Container";

function OurPhilosphy() {
  return (
    <div>
      <Container>
        <div className="">
          <h1 className="font-medium text-center mt-32 text-[32px] leading-[100%] font-plusJakarta text-secondary-gray">
            Our
            <span className="font-bold text-[32px] leading-[100%] font-plusJakarta text-primary-green">
              {" "}
              Philosophy
            </span>
          </h1>
          <Image
            src="/assure-philosphy.png"
            alt=" "
            width={704}
            height={704}
            className="mx-[311px] "
          />
          <p className="font-montserrat font-normal text-[28px] leading-[42px] text-[#232323] pb-28 max-w-5xl">
            We believe that businesses have a responsibility to their employees,
            communities, and the environment. Our mission is to assist
            organizations in upholding the highest standards of social
            compliance, sustainability, and safety. With a team of highly
            skilled and experienced professionals, we provide services of for a
            diverse range of industries worldwide. We have team of all APSCA
            Certified Social compliance auditors ready to provide specialized
            services to our valued customers.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default OurPhilosphy;
