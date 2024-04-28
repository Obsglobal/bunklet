import { location } from "@/constants/images";
import Image from "next/image";
import React from "react";

const PropertyCard = ({ property }) => {
  return (
    <div className="flex flex-col w-auto border border-[#D8D8D8] pb-10">
      <Image
        width={400}
        height={100}
        src={"/bg.png"}
        className="w-auto"
        alt={property.title}
      />
      <div className="flex flex-col w-full px-3 pt-3">
        <div className="flex justify-between items-center">
          <span className="uppercase font-semibold text-base md:text-2xl">
            {property.title}
          </span>
          <span className="flex items-center gap-1 text-xl">
            <span className="font-medium md:text-[15px] text-sm">N{property.price} </span>{" "}
            <span className="text-sm font-normal"> per annum</span>
          </span>
        </div>
        <div className="flex flex-col w-full ">
          <div className="flex items">
          <img src={location} alt="" />
          <span className="capitalize text-base">{property.location}</span>
          </div>
         
          <div className="flex items-start flex-wrap pt-4 gap-3 text-sm md:text-base">
            <div className="text-[#3d3d3d] text-center bg-[#D8D8D8] text-nowrap px-[10px] py-2">
              {property.room}
            </div>
            <div className="text-[#3d3d3d] text-center bg-[#D8D8D8] text-nowrap px-[10px] py-2">
              {property.bathroom}
            </div>
            <div className="text-[#3d3d3d] text-center bg-[#D8D8D8] text-nowrap px-[10px] py-2">
              {property.toilet}
            </div>
            <div className="text-[#3d3d3d] text-center bg-[#D8D8D8] text-nowrap px-[10px] py-2">
              {property.kitchen}
            </div>
            <div className="text-[#3d3d3d] text-center bg-[#D8D8D8] text-nowrap px-[10px] py-2">
              {property.square}
            </div>{" "}
            <br />
            <div className="text-[#3d3d3d] text-center bg-[#D8D8D8] text-nowrap px-[10px] py-2">
              {property.parking}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
