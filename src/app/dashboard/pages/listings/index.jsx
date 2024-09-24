import React, { useEffect, useState } from "react";
import UploadedProperty from "./_components/card";

const PropertyListings = () => {
  const [properties, setProperties] = useState([]);
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/properties/agent-properties/`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        setProperties(data?.results);
        console.log(data?.results);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };
    fetchProperties();
  }, [token]);

  return (
    <div>
      <div className="grid grid-cols-4 gap-3">
        {properties.map((property) => (
          <UploadedProperty property={property} key={property?.id} />
        ))}
      </div>
    </div>
  );
};

export default PropertyListings;
