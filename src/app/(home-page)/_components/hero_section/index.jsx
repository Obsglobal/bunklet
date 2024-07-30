"use client";
import { Button } from "@/components/ui";
import { IoSearch } from "react-icons/io5";
import React, { useState } from "react";
import PropertyFilter from "../property-filter";
import Image from "next/image";
import { filter } from "@/constants/images";

const HeroSection = () => {
  const [showFilter, setShowFilter] = useState(false);

  const handleToggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <>
      <div
        className="overflow-hidden xl:p-36 p-10 md:p-20 bg-primary bg-opacity-30 bg-center h-[40rem] md:h-[60rem] bg-no-repeat bg-cover relative md:pb-0 xl:pb-0"
        style={{ backgroundImage: 'url("/bg.png")' }}
      >
        <div className="mt-4 container md:container">
          <div className="flex items-start justify-start flex-col space-y-20 md:space-y-40 pt-40 w-full">
            <div className="flex flex-col gap-y-20 text-primary">
              <span className="text-base md:text-xl xl:text-6xl w-[100%] uppercase font-semibold ">
                Real <span className="text-secondary">Estate</span> At Your
                Finger Tips
              </span>
              <span className="text-xl font-medium">
                Explore our range of beautiful properties with the addition of
                seperate accomodation suitable for you
              </span>
            </div>

            {/* search  */}
            <div className="bg-primary rounded-[10px] justify-center items-center bg-opacity-50 md:w-1/2 py-4 md:px-4 flex gap-x-4 ">
              <div className="md:w-[200px] w-[300px] gap-x-2 hover:cursor-pointer font-semibold flex justify-center items-center py-[8px] text-[#181818] bg-primary">
                <Image width={24} height={22} src={filter} />
                <span>Filter by</span>
              </div>
              <input
                type="text"
                placeholder="Type a city name e.g Maitama"
                className="w-full bg-primary py-2 px-3 outline-none text-black"
              />

              <Button
                textColor="#ffffff"
                className={"md:p-2 py-2 w-[300px] flex items-center gap-x-2 justify-center text-sm font-medium md:text-xl"}
              >
                <IoSearch />
                <span>Find property</span>
              </Button>

              {showFilter && (
                <div className="absolute top-36">
                  {" "}
                  <PropertyFilter />{" "}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
