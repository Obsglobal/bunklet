"use client";
import React from "react";
import Image from "next/image";
import { info1, info2, info3 } from "@/constants/images";
import { Button } from "@/components/ui";

const InfoSection = () => {
  return (
    <div className="flex md:flex-row gap-10 items-center justify-around font-open_sans text-black absolute top-[38rem] md:top-[52rem] mx-auto w-full">
      <div className="flex items-center justify-center flex-col gap-2">
        <Image
          width={400}
          height={300}
          src={info1}
          alt="map"
          className="relative"
        />
        <span className="font-semibold text-base md:text-2xl capitalize">
          Gallery View
        </span>
        <span className="text-sm md:text-xl text-center capitalize">
          photo gallery of properties
        </span>
        <Button
          children="See All Listing"
          border="none"
          className="absolute top-12 md:top-[11.5rem] text-xs !p-1 md:!px-6 font-semibold md:text-base !bg-opacity-60"
          borderRadius="0"
          padding="10px 25px"
        />
      </div>
      <div className="flex items-center justify-center flex-col gap-2">
        <Image width={400} height={300} src={info2} alt="map" />
        <span className="font-semibold text-base md:text-2xl capitalize">
          Map Vew
        </span>
        <span className="text-sm md:text-xl text-center capitalize">
          Google Maps, Sidebars of properties
        </span>
      </div>
      <div className="flex items-center justify-center flex-col gap-2">
        <Image width={400} height={300} src={info3} alt="map" />
        <span className="font-semibold text-base md:text-2xl text-center capitalize">
          Talk to Our Agent
        </span>
        <span className="text-sm md:text-xl text-center capitalize">
          Have question?
        </span>
      </div>
    </div>
  );
};

export default InfoSection;
