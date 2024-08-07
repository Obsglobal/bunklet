import React from "react";
import { featuredProperties } from "../../../constants";
import PropertyCard from "@/components/ui/property-card";
import Link from "next/link";

const FeaturedListing = () => {
  return (
    <div className="lg:px-24 flex flex-col px-6 py-10 my-24">
      <span className="uppercase text-lightblue bg-[#f8f9fe] px-2 py-1 my-2 w-fit ">
        top picks
      </span>
      <span className="lg:text-3xl md:text-2xl py-3 text-lg font-semibold">
        Featured Listings
      </span>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 py-4">
        {featuredProperties.map((property) => (
          
            <PropertyCard property={property} key={property.id} />
          
        ))}
      </div>
      <div className="flex justify-end py-3">
        <Link href="/featured-properties" className="text-xl text-secondary">
          View All Properties
        </Link>
      </div>
    </div>
  );
};

export default FeaturedListing;
