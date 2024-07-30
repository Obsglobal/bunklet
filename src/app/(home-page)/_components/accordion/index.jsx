import React from "react";

const FAQS = () => {
  return (
    <div className="lg:px-24 px-2 py-10">
      <span className="lg:text-2xl md:text-2xl lg:px-0 px-6 text-lg font-semibold">
        Frequently Asked Questions
      </span>

      <div className="space-y-2 pt-4 md:px-0 px-6">
        <details className="group text-darkgrey">
          <summary className="flex cursor-pointer list-none items-center pl-0 p-4 justify-between font-medium ">
            <span className="text-black md:text-[18px] font-medium text-left w-full">
              What are the process for booking an apartment?{" "}
            </span>

            <img
              alt="dropdown"
              src="/dropdown.png"
              className=" w-6 transition-all ease-out duration-500 group-open:-rotate-180"
            />
          </summary>
          <p className="group-open:animate-fade_in md:text-base text-sm px-4 p-3 text-start text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </details>
        <details className="group text-darkgrey">
          <summary className="flex cursor-pointer list-none items-center pl-0 p-4 justify-between font-medium ">
            <span className="text-black md:text-[18px] font-medium text-left w-full">
              What are the process for booking an apartment?
            </span>

            <img
              alt="dropdown"
              src="/dropdown.png"
              className=" w-6 transition-all ease-out duration-500 group-open:-rotate-180"
            />
          </summary>
          <p className="group-open:animate-fade_in md:text-base text-sm  px-4 p-3 text-start text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </details>
        <details className="group text-darkgrey">
          <summary className="flex cursor-pointer list-none items-center pl-0 p-4 justify-between font-medium ">
            <span className="text-black md:text-[18px] font-medium text-left w-full">
              What are the process for booking an apartment?
            </span>

            <img
              alt="dropdown"
              src="/dropdown.png"
              className=" w-6 transition-all ease-out duration-500 group-open:-rotate-180"
            />
          </summary>
          <p className="group-open:animate-fade_in md:text-base text-sm px-4 p-3 text-start text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </details>
        <details className="group text-darkgrey">
          <summary className="flex cursor-pointer list-none items-center pl-0 p-4 justify-between font-medium ">
            <span className="text-black md:text-[18px] font-medium text-left w-full">
              What are the process for booking an apartment?
            </span>

            <img
              alt="dropdown"
              src="/dropdown.png"
              className=" w-6 transition-all ease-out duration-500 group-open:-rotate-180"
            />
          </summary>
          <p className="group-open:animate-fade_in md:text-base text-sm px-4 p-3 text-start text-black">
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
