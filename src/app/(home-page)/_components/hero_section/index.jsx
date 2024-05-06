import { Button } from "@/components/ui";

import React from "react";

const HeroSection = () => {
  return (
    <>
      <div
        className="overflow-hidden xl:p-36 p-10 md:p-20 bg-center h-[40rem] md:h-[60rem] bg-no-repeat bg-cover relative md:pb-0 xl:pb-0"
        style={{ backgroundImage: 'url("/bg.png")' }}
      >
        <div className="mt-4">
          <div className="text-white items-center justify-center flex pt-[5rem] flex-col space-y-20 md:space-y-40 transition-all ease-out duration-1000 ">
            <div className="flex items-center justify-center flex-col space-y-20 md:space-y-40 w-full">
              <div className="bg-primary p-4 flex items-center justify-center space-y-10">
                <div className="text-base md:text-xl px-4 py-10 xl:text-3xl text-center bg-secondary w-[100%] uppercase font-medium ">
                  Nigeria&apos;s <br />
                  <span className="font-extrabold">Number one</span> <br />
                  <span>real estate company</span>
                </div>
              </div>
              <div className="bg-primary my-8 bg-opacity-35 p-3 md:p-6 flex w-full">
                <input
                  type="text"
                  placeholder="Type a city name e.g Maitama"
                  className="w-full bg-primary p-4 outline-none text-black"
                />
                <Button
                  backgroundColor="transparent"
                  textColor="#1f22b8"
                  border="none"
                  className={"md:p-4 p-2 font-medium md:text-xl"}>Search</Button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
