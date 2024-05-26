"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Container from "../layout";

const CategorySelection = () => {
  const [category, setCategory] = useState("");
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   handleCategory();
  // }, [category]);
  // const handleCategory = () => {
  //   // dispatch(category(category))
  // }
  return (
    <Container>
      <div className="flex flex-col h-screen justify-center space-y-6 w-1/2 items-center">
        <Link
          href="/signup/form"
          onClick={() => setCategory("user")}
          className="hover:bg-lightblue border border-[#4361EE] text-lightblue transition-all ease-in hover:text-primary w-full px-4 md:w-[40%] py-4 md:text-lg font-open_sans rounded-[5px] text-center"
        >
          User
        </Link>
        <Link
          href="/signup/form"
          onClick={() => setCategory("landlord")}
          className="hover:bg-lightblue border border-[#4361EE] text-lightblue transition-all ease-in hover:text-primary w-full px-4 md:w-[40%] py-4 md:text-lg font-open_sans rounded-[5px] text-center"
        >
          Landlord/Agent
        </Link>
      </div>
    </Container>
  );
};

export default CategorySelection;
