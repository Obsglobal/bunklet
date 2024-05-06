import { about, about2 } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUs = () => {
  return (
    <div className="lg:px-24 px-6 mt-[15rem] md:mt-[20rem] lg:mt-[30rem]">
      <div className="flex md:flex-row flex-col items-center md:gap-16 lg:gap-0 justify-between w-full">
        <div className="flex flex-col w-full lg:w-[40%] space-y-4">
          <span className="capitalize font-semibold text-base md:text-2xl lg:text-4xl">
            about us
          </span>
          <span className="text-base">
            lorem ipsum dolor sit amet consectetur. Turpis magna lorem et ut ut
            accumsan. Est felis ultrices risus ante ultricies nisi diam
            adipiscing erat. Quis elementum suspendisse semper et ut. Dictumst
            urna semper sit accumsan enim a. Ultricies elementum convallis massa
            urna fames sit aliquam nunc. Ac felis scelerisque morbi eu risus
            malesuada mauris donec. Non phasellus nulla non eget sed vestibulum
            at ac sapien. Non habitant aliquet neque ac. At eu auctor bibendum
            magna elementum. Euismod purus ut dolor molestie magna tristique
            nulla. Sed id elit leo blandit netus id. Iaculis laoreet aliquam
            mattis elementum tur.
          </span>
          <Link href={"/about-us"} className="text-secondary">
            Read more
          </Link>
        </div>
        <div className="lg:mr-10 mt-10 md:mt-0 relative md:ml-0 mr-0 ml-4">
          <Image
            src={about}
            width={600}
            height={400}
            alt="about"
            className="z-50"
          />
          <Image
            src={about2}
            width={200}
            height={100}
            alt="about"
            className="absolute md:top-[-2.5rem] top-[-1rem]  md:left-[-2.5rem] left-[-1rem] w-1/2 h-full -z-50"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
