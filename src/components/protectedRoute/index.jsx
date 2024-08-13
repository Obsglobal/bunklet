"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    setToken(storedToken);
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized && !token) {
      router.replace("/signin");
    }
  }, [token, initialized]);

  if (!token) {
    return null;
  }

  return children;
};

export default ProtectedRoute;