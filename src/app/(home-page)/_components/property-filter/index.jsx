"use client";
import { RiArrowDropDownLine } from "react-icons/ri";
import React, { useState } from "react";

const PropertyFilter = () => {
    const [showFilter, setShowFilter] = useState(false);

    const handleToggleFilter = () => {
      setShowFilter(!showFilter);
    };
  
  return (
    <div>
        <div className=" grid grid-cols-5 gap-x-10">
            <div className=" flex bg-primary gap-x-2 items-center text-[#181818]">
                <span>Category</span>
                <RiArrowDropDownLine size={30} className="hover:cursor-pointer" onClick={handleToggleFilter} />
            </div>
            <div className="flex bg-primary gap-x-2 items-center text-[#181818]">
                <span>Property type</span>
                <RiArrowDropDownLine size={30} className="hover:cursor-pointer" onClick={handleToggleFilter} />
            </div>
            <div className="flex bg-primary gap-x-2 items-center p-2 justify-center text-[#181818]">
                <span>Bedrooms</span>
                <RiArrowDropDownLine size={30} className="hover:cursor-pointer" onClick={handleToggleFilter} />
            </div>
            <div className="flex bg-primary gap-x-2 items-center text-[#181818]">
                <span>Min price</span>
                <RiArrowDropDownLine size={30} className="hover:cursor-pointer" onClick={handleToggleFilter} />
            </div>
            <div className="flex bg-primary gap-x-2 items-center text-[#181818]">
                <span>Max price</span>
                <RiArrowDropDownLine size={30} className="hover:cursor-pointer" onClick={handleToggleFilter} />
            </div>
           

        </div>
    </div>
  )
}

export default PropertyFilter