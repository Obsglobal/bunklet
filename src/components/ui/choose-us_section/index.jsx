import { cash, humidifier, lock, star } from "@/constants/images";
import Image from "next/image";
import React from "react";

const ChooseUsSection = () => {
  return (
    <div className="lg:px-24 flex flex-col px-6 py-10 mb-40">
     <div className="flex items-center text-lightblue bg-[#f8f9fe] w-fit">
        <span className="uppercase px-2 my-2 py-1 w-fit ">new</span>
        <Image width={32} height={31} src={star} />
      </div>
      <span className="lg:text-3xl md:text-2xl py-3 text-lg font-semibold">
        Why we are the best at what we do
      </span>
      <div className="grid lg:grid-cols-3 justify-items-center md:grid-cols-2 grid-cols-1 gap-8 py-4 pt-10">
        <div className="flex items-start flex-col gap-y-2 w-full">
          <Image width={55} height={66} src={lock} alt="lock" />
          <span className="text-secondary md:text-lg text-base lg:text-xl font-semibold">
            Security
          </span>
          <span className="text-lightgray md:text-base text-sm">
            Enjoy lifestyle amenities designed to provide every homeowners
            modern comfort, a stone's throw away from schools, churches, and
            hospitals.
          </span>
        </div>
        <div className="flex items-start flex-col gap-y-2 w-full">
          <Image width={55} height={66} src={cash} alt="icon" />
          <span className="text-secondary md:text-lg text-base lg:text-xl font-semibold">
          Best Price
          </span>
          <span className="text-lightgray md:text-base text-sm">
            Enjoy lifestyle amenities designed to provide every homeowners
            modern comfort, a stone's throw away from schools, churches, and
            hospitals.
          </span>
        </div>
        <div className="flex items-start flex-col gap-y-2 w-full">
          <Image width={55} height={66} src={humidifier} alt="icon" />
          <span className="text-secondary md:text-lg text-base lg:text-xl font-semibold">
          Comfort
          </span>
          <span className="text-lightgray md:text-base text-sm">
            Enjoy lifestyle amenities designed to provide every homeowners
            modern comfort, a stone's throw away from schools, churches, and
            hospitals.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChooseUsSection;
