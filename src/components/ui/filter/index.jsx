"use client";
import React, { useState } from "react";
import { Button } from "..";
import { IoSearch } from "react-icons/io5";
import { Urbanist } from "next/font/google";
import { bed, estate, expand, locate, price } from "@/constants/images";
import Image from "next/image";
import {
  bedroomFilter,
  locationFilter,
  maxPriceFilter,
  minPriceFilter,
  propertyFilter,
} from "@/constants";
import { useDispatch } from "react-redux";
import { setPropertyFilter } from "@/features/eventSlice";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const Filter = () => {
  const dispatch = useDispatch();
  const [openLocation, setOpenLocation] = useState(false);
  const [openProperty, setOpenProperty] = useState(false);
  const [openBedroom, setOpenBedroom] = useState(false);
  const [openMinPrice, setOpenMinPrice] = useState(false);
  const [openMaxPrice, setOpenMaxPrice] = useState(false);
  const [filterValue, setFilterValue] = useState({
    location: "",
    property: "",
    bedroom: "",
    minPrice: "",
    maxPrice: "",
  });

  const handleSearch = () => {
    if (Object.values(filterValue).every((value) => value === "")) {
      return;
    }
    dispatch(setPropertyFilter(filterValue));
  };
  const handleLocationChange = (value) => {
    setFilterValue((prevState) => ({ ...prevState, location: value }));
    setOpenLocation(false)
  };

  const handlePropertyChange = (value) => {
    setFilterValue((prevState) => ({ ...prevState, property: value }));
    setOpenProperty(false)
  };

  const handleBedroomChange = (value) => {
    setFilterValue((prevState) => ({ ...prevState, bedroom: value }));
    setOpenBedroom(false)
  };

  const handleMinPriceChange = (value) => {
    setFilterValue((prevState) => ({ ...prevState, minPrice: value }));
    setOpenMinPrice(false)
  };

  const handleMaxPriceChange = (value) => {
    setFilterValue((prevState) => ({ ...prevState, maxPrice: value }));
    setOpenMaxPrice(false)
  };
  const filterString = Object.values(filterValue)
    .filter((value) => value !== "")
    .join(",   ");

  return (
    <div className={` ${urbanist.className}`}>
      <div className="flex flex-col">
        <div className="bg-[#dddddd] mx-auto w-5/6 rounded-[20px] rounded-bl-none rounded-br-none bg-opacity-60">
          <div className="py-4 flex gap-x-2 items-center justify-between px-3">
            <input
              type="text"
              value={filterString}
              className="rounded-[20px] font-semibold px-4 py-2 w-full"
              placeholder="Search for property"
            />
            <Button
              textColor="#ffffff"
              className={
                "md:p-2 py-2 w-fit text-nowrap flex items-center gap-x-2 justify-center text-sm font-medium md:text-xl"
              }
              onClick={handleSearch}
            >
              <IoSearch />
              <span>Find property</span>
            </Button>
          </div>
        </div>
        <div className="bg-[#dddddd] rounded-[20px] rounded-bl-none rounded-br-none bg-opacity-60">
          <div className="py-4 flex gap-x-2 items-center justify-between px-3">
            <div className="relative w-full">
              <div
                className="bg-primary w-full flex justify-between items-center rounded-[20px] py-2 px-4 gap-x-1 cursor-pointer"
                onClick={() => setOpenLocation(!openLocation)}
              >
                <Image width={24} height={20} src={locate} alt="location" />
                <span className="font-semibold text-secondary text-base">
                  Location
                </span>
                <Image
                  width={40}
                  height={34}
                  src={expand}
                  alt="open"
                  className="hover:cursor-pointer"
                />
              </div>{" "}
              {openLocation && (
                <div className="absolute top-12 left-0 right-0 flex justify-center items-center w-full h-[30vh] overflow-hidden">
                  <div className="w-full h-full overflow-y-auto">
                    {locationFilter.map((value) => (
                      <div
                        className="bg-primary py-1 drop-shadow-lg flex flex-col w-full text-center"
                        key={value.capital}
                      >
                        <span
                          className="cursor-pointer"
                          onClick={() => handleLocationChange(value.location)}
                        >
                          {value.location}
                        </span>
                        <hr />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="relative w-full">
              <div
                className="bg-primary w-full flex justify-between items-center rounded-[20px] py-2 px-4 gap-x-1 relative cursor-pointer"
                onClick={() => setOpenProperty(!openProperty)}
              >
                <Image width={24} height={20} src={estate} alt="property" />
                <span className="font-semibold text-secondary text-base">
                  Property type
                </span>
                <Image
                  width={40}
                  height={34}
                  src={expand}
                  alt="open"
                  className="hover:cursor-pointer"
                />
              </div>
              {openProperty && (
                <div className="absolute top-12 left-0 right-0 flex justify-center items-center w-full h-[30vh] overflow-hidden">
                  <div className="w-full h-full overflow-y-auto">
                    {propertyFilter.map((value) => (
                      <div
                        className="bg-primary py-1 drop-shadow-lg flex flex-col w-full text-center"
                        key={value.id}
                      >
                        <span
                          className="cursor-pointer"
                          onClick={() => handlePropertyChange(value.property)}
                        >
                          {value.property}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="relative w-full">
              <div
                className="bg-primary w-full flex justify-between items-center rounded-[20px] py-2 px-4 gap-x-1 relative cursor-pointer"
                onClick={() => setOpenBedroom(!openBedroom)}
              >
                <Image width={24} height={20} src={bed} alt="bedroom" />
                <span className="font-semibold text-secondary text-base">
                  Bedroom
                </span>
                <Image
                  width={40}
                  height={34}
                  src={expand}
                  alt="open"
                  className="hover:cursor-pointer"
                />
              </div>{" "}
              {openBedroom && (
                <div className="absolute top-12 left-0 right-0 flex justify-center items-center w-full h-[30vh] overflow-hidden">
                  <div className="w-full h-full overflow-y-auto">
                    {bedroomFilter.map((value) => (
                      <div
                        className="bg-primary py-1 drop-shadow-lg flex flex-col w-full text-center"
                        key={value.id}
                      >
                        <span
                          className="cursor-pointer"
                          onClick={() => handleBedroomChange(value.bedroom)}
                        >
                          {value.bedroom}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="relative w-full">
              <div
                className="bg-primary w-full flex justify-between items-center rounded-[20px] py-2 px-4 gap-x-1 relative cursor-pointer"
                onClick={() => setOpenMinPrice(!openMinPrice)}
              >
                <Image width={24} height={20} src={price} alt="price" />
                <span className="font-semibold text-secondary text-base">
                  Minimum price
                </span>
                <Image
                  width={40}
                  height={34}
                  src={expand}
                  alt="open"
                  className="hover:cursor-pointer"
                />
              </div>{" "}
              {openMinPrice && (
                <div className="absolute top-12 left-0 right-0 flex justify-center items-center w-full h-[30vh] overflow-hidden">
                  <div className="w-full h-full overflow-y-auto">
                    {minPriceFilter.map((value) => (
                      <div
                        className="bg-primary py-1 drop-shadow-lg flex flex-col w-full text-center"
                        key={value.id}
                      >
                        <span
                          className="cursor-pointer"
                          onClick={() => handleMinPriceChange(value.value)}
                        >
                          {value.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative w-full">
              <div
                className="bg-primary w-full flex items-center justify-between rounded-[20px] py-2 px-4 gap-x-1 relative cursor-pointer"
                onClick={() => setOpenMaxPrice(!openMaxPrice)}
              >
                <Image width={24} height={20} src={price} alt="price" />
                <span className="font-semibold text-secondary text-base">
                  Maximum price
                </span>
                <Image
                  width={40}
                  height={34}
                  src={expand}
                  alt="open"
                  className="hover:cursor-pointer"
                />
              </div>
              {openMaxPrice && (
                <div className="absolute top-12 left-0 right-0 flex justify-center items-center w-full h-[30vh] overflow-hidden">
                  <div className="w-full h-full overflow-y-auto">
                    {maxPriceFilter.map((value) => (
                      <div
                        className="bg-primary py-1 drop-shadow-lg flex flex-col w-full text-center"
                        key={value.id}
                      >
                        <span
                          className="cursor-pointer"
                          onClick={() => handleMaxPriceChange(value.value)}
                        >
                          {value.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
