"use client";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuX } from "react-icons/lu";
import React, { useEffect, useState } from "react";
import { Button } from "..";
import Image from "next/image";
import { profile } from "@/constants/images";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  // const [token, setToken] = useState(null);
  // const [initialized, setInitialized] = useState(false);

  // useEffect(() => {
  //   const storedToken = localStorage.getItem("accessToken");
  //   setToken(storedToken);
  //   setInitialized(true);
  // }, []);

  return (
    <>
      <div className="flex items-center px-6 lg:px-16 xl:px-24 justify-between h-16 bg-primary text-black md:h-18 lg:h-24 fixed md:top-0 top-0 z-[99] bg-none w-full transition-all ease-out duration-300 animate-fade_in">
        <Link href="/" className="uppercase text-[#2D419F] text-2xl font-bold">
          Bunklet
        </Link>
        <div className="lg:flex hidden w-full md:px-0 px-6 xl:px-4 justify-start items-center md:ml-24 font-semibold text-[#4361EE] text-lg space-x-10">
          <Link href={"/for-rent"}>For Rent</Link>
          <Link href={"/for-sale"}>For Sale</Link>
          <Link href={"/about-us"}>About us</Link>
          <Link href={"/faqs"}>FAQ&#39;s</Link>
          <Link href={"/contact-us"}>Contact us</Link>
        </div>
          <div className="flex pl-3 gap-x-3">
            <Link href="/signup">
              <Button backgroundColor="transparent" textColor="#4361EE">Sign up</Button>
            </Link>
            <Link href="/signin">
              <Button>Sign in</Button>
            </Link>
            {/* <Link
              href={token ? "/dashboard" : "/signin"}
              className="items-center w-full text-nowrap md:gap-x-6 text-[#4361EE] hidden lg:flex mx-0"
            >
              <Image
                src={profile}
                width={48}
                height={48}
                className="rounded-[50%]"
              />
              <span>My Dashboard</span>
            </Link> */}
          </div>

        <div className="lg:hidden block cursor-pointer">
          <GiHamburgerMenu
            color="#1f22b8"
            fontSize={27}
            onClick={() => setToggleMenu(true)}
          />
        </div>
      </div>
      {toggleMenu && (
        <div className="fixed overflow-hidden top-0 left-0 w-full bg-primary transition-all duration-150 flex flex-col z-50 justify-center items-center animate-slideBottom overflow-none h-full">
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
                <Link href="/for-sale" className="text-secondary font-semibold">
                  For Sale
                </Link>
              </div>
            </li>
            <li className="m-6 mt-12 cursor-pointer text-primary text-xl">
              <div className="flex justify-between items-center">
                <Link href="/for-rent" className="text-secondary font-semibold">
                  For Rent
                </Link>
              </div>
            </li>
            <li className="m-6 mt-12 cursor-pointer text-primary text-xl">
              <div className="flex justify-between items-center">
                <Link href="/about-us" className="text-secondary font-semibold">
                  About Us
                </Link>
              </div>
            </li>
          </ul>
          <div className="flex items-center space-x-10 absolute bottom-0 my-6">
            <Link href="/signup">
              <Button
                padding="10px 25px"
                className="text-nowrap hover:!bg-primary hover:!text-secondary hover:!border-secondary transition-all ease-in"
                textColor="#ffffff"
              >
                Sign up
              </Button>
            </Link>
            <Link
              href="/signin"
              className="items-center md:gap-4 xl:gap-8 hidden md:flex mx-10"
            >
              <Button
                padding="10px 25px"
                className="text-nowrap hover:!bg-primary hover:!text-secondary hover:!border-secondary transition-all ease-in"
                textColor="#ffffff"
              >
                Sign in
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
