import React from "react";
import { Container } from "./Container";

function OurTeam() {
  return (
    <Container>
      <div>
        <h1 className="font-plusJakarta font-medium text-[32px] leading-[100%] mb-10 text-secondary-gray">
          Our Team
        </h1>
        <div className="flex flex-col md:flex-row gap-8 pb-[123px] ">
          <div className="md:w-1/3">
            <div className="w-[358px] h-[301px] bg-[#E9E9E9]"></div>
          </div>
          <div className="md:w-3/4">
            <h1 className="font-montserrat font-semibold text-base">
              Usman Javaid
            </h1>
            <h1 className="font-montserrat font-semibold text-base">CEO</h1>
            <p className="font-montserrat font-normal text-base max-w-[861px] pt-3">
              With two decades of expertise in managing third-party auditing
              firms, Usman Javaid is a seasoned professional in the realm of
              Human Rights, Safety, and Sustainability. His extensive career
              spans across Pakistan, the Middle East, South Asia, and Southeast
              Asia, demonstrating a global perspective. He has effectively
              navigated the complexities of international projects, ensuring the
              highest ethical and operational standards. His profound
              understanding of auditing protocols and compliance procedures has
              made him a trusted figure in the industry. His commitment to
              fostering human rights, enhancing safety, and promoting
              sustainability has positively impacted numerous organizations and
              communities. He will Lead Global operations for ASSURE and will be
              the driving force for Team ASSURE. Being an APSCA Certified Social
              Compliance Auditor ( CSCA), He has vast experience of conducting
              more than 2000 Labor Rights audits
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default OurTeam;
