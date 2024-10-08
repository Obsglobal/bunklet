import Link from "next/link";
import React from "react";
import StoreProvider from "../StoreProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Container = ({children}) => {
  return (
    <StoreProvider>
      <ToastContainer position="bottom-right" />
    <div className="overflow-hidden flex flex-col w-full">
      
      <div className="flex justify-center md:justify-start items-center md:items-start h-[120vh] overflow-auto
       md:h-full w-full">
      {children}
        <div
          style={{ backgroundImage: 'url("/signup.svg")' }}
          className="fixed top-0 bottom-0 right-0 w-1/2 hidden md:block"
        />
      </div>
    </div>
    </StoreProvider>
  );
};

export default Container;
