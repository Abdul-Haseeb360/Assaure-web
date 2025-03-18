import React from "react";
import { Button } from "./ui/button";

function Consultation() {
  return (
    <div className="h-[311px] bg-primary-green relative text-white">
      <div className="container mx-auto">
        <h2 className="font-medium font-plusJakarta text-[32px] leading-[48px] text-white pt-20 ">
          Partner with ASSURE to achieve compliance, ethical business <br />{" "}
          practices, and a sustainable future.{" "}
        </h2>
        <Button className="bg-white font-montserrat text-black hover:bg-gray-100 font-medium py-2 px-4  mt-5 rounded-lg">
          Request a Consultation
        </Button>
      </div>
    </div>
  );
}

export default Consultation;
