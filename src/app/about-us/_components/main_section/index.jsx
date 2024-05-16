import { home } from "@/constants/images";
import Image from "next/image";
import React from "react";

const MainSection = () => {
  return (
    <div className="xl:px-24 px-6 py-10">
      <div className="flex flex-col">
        <span className="font-semibold md:text-xl text-lg lg:text-2xl">What Is OBXGLOBAL</span>
        <span className="font-normal md:text-base text-sm lg:text-xl">
          orem ipsum dolor sit amet consectetur. Turpis magna lorem et ut ut
          accumsan. Est felis ultrices risus ante ultricies nisi diam adipiscing
          erat. Quis elementum suspendisse semper et ut. Dictumst urna semper
          sit accumsan enim a. Ultricies elementum convallis massa urna fames
          sit aliquam nunc. Ac felis scelerisque morbi eu risus malesuada mauris
          donec. Non phasellus nulla non eget sed vestibulum at ac sapien. Non
          habitant aliquet neque ac. At eu auctor bibendum magna elementum.
          Euismod purus ut dolor molestie magna tristique nulla. Sed id elit leo
          blandit netus id. Iaculis laoreet aliquam mattis elementum tur.orem
          ipsum dolor sit amet consectetur. Turpis magna lorem et ut ut
          accumsan. Est felis ultrices risus ante ultricies nisi diam adipiscing
          erat. Quis elementum suspendisse semper et ut. Dictumst urna semper
          sit accumsan enim a. Ultricies elementum convallis massa urna fames
          sit aliquam nunc. Ac felis scelerisque morbi eu risus malesuada mauris
          donec. Non phasellus nulla non eget sed vestibulum at ac sapien. Non
          habitant aliquet neque ac. At eu auctor bibendum magna elementum.
          Euismod purus ut dolor molestie magna tristique nulla. Sed id elit leo
          blandit netus id. Iaculis laoreet aliquam mattis elementum tur.
        </span>
      </div>

      <div className="flex flex-col py-10">
        <span className="font-semibold md:text-xl text-base lg:text-2xl">How we can help you</span>
        <div className="flex lg:flex-row flex-col items-center py-6 gap-3">
          <div className="flex flex-col gap-2 border border-[#D8D8D8] min-h-[160px] px-3 py-4">
            <div className="flex gap-2 items-center">
              <Image width={30} src={home} alt="landord" />
              <span className="md:text-xl text-base lg:text-2xl">Landord</span>
            </div>
            <span className="text-darkgrey text-sm md:text-lg">
              We will rent your apartment to verified tenants, most of which are
              managers, IT freelancers, Business owners, Entrepreneurs,
              Students, Lecturers, Traders, Doctors, Lawyers, job starters and
              other high profile person.
            </span>
          </div>

          <div className="flex flex-col gap-2 border border-[#D8D8D8] min-h-[160px] px-3 py-4">
            <div className="flex gap-2 items-center">
              <Image width={30} src={home} alt="tenant" />
              <span className="md:text-xl text-base lg:text-2xl">Tenant</span>
            </div>
            <span className="text-darkgrey text-sm md:text-lg">
              Find a temporary home online, we take care of everything until you
              move in and support you during your stay. All details about the
              house will be verifiy before paying and we will ensure what you
              want is the same with what you get.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
