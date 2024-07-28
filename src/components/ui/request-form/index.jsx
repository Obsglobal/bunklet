"use client"
import React, { useState } from "react";
import { Button } from "..";
import Image from "next/image";

const RequestForm = ({ property, closeForm }) => {
  const [details, setDetails] = useState({
    fullName: "",
    email: "",
    phone: ""
  })
  return (
    <div className="relative w-full px-5 py-3">
      <span onClick={closeForm} className="absolute right-10 md:text-xl cursor-pointer">
        X
      </span>
      <div className="flex gap-y-2 flex-col py-6">
      <span className="md:text-xl text-base text-center py-4 font-semibold">Request a tour</span>
        <div className="flex gap-x-4 items-center">
          <Image
            width={200}
            height={300}
            className="rounded-[20px]"
            src="/property-details.svg"
            alt=""
          />
          <div className="flex gap-y-1 flex-col">
            <span className="md:text-xl text-[20px] uppercase">
              {property?.title}
            </span>
            <span>{property?.location}</span>
            <span className="text-[#EE6C43]">{property?.price}</span>
            <div className="flex justify-between space-x-2">
              {property?.details.map((detail, i) => (
                <span className="shadow-xl p-1" key={i}>{detail}</span>
              ))}
            </div>
          </div>
        </div>
        <span className="text-darkgrey">
          Note: Inspecction fee vary according to distance to property
        </span>
        <div className="flex gap-y-2 flex-col">
          <div className="flex gap-y-1 flex-col">
            <label htmlFor="name">Name (first and last)</label>
            <input type="text" className="px-4 py-2 border border-darkgrey" placeholder="John Doe" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone">Phone number</label>
            <input type="tel" className="px-4 py-2 border border-darkgrey" placeholder="00000000" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Phone number</label>
            <input type="email" className="px-4 py-2 border border-darkgrey" placeholder="email1234@gmaail.com" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Message</label>
            <textarea maxLength={64} className="px-4 py-2 border border-darkgrey" type="email" placeholder="0/64" />
          </div>
          <Button className='w-full py-2'>Send</Button>
        </div>
      </div>
    </div>
  );
};

export default RequestForm;
