import PropertyCard from "@/components/ui/property-card";
import { newProperties } from "@/constants";
import Link from "next/link";
import React from "react";

const NewListing = () => {
  return (
    <div className="lg:px-24 px-6 py-10">
      <span className="lg:text-[40px] md:text-2xl text-lg font-semibold">New Listing</span>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {newProperties.map((property) => (
          <Link href={`/property-details/${property.id}`}>
          <PropertyCard property={property} key={property.id} />
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

export default NewListing;
