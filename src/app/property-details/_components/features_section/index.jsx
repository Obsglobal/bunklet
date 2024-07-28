"use client";
import { Button } from "@/components/ui";
import RequestForm from "@/components/ui/request-form";
import { propertyDetails } from "@/constants";
import { location, tickcircle } from "@/constants/images";
import Image from "next/image";
import React, { useState } from "react";

const Features = () => {
  const [showRequestForm, setShowRequestForm] = useState(false);
  const handleRequestForm = () => {
    setShowRequestForm(!showRequestForm);
  };
  const closeRequestForm = () => {
    setShowRequestForm(false);
  };
  return (
    <div className="relative">
      <div className="md:px-20 px-6 py-10 text-darkgrey ">
        {propertyDetails.map((property) => (
          <div
            className="flex md:flex-row flex-col justify-between w-full"
            key={property.id}
          >
            <div className="flex md:w-3/4 gap-3 flex-col" key={property.id}>
              <div className="flex flex-col space-y-3 ">
                <span className="bg-[#EE6C43] px-3 py-2 text-primary w-fit font-semibold">
                  {property.status}
                </span>

                <span className="md:text-2xl text-[20px] uppercase">
                  {property.title}
                </span>
                <div className="flex items-center gap-3">
                  <Image src={location} width={20} height={10} />
                  <span className="md:text-lg">{property.location}</span>
                </div>
              </div>
              <div className="flex space-y-3 flex-col">
                <span className="text-lg md:text-[20px] font-semibold">
                  Key Features
                </span>
                <div>
                  <div className="space-y-2 grid grid-cols-2">
                    {property.features.map((feature) => (
                      <div className="flex items-center gap-2" key={feature.id}>
                        <Image src={tickcircle} width={20} height={10} />
                        <span className="md:text-lg font-normal">
                          {feature.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-lg md:text-[20px] font-semibold">
                  Description
                </span>
                <span className="md:w-1/2 lg:w-3/4 md:text-lg">
                  {property.description}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="md:text-[20px] text-lg font-semibold">
                  Other Information
                </span>
                <span className="md:text-lg font-normal">
                  Inspection fee: {property.inspection_fee}
                </span>
                <span className="md:text-lg font-normal">
                  Agent fee: {property.agent_fee}
                </span>
                <div className="bg-[#D9D9D9] py-4 my-3 w-[30%] md:block hidden" />
              </div>
            </div>
            <div className="flex relative space-y-4 md:py-3 w-[300px] md:px-4 flex-col">
              <span className="text-[#EE6C43] font=semibold text-3xl">
                {property.price}
              </span>
              <Button
                borderRadius="0"
                width=""
                padding="15px"
                className="font-semibold"
                onClick={handleRequestForm}
              >
                Request a tour
              </Button>
              <div className="flex flex-col border space-y-3 py-3 px-4 border-[#D8D8D8]">
                <div className="flex items-center gap-x-4">
                  <Image
                    src="/member.svg"
                    width={70}
                    height={70}
                    className="rounded-[50%]"
                  />
                  <div className="flex flex-col">
                    <span>Property listed by</span>
                    <span className=" font-medium text-lg">
                      {property.agent}
                    </span>
                  </div>
                </div>
                <Button
                  borderRadius="0"
                  width=""
                  padding="15px"
                  backgroundColor="transparent"
                  textColor="#4361EE"
                  className="font-semibold"
                >
                  Contact Agent
                </Button>
              </div>
              {showRequestForm && (
                <div className="absolute shadow-2xl bg-white w-[500px] h-full z-20 top-[0%] bottom-0 left-[-60%]">
                  <RequestForm
                    closeForm={closeRequestForm}
                    property={property}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
