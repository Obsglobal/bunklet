import PropertyCard from "@/components/ui/property-card";
import { newProperties } from "@/constants";
import { star } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewListing = () => {
  return (
    <div className="lg:px-24 gap-y-2 px-6 py-10 flex flex-col">
      <div className="flex items-center text-lightblue bg-[#f8f9fe] w-fit">
        <span className="uppercase  px-2 my-3 py-1 w-fit ">new</span>
        <Image width={32} height={31} src={star} />
      </div>
      <span className="lg:text-3xl md:text-2xl text-lg font-semibold">
        New Listing
      </span>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 py-4 gap-8">
        {newProperties.map((property) => (
            <PropertyCard property={property} />
        ))}
      </div>
      <div className="flex justify-end py-3">
        <Link href="featured-properties" className="text-xl text-secondary">
        View All Properties
        </Link>
      </div>
    </div>
  );
};

export default NewListing;
