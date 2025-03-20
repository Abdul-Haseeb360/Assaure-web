import Image from "next/image";
import React from "react";
import { Container } from "./Container";

function OurPhilosphy() {
  return (
    <div>
      <Container>
        <div>
          <Image
            src="/assure-philosphy.png"
            alt=" "
            width={704}
            height={817}
            className="mx-[311px] "
          />
          <p className="font-montserrat font-normal text-[28px] leading-[42px] text-[#232323]">
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
