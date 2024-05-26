import Link from "next/link";
import React from "react";

const Container = ({children}) => {
  return (
    <div className="overflow-hidden w-full">
      <Link href='/' className="fixed top-0 py-16 px-10">
        <img src="/obsglobal.png" className="md:w-[200px] w-[100px]" alt="logo" />
      </Link>
      <div className="flex justify-center md:justify-start items-center md:items-start h-screen md:h-full w-full">
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
