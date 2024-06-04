"use client";
import React, { useState } from "react";
import Link from "next/link";
import Container from "../layout";
import { setRole } from "@/features/roleSlice";
import { useAppDispatch } from "@/lib/hooks";

const CategorySelection = () => {
  const [userRole, setUserRole] = useState("");

  const dispatch = useAppDispatch();

  const handleRole = (value) => {
    dispatch(setRole(value));
  };
  return (
    <Container>
      <div className="flex flex-col h-screen justify-center space-y-6 w-1/2 items-center">
        <Link
          href="/signup/form"
          onClick={() => handleRole("user")}
          className="hover:bg-lightblue border border-[#4361EE] text-lightblue transition-all ease-in hover:text-primary w-full px-4 md:w-[40%] py-4 md:text-lg font-open_sans rounded-[5px] text-center"
        >
          User
        </Link>
        <Link
          href="/signup/form"
          onClick={() => handleRole("agent")}
          className="hover:bg-lightblue border border-[#4361EE] text-lightblue transition-all ease-in hover:text-primary w-full px-4 md:w-[40%] py-4 md:text-lg font-open_sans rounded-[5px] text-center"
        >
          Landlord/Agent
        </Link>
      </div>
    </Container>
  );
};

export default CategorySelection;
