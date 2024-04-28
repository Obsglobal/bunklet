
import React from "react";
import { dropdown } from '../../../../constants/images'

const FAQS = () => {
  return (
    <div className="md:px-24 px-6 py-10">
     <span className="text-[40px] font-semibold">
         Frequently Asked Questions
       </span>

      <div className="m-2 space-y-2">
        <details class="group text-darkgrey">
          <summary class="flex cursor-pointer list-none items-center md:p-8 p-4 justify-between font-medium ">
            <span className="text-primary md:text-[18px] font-medium text-left w-full">
            What are the process for booking an apartment?            </span>

            <img
              src={dropdown}
              className="h-2 w-3 transition-all ease-out duration-500 group-open:-rotate-180"
            />
          </summary>
          <p class="group-open:animate-fade_in md:text-base text-sm  md:px-8 px-4 p-3 text-start text-primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </details>
        <details class="group text-darkgrey">
          <summary class="flex cursor-pointer list-none items-center md:p-8 p-4 justify-between font-medium ">
            <span className="text-primary md:text-[18px] font-medium text-left w-full">
            What are the process for booking an apartment?
            </span>

            <img
              src={dropdown}
              className="h-2 w-3 transition-all duration-500 group-open:-rotate-180"
            />
          </summary>
          <p class="group-open:animate-fade_in md:text-base text-sm  md:px-8 px-4 p-3 text-start text-primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </details>
        <details class="group text-darkgrey">
          <summary class="flex cursor-pointer list-none items-center md:p-8 p-4 justify-between font-medium ">
            <span className="text-primary md:text-[18px] font-medium text-left w-full">
            What are the process for booking an apartment?
            </span>

            <img
              src={dropdown}
              className="h-2 w-3 transition-all duration-500 group-open:-rotate-180"
            />
          </summary>
          <p class="group-open:animate-fade_in md:text-base text-sm  md:px-8 px-4 p-3 text-start text-primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </details>
      </div>
    </div>
  );
};

export default FAQS;
