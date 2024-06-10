import { arrowleft, arrowright } from "@/constants/images";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full text-center">
    <div
      className="overflow-hidden text-center bg-center h-[40rem] md:h-[60rem] bg-no-repeat bg-cover relative"
      style={{ backgroundImage: 'url("/property-details.svg")' }}
    >
      <div className="absolute top-[50%]">
        <div className="flex justify-between w-screen px-10">
        <Image width={20} height={20} src={arrowleft} />
        <Image width={20} height={20} src={arrowright} />
        </div>
      </div>
      
    </div>
    <span className="text-lg">1 of 48</span>
    </div>
  );
};

export default HeroSection;
