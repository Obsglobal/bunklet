"use client";
import { featuredProperties } from "@/constants";
import { useAppSelector } from "@/lib/hooks";
import React from "react";
import PropertyCard from "../property-card";

const SearchResults = () => {
  const filterValue = useAppSelector((state) => state.event.propertyFilter);
// console.log(filterValue)
  const filteredProperties = featuredProperties.filter((property) => {
    const {
      location,
      property: propertyType,
      bedroom,
      minPrice,
      maxPrice,
    } = filterValue;

    return (
      (location === "Any Location" || location === "" || property.location_state === location) &&
      (propertyType === "All Type" ||propertyType === "" || property.property_type === propertyType) &&
      (bedroom === "All Type" || bedroom === "" || property.room === bedroom) &&
      (minPrice === "others" || minPrice === "" || property.price >= parseInt(minPrice)) &&
      (maxPrice === "others" || maxPrice === "" || property.price <= parseInt(maxPrice))
    );
  });

  console.log(filterValue);
  return (
    <div className="lg:px-24 flex flex-col px-6 py-10 my-24">
       <span className="uppercase text-lightblue bg-[#f8f9fe] px-2 py-1 my-2 w-fit ">
        most related
      </span>
      <span className="lg:text-3xl md:text-2xl py-3 text-lg font-semibold">
      Search Results
      </span>
      <div>
       
        <div>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 py-4">
            {filteredProperties.map((property) => (
              <PropertyCard property={property} key={property.id} />
            ))}
          </div>
          {filteredProperties.length === 0 && (
            <span className="text-xl font-medium text-secondary text-center">No Properties Matching Search Results</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
