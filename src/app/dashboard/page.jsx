"use client";
import { useAppSelector } from "@/lib/hooks";
import React, { useEffect } from "react";
import PropertyUpload from "./pages/property-upload";
import DashboardHome from "./pages/home";

const Dashboard = () => {
  const activeLink = useAppSelector((state) => state.event.activeLink);

  return (
    <div>
      {(() => {
        switch (activeLink) {
          case "upload":
            return <PropertyUpload />;
          case "dashboard":
            return <DashboardHome />;
          default:
            return null;
        }
      })()}
    </div>
  );
};

export default Dashboard;