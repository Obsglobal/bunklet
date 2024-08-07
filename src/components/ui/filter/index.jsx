import React from "react";
import { Button } from "..";
import { IoSearch } from "react-icons/io5";
import { Urbanist } from "next/font/google";
import { bed, estate, expand, locate, price } from "@/constants/images";
import Image from "next/image";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const Filter = () => {
  return (
    <div className={` ${urbanist.className}`}>
      <div className="flex flex-col">
        <div className="bg-[#dddddd] mx-auto w-5/6 rounded-[20px] rounded-bl-none rounded-br-none bg-opacity-60">
          <div className="py-4 flex gap-x-2 items-center justify-between px-3">
          <input type="text" className="rounded-[20px] px-4 py-2 w-full" placeholder="Search for property" />
          <Button
            textColor="#ffffff"
            className={
              "md:p-2 py-2 w-fit text-nowrap flex items-center gap-x-2 justify-center text-sm font-medium md:text-xl"
            }
          >
            <IoSearch />
            <span>Find property</span>
          </Button>
        </div>
      </div>
      <div className="bg-[#dddddd] rounded-[20px] rounded-bl-none rounded-br-none bg-opacity-60">
      <div className="py-4 flex gap-x-2 items-center justify-between px-3">
        <div className="bg-primary w-full flex justify-between items-center rounded-[20px] py-2 px-4 gap-x-1 ">
          <Image width={24} height={20} src={locate} alt="location" />
          <span className="font-semibold text-secondary text-base">Location</span>
          <Image width={40} height={34} src={expand} alt="open" className="hover:cursor-pointer"  />
        </div>
        <div className="bg-primary w-full flex justify-between items-center rounded-[20px] py-2 px-4 gap-x-1">
          <Image width={24} height={20} src={estate} alt="property" />
          <span className="font-semibold text-secondary text-base">Property type</span>
          <Image width={40} height={34} src={expand} alt="open" className="hover:cursor-pointer"  />
        </div>
        <div className="bg-primary w-full flex justify-between items-center rounded-[20px] py-2 px-4 gap-x-1">
          <Image width={24} height={20} src={bed} alt="bedroom" />
          <span className="font-semibold text-secondary text-base">Bedroom</span>
          <Image width={40} height={34} src={expand} alt="open" className="hover:cursor-pointer"  />
        </div>
        <div className="bg-primary w-full flex justify-between items-center rounded-[20px] py-2 px-4 gap-x-1">
          <Image width={24} height={20} src={price} alt="price" />
          <span className="font-semibold text-secondary text-base">Minimum price</span>
          <Image width={40} height={34} src={expand} alt="open" className="hover:cursor-pointer"  />
        </div>
        <div className="bg-primary w-full flex items-center justify-between rounded-[20px] py-2 px-4 gap-x-1">
          <Image width={24} height={20} src={price} alt="price" />
          <span className="font-semibold text-secondary text-base">Maximum price</span>
          <Image width={40} height={34} src={expand} alt="open" className="hover:cursor-pointer" />
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Filter;
