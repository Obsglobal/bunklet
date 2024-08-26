"use client";
import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { profile } from "@/constants/images";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div className="flex w-full">
      <div className="relative md:ml-16 ml-5 flex w-1/2 items-center md:justify-center">
        <div className="flex items-center gap-x-1 md:text-2xl text-xl">
          <span className="font-normal text-[#181818] ">Good day,</span>
          <span>{user.first_name}</span>
        </div>

        <div className="flex md:hidden items-center gap-x-2">
          <div className="flex flex-col gap-y-1">
            <div className="flex gap-x-1 text-sm">
              <span className="text-sm font-normal text-[#181818] md:text-base">
                Good day,
              </span>
              <span>{user.first_name}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="ml-auto relative flex w-fit items-center gap-x-4 lg:gap-x-10 px-8">
        <div className="md:flex hidden items-center gap-x-4">
          <div className="flex flex-col gap-y-1 relative">
            <div
              className="items-center w-full text-nowrap md:gap-x-6 text-[#4361EE] hidden lg:flex mx-0 cursor-pointer"
              onClick={handleDropdown}
            >
              <Image
                src={profile}
                width={48}
                height={48}
                className="rounded-[50%]"
              />
              <span>My Dashboard</span>
            </div>
            {showDropdown && (
              <div className="absolute bg-primary w-full top-[5rem]">
                <div className="flex font-medium rounded-[20px] flex-col gap-y-2 py-3 justify-center items-center">
                  <span className="cursor-pointer">My Profile</span>
                  <hr color="#eee" className="w-full" />
                  <span className="cursor-pointer">Listings</span>
                  <hr color="#eee" className="w-full" />
                  <span className="cursor-pointer">Favorites</span>
                  <hr color="#eee" className="w-full" />
                  <span className="cursor-pointer">Account</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
