"use client";
import { Urbanist } from "next/font/google";
import { Button } from "@/components/ui";
import { IoSearch } from "react-icons/io5";
import React, { useState } from "react";
import Image from "next/image";
import { filter } from "@/constants/images";
import Filter from "@/components/ui/filter";
const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const HeroSection = () => {
  const [showFilter, setShowFilter] = useState(false);

  const handleToggleFilter = () => {
    setShowFilter(!showFilter);
  };
  return (
    <div className="md:h-[40rem] h-[40rem] lg:h-[40rem] w-full">
      <div className={`bg-[#F5F5F5B5] relative md:h-full h-full flex items-center mb-40 text-secondary w-full z-50 ${urbanist.className}`}>
        <div className="flex items-start justify-between lg:w-3/4 pt-40 px-6 lg:px-[6%]">
          <div className="flex flex-col gap-y-6 lg:gap-y-12">
            <span className="text-3xl md:text-4xl xl:text-6xl w-[100%] font-semibold ">
            Find Properties for Rent
            </span>
            <span className="lg:text-xl md:text-lg font-medium w-3/4 text-[#73788C]">
              Explore our range of beautiful properties with the addition of
              seperate accomodation suitable for you
            </span>
            <div className="flex md:flex-row flex-col md:items-center gap-x-4 gap-y-4">
              <div className="flex w-fit bg-[#FDFDFD] gap-y-2 px-4 py-2 rounded-[20px] flex-col">
                <span className="text-secondary text-2xl md:text-3xl font-semibold">20k +</span>
                <span className="text-[#67676ABA] font-medium text-xl">Properties for rent</span>
              </div>
              <div className="flex w-fit bg-[#FDFDFD] gap-y-2 px-4 py-2 rounded-[20px] flex-col">
              <span className="text-secondary text-2xl md:text-3xl font-semibold">10k +</span>
              <span className="text-[#67676ABA] font-medium text-xl">Happy Customers</span>
              </div>
            </div>
          </div>
       
        </div>
        <div className="absolute bottom-0 right-0 ">
          <img src="/rentbg.svg" alt="bg" className="lg:w-[600px] md:w-[300px] w-[250px]" />
        </div>

        <div className="absolute bottom-[-4.8rem] right-0 left-0 mx-auto w-3/4"><Filter /> </div>
      </div>
    </div>
  );
};

export default HeroSection;
