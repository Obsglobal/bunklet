import { location } from "@/constants/images";
import Image from "next/image";
import React from "react";
import { Button } from "..";
import Link from "next/link";

const PropertyCard = ({ property }) => {
  return (
    <div className="flex flex-col w-auto border bg-[#f5f5f5] rounded-[10px] bg-opacity-70 border-[#D8D8D8] pb-4">
      <div className="px-2 py-5">
        <Image
          width={450}
          height={100}
          src={"/bg.png"}
          className="w-full rounded-[10px] px-2"
          alt={property.title}
        />
        <div className="flex flex-col w-full px-3 pt-3">
          <div className="flex justify-between items-center">
            <span className="uppercase font-semibold text-base md:text-xl">
              {property.title}
            </span>
          </div>
          <div className="flex flex-col w-full ml-[-8px]">
            <div className="flex gap-x-2 items-center">
              <Image width={30} height={10} src={location} alt="location" />
              <span className="capitalize text-lightblue text-sm">
                {property.location}
              </span>
            </div>

            <div className="flex items-start flex-wrap pt-4 gap-3 text-xs md:text-sm">
              <div className="text-[#3d3d3d] rounded-[10px] text-center border border-[#73788c] bg-[#ffffff] text-nowrap px-[10px] py-2">
                {property.room}
              </div>
              <div className="text-[#3d3d3d] border rounded-[10px] border-[#73788c] font-medium text-center bg-[#ffffff] text-nowrap px-[10px] py-2">
                {property.bathroom}
              </div>
              <div className="text-[#3d3d3d] rounded-[10px] text-center bg-[#ffffff] border border-[#73788c] font-medium text-nowrap px-[10px] py-2">
                {property.toilet}
              </div>
              <div className="text-[#3d3d3d] rounded-[10px] text-center bg-[#ffffff] border border-[#73788c] font-medium text-nowrap px-[10px] py-2">
                {property.kitchen}
              </div>
              <div className="text-[#3d3d3d] rounded-[10px] text-center bg-[#ffffff] border border-[#73788c] font-medium text-nowrap px-[10px] py-2">
                {property.square}
              </div>{" "}
              <br />
              <div className="text-[#3d3d3d] rounded-[10px] text-center bg-[#ffffff] border border-[#73788c] font-medium text-nowrap px-[10px] py-2">
                {property.parking}
              </div>
            </div>
            <div className="pt-5">
              <div className="flex flex-col items-start gap-1">
                <span className="font-semibold text-lightgray lg:text-lg">
                  Price per annum
                </span>
                <div className="flex w-full justify-between items-end">
                  <span className="font-semibold text-secondary lg:text-xl">
                    N{property.price}{" "}
                  </span>
                  <div className="flex items-center text-lightblue bg-[#f8f9fe] w-fit">
                    <span className="capitalize px-2 my-2 py-1 w-fit ">
                      View all properties
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
