import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-secondary text-primary py-12 md:py-10">
      <div className="flex flex-col">
        <div className="flex lg:flex-row flex-col items-start py-10 justify-between lg:gap-0 gap-10 px-6 lg:px-24">
          <div className="flex w-full lg:w-[30%] gap-2 flex-col">
            <span className="uppercase font-normal text-xl">bunklet</span>
            <span className="font-medium text-sm lg:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ornare cursus sed nunc eget dictum Sed ornare cursus sed nunc eget
              dictumd nunc eget dictum Sed ornare cursus sed nunc eget dictum .
            </span>
          </div>
          <div className="flex flex-col font-medium gap-2 items-start">
            <span className="text-xl">Quick Links</span>
            <div className="flex flex-col gap-y-3 items-start text-sm">
              <Link href="/">Home</Link>
              <Link href="/for-sale">For Sale</Link>
              <Link href="/for-rent">For Rent</Link>
              <Link href="/request">Request</Link>
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col font-medium gap-2 items-start">
            <span className="text-xl">Community</span>
            <div className="flex flex-col gap-y-3 items-start text-sm">
              <Link href="/">Terms and Conditions</Link>
              <Link href="/for-sale">Privacy Policy</Link>
              <Link href="/for-rent">Contact Us</Link>
             
            </div>
          </div>
          <div className="flex flex-col font-medium gap-2 items-start">
            <span className="text-xl">Our Socials</span>
            <div className="flex text-sm gap-y-3 items-start">
              <Link href="/">Facebook</Link>
              <Link href="/">Instagram</Link>
              <Link href="/">X</Link>
            </div>
          </div>
        </div>
      </div>
      <span className="px-7 md:px-6 text-sm lg:px-24">Copyright @BUNKLET 2024</span>
    </div>
  );
};

export default Footer;
