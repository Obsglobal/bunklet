import { Button } from "@/components/ui";

import React from "react";

const HeroSection = () => {
  return (
    <>
      <div
        className="overflow-hidden xl:p-36 p-10 md:p-20 bg-center h-[40rem] md:h-[60rem] bg-no-repeat bg-cover relative md:pb-0 xl:pb-0"
        style={{ backgroundImage: 'url("/bg.png")' }}
      >
        <div className="mt-4 flex justify-center items-center min-h-[60vh]">
          <div className="text-white flex gap-4 items-center justify-center flex-col w-full">
            <span className="xl:text-6xl  md:text-3xl text-xl font-bold">About Us</span>
            <span className="xl:text-3xl md:text-xl text-base text-center font-semibold">Bringing you closer to your next property</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
