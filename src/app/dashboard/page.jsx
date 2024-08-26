"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import React, { useEffect } from "react";
import PropertyUpload from "./pages/property-upload";
import { setActiveLink } from "@/features/eventSlice";

const Dashboard = () => {
  const activeLink = useAppSelector((state) => state.event.activeLink);
  // const dispatch = useAppDispatch();
  // const handleDashboard = () => {
  //   dispatch(setActiveLink("dashboard"));
  // };
  // useEffect(() => {
  //   handleDashboard();
  // }, []);

  return (
    <div>
      {activeLink === "upload" && <PropertyUpload />}
      {activeLink === "dashboard" && <Dashboard />}
    </div>
  );
};

export default Dashboard;
