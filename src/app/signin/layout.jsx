import Link from "next/link";
import React from "react";

const Container = ({ children }) => {
  return (
    <div className="overflow-hidden flex flex-col w-full">
      <Link href='/' className="ml-10 py-4">
        <img src="/obsglobal.png" className="md:w-[100px] w-[80px]" alt="logo" />
      </Link>
      <div className="flex justify-center overflow-auto md:justify-start items-center md:items-start h-screen md:h-full w-full">
        {children}
        <div
          style={{ backgroundImage: 'url("/signup.svg")' }}
          className="fixed top-0 bottom-0 right-0 w-1/2 hidden md:block"
        />
      </div>
    </div>
  );
};

export default Container;
