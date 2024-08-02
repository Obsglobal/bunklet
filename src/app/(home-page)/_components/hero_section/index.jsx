"use client";
import { Urbanist } from 'next/font/google'
import { Button } from "@/components/ui";
import { IoSearch } from "react-icons/io5";
import React, { useState } from "react";
import PropertyFilter from "../../../../components/ui/property-filter";
import Image from "next/image";
import { filter } from "@/constants/images";
const urbanist = Urbanist({ subsets: ["latin"],  weight: ["400", "500", "600", "700"], });

const HeroSection = () => {
  const [showFilter, setShowFilter] = useState(false);

  const handleToggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <>
      <div
        className={`overflow-hidden brightness-90 xl:p-36 p-10 md:p-20 relative bg-center h-[40rem] md:h-[60rem] bg-no-repeat bg-cover md:pb-0 xl:pb-0 ${urbanist.className}`}
        style={{ backgroundImage: 'url("/hero.svg")' }}
      >
        <div className="mt-4 container md:container absolute z-50">
          <div className="flex items-start justify-start flex-col space-y-20 md:space-y-40 pt-40 w-5/6 lg:w-full">
            <div className="flex flex-col gap-y-6 lg:gap-y-16 text-primary">
              <span className="text-2xl md:text-3xl xl:text-6xl w-[100%] uppercase font-semibold ">
                Real <span className="text-secondary">Estate</span> At Your
                Finger Tips
              </span>
              {/* <div class /> */}
              <span className="lg:text-xl font-medium">
                Explore our range of beautiful properties with the addition of
                seperate accomodation suitable for you
              </span>
            </div>

            {/* search  */}
            <div className="bg-primary rounded-[10px] px-2 justify-center items-center bg-opacity-50 md:w-1/2 py-2 md:py-4 md:px-4 flex gap-x-2 md:gap-x-4 ">
              <div className="md:w-[200px] w-full rounded-[5px] gap-x-2 hover:cursor-pointer font-semibold flex justify-center items-center py-[8px] text-[#181818] bg-primary">
                <Image width={24} height={22} src={filter} />
                <span>Filter by</span>
              </div>
              <input
                type="text"
                placeholder="Type a city name e.g Maitama"
                className="md:w-full w-3/4 bg-primary py-2 rounded-[5px] text-sm md:text-base px-3 outline-none text-black"
              />

              <Button
                textColor="#ffffff"
                className={"md:p-2 py-2 md:w-[350px] w-fit text-nowrap flex items-center gap-x-2 justify-center text-sm font-medium md:text-xl"}
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
        <div className='bg-primary bg-opacity-20 z-20 left-0 right-0 top-0 lg:h-[60rem] absolute' />
      </div>
    </>
  );
};

export default HeroSection;
