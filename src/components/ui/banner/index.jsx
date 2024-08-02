import React from "react";
import { Button } from "..";

const Banner = () => {
  return (
    <div className="bg-secondary lg:h-[332px] flex items-center justify-center mb-40">
      <div className="flex w-full items-center justify-between px-6 lg:px-24 py-4">
        <div className="flex flex-col gap-y-2 items-start justify-center ">
          <span className="text-primary text-4xl font-semibold">
            Buy your Dream Property Today
          </span>
          <span className="text-[#C6C6C7D1] font-normal text-base w-3/4">
            Explore our range of beautiful properties with the addition of
            separate accommodation suitable for you. Explore our range of
            beautiful properties with the addition of separate accommodation
            suitable for you. Explore our range of beautiful properties with the
            addition of separate accommodation suitable for you.
          </span>
        </div>

        <Button backgroundColor="#ffffff" textColor="#1A2690" className='text-nowrap w-fit'>
          View properties
        </Button>
      </div>
    </div>
  );
};

export default Banner;
