"use client";
import React, { useState } from "react";
import { sideLinks } from "../../../../constants";
import Link from "next/link";
import Image from "next/image";
import { logoutIcon } from "@/constants/images";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/hooks";
import { setActiveLink } from "@/features/eventSlice";

const Sidebar = () => {
  const { push } = useRouter();
  const dispatch = useAppDispatch()

  const [activeId, setActiveId] = useState(0);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    push("/signin");
  };
  const handleClick = (link) => {
    dispatch(setActiveLink(link))  
  };

  return (
    <>
      <div className="w-full flex-col gap-y-6 hidden md:flex">
        <div className="flex w-full justify-center pt-8">
          <span className="text-primary text-2xl font-semibold">Bunklet</span>
        </div>
        <div className="w-full bg-primary bg-opacity-25 p-[0.5px]" />

        <div className="mr-3 flex flex-col gap-y-8 px-2">
          {sideLinks.map((link) => (
            <Link
              href={`#`}
              className={`mx-auto flex w-full items-center gap-x-6 rounded-[5px] px-3 py-4 transition-all ease-in hover:cursor-pointer hover:bg-primary hover:bg-opacity-20 ${
                link.id === activeId && "bg-primary bg-opacity-20"
              }`}
              key={link.id}
              onClick={() => {
                setActiveId(link.id);
                handleClick(link.to);
              }}
            >
              <Image src={link.icon} width={30} height={20} alt="icon" />
              <span className="text-base font-semibold text-primary">
                {link.link}
              </span>
            </Link>
          ))}
          <span
            onClick={handleLogout}
            className="mx-auto text-primary hidden  font-medium lg:flex w-full items-center gap-x-3 rounded-[5px] px-3 py-2 transition-all ease-in hover:cursor-pointer hover:bg-primary hover:bg-opacity-20"
          >
            <Image src={logoutIcon} width={30} height={50} alt="logout" />
            Log out
          </span>
        </div>
      </div>
      <div className="bottom-0 flex items-center w-full md:hidden">
        {sideLinks.map((link) => (
          <Link
            href={`#`}
            className={`mx-auto flex flex-col text-sm w-full items-center gap-x-3 rounded-[5px] px-3 py-4 transition-all ease-in hover:cursor-pointer hover:bg-primary hover:bg-opacity-20 ${
              link.id === activeId && "bg-primary bg-opacity-20"
            }`}
            key={link.id}
            onClick={() => {
              setActiveId(link.id);
              handleReset();
            }}
          >
            <Image width={30} height={30} src={link.icon} alt="icon" />
            <span className="font-medium text-primary">{link.link}</span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
