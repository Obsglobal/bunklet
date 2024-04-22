"use client";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuX } from "react-icons/lu";
import React, { useState } from "react";
import { Button } from "..";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <div className="flex items-center px-6 lg:px-16 xl:px-24 justify-between h-16 bg-primary text-black md:h-24 fixed md:top-0 top-0 z-50 bg-none w-full transition-all ease-out duration-300 xl:gap-0 md:gap-8 animate-fade_in">
        <Link href="/" className="text-xl md:text-2xl">
          <img
            src="/obsglobal.png"
            alt="obsglobal"
            className="md:w-full w-24"
          />
        </Link>
        <div className="md:flex hidden w-full md:px-0 px-6 xl:px-4 justify-center items-center md:ml-12 font-medium text-[#1f22b8] text-lg space-x-10">
          <Link href={"/for-rent"}>For Rent</Link>
          <Link href={"/for-sale"}>For Sale</Link>
          <Link href={"/faqs"}>FAQ's</Link>
          <Link href={"/about-us"}>About us</Link>
          <Link href={"/contact-us"}>Contact us</Link>
        </div>

        <Link
          href="/signout"
          className="items-center md:gap-4 xl:gap-8 hidden md:flex mx-10"
        >
          <Button
            padding="10px 25px"
            backgroundColor="transparent"
            className="text-nowrap hover:!bg-secondary hover:!text-primary transition-all ease-in"
            textColor="#1f22b8">Sign up</Button>
          
        </Link>
        <Link
          href="/signin"
          className="items-center md:gap-4 xl:gap-8 hidden md:flex mx-10"
        >
          <Button
            padding="10px 25px"
            className="text-nowrap hover:!bg-primary hover:!text-secondary hover:!border-secondary transition-all ease-in"
            textColor="#ffffff">Sign in</Button>
          
        </Link>

        <div className="md:hidden block cursor-pointer">
          <GiHamburgerMenu
            color="#1f22b8"
            fontSize={27}
            onClick={() => setToggleMenu(true)}
          />
        </div>
      </div>
      {toggleMenu && (
        <div className="fixed top-0 left-0 w-full bg-primary transition-all duration-150 flex flex-col z-50 justify-center items-center animate-slideBottom overflow-none h-full">
          <LuX
            className="text-2xl absolute top-5 right-6 cursor-pointer"
            color="#1f22b8"
            fontSize={27}
            onClick={() => setToggleMenu(false)}
          />
          <ul className="list-none w-full px-4">
            <Link href="/" className="text-white ml-6">
              <span className="uppercase text-secondary tracking-wider text-xl md:text-3xl font-semibold">
                Obsglobal
              </span>
            </Link>
            <hr className="z-20- h-6 my-8 text-[#395d88] w-[70%] mx-auto" />
            <li className="m-6 mt-12 cursor-pointer text-primary text-xl">
              <div className="flex justify-between items-center">
                <Link
                  href="/market-place"
                  className="text-secondary font-semibold"
                >
                  For Sale
                </Link>
              </div>
            </li>
            <li className="m-6 mt-12 cursor-pointer text-primary text-xl">
              <div className="flex justify-between items-center">
                <Link href="/" className="text-secondary font-semibold">
                  For Rent
                </Link>
              </div>
            </li>
            <li className="m-6 mt-12 cursor-pointer text-primary text-xl">
              <div className="flex justify-between items-center">
                <Link href="/" className="text-secondary font-semibold">
                  About Us
                </Link>
              </div>
            </li>
          </ul>
          <div className="flex items-center space-x-10 absolute bottom-0 my-6">
            <Link href="/">
              <Button
                padding="10px 25px"
                className="text-nowrap hover:!bg-primary hover:!text-secondary hover:!border-secondary transition-all ease-in"
                textColor="#ffffff">Sign in</Button>
              
            </Link>
            <Link
              href="/signin"
              className="items-center md:gap-4 xl:gap-8 hidden md:flex mx-10"
            >
              <Button
                padding="10px 25px"
                className="text-nowrap hover:!bg-primary hover:!text-secondary hover:!border-secondary transition-all ease-in"
                textColor="#ffffff">Sign in</Button>
              
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
