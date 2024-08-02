import React from "react";
import { Button } from "..";
import { IoSearch } from "react-icons/io5";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const Filter = () => {
  return (
    <div className={` ${urbanist.className}`}>
      <div>
        <div className="bg-[#dddddd] rounded-[20px] rounded-bl-none rounded-br-none bg-opacity-60">
          <div className="py-4 flex gap-x-2 items-center justify-between px-3">
          <input type="text" className="rounded-[20px] px-4 py-2 w-full" placeholder="Search for property" />
          <Button
            textColor="#ffffff"
            className={
              "md:p-2 py-2 w-fit text-nowrap flex items-center gap-x-2 justify-center text-sm font-medium md:text-xl"
            }
          >
            <IoSearch />
            <span>Find property</span>
          </Button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Filter;
