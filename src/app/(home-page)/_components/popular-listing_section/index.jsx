import PropertyCard from "@/components/ui/property-card";
import { popularProperties } from "@/constants";
import Link from "next/link";
import React from "react";

const PopularListing = () => {
  return (
    <div className="lg:px-24 px-6 py-10">
      <span className="lg:text-3xl md:text-2xl text-lg font-semibold">Popular Listing</span>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 py-4 gap-8">
        {popularProperties.map((property) => (
          <Link href={`/property-details/${property.id}`} key={property.id} >
          <PropertyCard property={property} />
          </Link>
        ))}
      </div>
      <div className="flex justify-end py-3">
        <Link href="featured-properties" className="text-xl text-secondary">
          View more
        </Link>
      </div>
    </div>
  );
};

export default PopularListing;
