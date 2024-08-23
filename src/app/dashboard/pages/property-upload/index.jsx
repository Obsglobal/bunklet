"use client";
import { Button } from "@/components/ui";
import { features } from "@/constants";
import { cancel, dropdow, dropdown2, dropdown2n2 } from "@/constants/images";
import { useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import React, { useState } from "react";

const PropertyUpload = () => {
  const [showPropertyType, setShowPropertyType] = useState(false);
  const [showStateSelect, setShowStateSelect] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const role = useAppSelector((state) => state.role.role);
  console.log(role)
  const lableStyles = `md:text-lg text-base font-semibold text-lightblue`;
  const [step, setStep] = useState(1);
  const [property, setProperty] = useState({
    title: "",
    property_state: "",
    propertyType: "",
    state: "",
    location: "far area",
    address: "",
    description: "",
    price: "",
    denomination: "",
    inspectionFee: "",
    agencyFee: "",
    pricingStructure: "",
    land_size: "",
    bedroom: "",
    bathroom: "",
    toilet: "",
    key_features: [],
    featureDescription: "",
    featureDescriptions: [],
    youtubeLink: "",
  });

  const handleNext = () => {
    const requiredFields = [
      "title",
      "property_state",
      "propertyType",
      "state",
      "location",
      "address",
      "description",
      "price",
      "denomination",
      "inspectionFee",
      "agencyFee",
      "pricingStructure",
      "land_size",
      "bedroom",
      "bathroom",
      "toilet",
    ];

    // const emptyFields = requiredFields.filter(
    //   (field) => property[field] === ""
    // );

    // if (emptyFields.length > 0) {
    //   setErrorMessage(`Please fill all fields`);
    // } else {
    const savedProperty = { ...property };
    localStorage.setItem("savedProperty", JSON.stringify(savedProperty));
    setStep(step + 1);
    // }
  };
  console.log(property);
  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProperty({ ...property, [name]: value });
  };
  const handlePurposeChange = (event) => {
    const { name, value } = event.target;
    setProperty({ ...property, [name]: value });
  };
  const handleFeatureChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setProperty({
        ...property,
        key_features: [...property.key_features, value],
      });
    } else {
      setProperty({
        ...property,
        key_features: property.key_features.filter((f) => f !== value),
      });
    }
  };
  //
  const deleteFeature = (index) => {
    setProperty({
      ...property,
      featureDescriptions: property.featureDescriptions.filter(
        (_, i) => i !== index
      ),
    });
  };

  const handleTypeClick = () => {
    setShowPropertyType(!showPropertyType);
  };
  const handleStateClick = () => {
    setShowStateSelect(!showStateSelect);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("accessToken");
    if (errorMessage === "") {
      try {
        // Make the API request here
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/properties/agent-properties/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(property),
          }
        );
        console.log(response);
        if (response.ok) {
          // Handle successful form submission
        } else {
          // Handle API errors
          console.error("API request failed:", response);
        }
      } catch (error) {
        console.error("API request failed:", error);
      }
    }
  };
  switch (step) {
    case 1:
      return (
        <div>
          <div className="flex flex-col gap-y-5 w-1/2">
            <div className="flex flex-col gap-y-3">
              <label htmlFor="title" className={lableStyles}>
                Title
              </label>
              <input
                type="text"
                id="title"
                placeholder="e.g 5 Bedroom duplex with swimming pool"
                name="title"
                onChange={handleChange}
                className="placeholder:text-lightgray border border-lightblue text-sm md:text-base rounded-[10px] px-4 py-3"
              />
            </div>

            <div className="flex flex-col gap-y-3">
              <label htmlFor="property_state" className={lableStyles}>
                Purpose
              </label>
              <div className="flex gap-x-4">
                <div className="flex gap-x-2 items-center">
                  <input
                    type="radio"
                    name="property_state"
                    value="For Rent"
                    checked={property.property_state === "For Rent"}
                    onChange={handlePurposeChange}
                  />
                  <span className="font-semibold">For Rent</span>
                </div>
                <div className="flex gap-x-2 items-center">
                  <input
                    type="radio"
                    name="property_state"
                    value="For Sale"
                    checked={property.property_state === "For Sale"}
                    onChange={handlePurposeChange}
                  />
                  <span className="font-semibold">For Sale</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full gap-y-2">
              <label htmlFor="title" className={lableStyles}>
                Property Type
              </label>
              <div
                className="border flex items-center cursor-pointer justify-between relative bg-primary border-lightblue rounded-[10px] px-4 py-2"
                onClick={handleTypeClick}
              >
                <span className="text-lightgray">Select an option</span>
                <Image
                  src={dropdown2}
                  width={30}
                  height={30}
                  className=""
                  alt="open"
                />
                <div className="absolute">
                  <div className="bg-primary"></div>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-x-2 w-full">
              <div className="w-full flex flex-col gap-y-1">
                <label htmlFor="title" className={lableStyles}>
                  State
                </label>
                <div
                  className="border flex items-center cursor-pointer justify-between relative bg-primary border-lightblue rounded-[10px] px-5 py-2"
                  onClick={handleStateClick}
                >
                  <span className="text-lightgray">Select an option</span>
                  <Image
                    src={dropdown2}
                    width={30}
                    height={30}
                    className=""
                    alt="open"
                  />
                  <div className="absolute">
                    <div className="bg-primary"></div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col gap-y-1">
                <label htmlFor="title" className={lableStyles}>
                  Locality
                </label>
                <div
                  className="border flex items-center cursor-pointer justify-between relative bg-primary border-lightblue rounded-[10px] px-5 py-2"
                  onClick={handleStateClick}
                >
                  <span className="text-lightgray">Select an option</span>
                  <Image
                    src={dropdown2}
                    width={30}
                    height={30}
                    className=""
                    alt="open"
                  />
                  <div className="absolute">
                    <div className="bg-primary"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <label htmlFor="address" className={lableStyles}>
                Address
              </label>
              <input
                type="text"
                id="address"
                placeholder="e.g 5 Bedroom duplex with swimming pool"
                name="address"
                onChange={handleChange}
                className="placeholder:text-lightgray border border-lightblue text-sm md:text-base rounded-[10px] px-4 py-3"
              />
            </div>

            <div className="flex flex-col gap-y-2">
              <label htmlFor="address" className={lableStyles}>
                Property Description
              </label>
              <textarea
                type="text"
                id="description"
                placeholder="Brief description of property"
                name="description"
                onChange={handleChange}
                className="placeholder:text-lightgray border border-lightblue text-sm md:text-base rounded-[10px] px-4 py-3"
              />
            </div>
            {errorMessage !== "" && (
              <span className="text-[#db2525] text-sm">{errorMessage}</span>
            )}
            <Button onClick={handleNext} className="w-fit">
              Next
            </Button>
          </div>
        </div>
      );

    case 2:
      return (
        <div>
          <div className="flex flex-col gap-y-5 w-1/2">
            <div className="flex flex-col gap-y-2">
              <span className="text-lg font-medium">Property Information</span>
              <span className="text-lightgray text-base">
              &quot;Provide Detailed Property Information Highlight What Makes Your
                Property Stand Out.
              </span>
            </div>
            <div className="flex items-center w-full flex-row gap-x-4">
              <div className="flex flex-col w-full gap-y-2">
                <label htmlFor="title" className={lableStyles}>
                  Price
                </label>
                <input
                  type="text"
                  id="price"
                  placeholder="e.g $100,000"
                  name="price"
                  onChange={handleChange}
                  className="placeholder:text-lightgray border border-lightblue text-sm md:text-base rounded-[10px] px-4 py-2"
                />
              </div>
              <div className="flex flex-col w-full gap-y-2">
                <label htmlFor="title" className={lableStyles}>
                  Denomination
                </label>
                <div
                  className="border flex items-center cursor-pointer justify-between relative bg-primary border-lightblue rounded-[10px] px-5 py-2"
                  onClick={handleStateClick}
                >
                  <span className="text-lightgray">Select an option</span>
                  <Image
                    src={dropdown2}
                    width={30}
                    height={30}
                    className=""
                    alt="open"
                  />
                  <div className="absolute">
                    <div className="bg-primary"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center w-full flex-row gap-x-2">
              <div className="flex flex-col w-full gap-y-2">
                <label htmlFor="title" className={lableStyles}>
                  Inspection Fee
                </label>
                <input
                  type="text"
                  id="inspectionFee"
                  placeholder="Select an option"
                  name="inspectionFee"
                  value={property.inspectionFee}
                  onChange={handleChange}
                  className="placeholder:text-lightgray border border-lightblue text-sm md:text-base rounded-[10px] px-4 py-2"
                />
              </div>
              <div className="w-full flex flex-col gap-y-2">
                <label htmlFor="title" className={lableStyles}>
                  Agency Fee % (If Apllicable)
                </label>
                <div
                  className="border flex items-center cursor-pointer justify-between relative bg-primary border-lightblue rounded-[10px] px-5 py-2"
                  onClick={handleStateClick}
                >
                  <span className="text-lightgray">Select an option</span>
                  <Image
                    src={dropdown2}
                    width={30}
                    height={30}
                    className=""
                    alt="open"
                  />
                  <div className="absolute">
                    <div className="bg-primary"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center flex-row gap-x-2">
              <div className="flex flex-col w-full gap-y-2">
                <label htmlFor="title" className={lableStyles}>
                  Pricing Structure
                </label>
                <div
                  className="border flex items-center cursor-pointer relative bg-primary border-lightblue rounded-[10px] px-5 py-2"
                  onClick={handleStateClick}
                >
                  <span className="text-lightgray">Select an option</span>
                  <Image
                    src={dropdown2}
                    width={30}
                    height={30}
                    className=""
                    alt="open"
                  />
                  <div className="absolute">
                    <div className="bg-primary"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full gap-y-2">
                <label htmlFor="title" className={lableStyles}>
                  Size (Sqm)
                </label>
                <input
                  type="text"
                  id="land_size"
                  placeholder="e.g 2000"
                  name="land_size"
                  onChange={handleChange}
                  className="placeholder:text-lightgray border border-lightblue text-sm md:text-base rounded-[10px] px-4 py-2 "
                />
              </div>
            </div>

            <div className="flex w-full flex-row gap-x-2">
              <div className="flex w-full flex-col gap-y-2">
                <label htmlFor="title" className={lableStyles}>
                  Bedroom
                </label>
                <div
                  className="border flex items-center cursor-pointer justify-between relative bg-primary border-lightblue rounded-[10px] px-5 py-2"
                  onClick={handleStateClick}
                >
                  <span className="text-lightgray">Select an option</span>
                  <Image
                    src={dropdown2}
                    width={30}
                    height={30}
                    className=""
                    alt="open"
                  />
                  <div className="absolute">
                    <div className="bg-primary"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full gap-y-2">
                <label htmlFor="title" className={lableStyles}>
                  Bathroom
                </label>
                <div
                  className="border flex items-center cursor-pointer bg-primary justify-between relative border-lightblue rounded-[10px] px-5 py-2"
                  onClick={handleStateClick}
                >
                  <span className="text-lightgray">Select an option</span>
                  <Image
                    src={dropdown2}
                    width={30}
                    height={30}
                    className=""
                    alt="open"
                  />
                  <div className="absolute">
                    <div className="bg-primary"></div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col gap-y-2">
                <label htmlFor="title" className={lableStyles}>
                  Toilet
                </label>
                <div
                  className="border flex items-center justify-between relative bg-primary border-lightblue rounded-[10px] px-5 py-2"
                  onClick={handleStateClick}
                >
                  <span className="text-lightgray">Select an option</span>
                  <Image
                    src={dropdown2}
                    width={30}
                    height={30}
                    className=""
                    alt="open"
                  />
                  <div className="absolute">
                    <div className="bg-primary"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className={lableStyles}>Features</span>
              <div className="grid grid-cols-4 gap-3">
                {features.map((feature) => (
                  <div className="flex items-center gap-x-2" key={feature.id}>
                    <input
                      type="checkbox"
                      name="features"
                      id={feature.value}
                      value={feature.value}
                      checked={property.key_features.includes(feature.value)}
                      onChange={handleFeatureChange}
                    />
                    <label htmlFor={feature.value}>{feature.title}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-lg font-semibold text-lightblue">
                Distinctive Features and Amenities
              </span>
              <span className="text-lightgray text-base">
                Give unique descriptions and features of your property (Maximum
                of 6 features )
              </span>
              <div className="ml-8 py-2">
                {property.featureDescriptions.map((description, index) => (
                  <div className="flex flex-row justify-between w-full items-center gap-x-3" key={index}>
                    <span key={index} className="capitalize">
                      {description}
                    </span>
                    <Image
                      width={30}
                      height={30}
                      src={cancel}
                      alt="cancel"
                      className="cursor-pointer"
                      onClick={() => deleteFeature(index)}
                    />
                  </div>
                ))}
              </div>
              <input
                type="text"
                id="title"
                placeholder="e.g Spatious Oceanfront Patio Ideal For Hosting Outdoor Gatherings"
                name="featureDescription"
                value={property.featureDescription}
                onChange={handleChange}
                className="placeholder:text-lightgray border border-lightblue text-sm md:text-base rounded-[10px] px-4 py-2 "
              />
              <div className="ml-auto">
                <Button
                  onClick={() => {
                    if (
                      property.featureDescriptions.length < 6 &&
                      property.featureDescription !== ""
                    ) {
                      setProperty({
                        ...property,
                        featureDescriptions: [
                          ...property.featureDescriptions,
                          property.featureDescription,
                        ],
                        featureDescription: "",
                      });
                    }
                  }}
                >
                  Add Feature
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-lg font-semibold text-lightblue">
                Youtube Video Link
              </span>
              <input
                type="text"
                id="youtubeLink"
                placeholder="e.g https://www.youtube.com/watch?v=example"
                name="youtubeLink"
                onChange={handleChange}
                className="placeholder:text-lightgray border border-lightblue text-sm md:text-base rounded-[10px] px-4 py-2 "
              />
            </div>
            <div className="flex items-center gap-x-2">
              <Button onClick={handlePrev}>Prev</Button>
              <Button onClick={handleSubmit}>Next</Button>
            </div>
          </div>
        </div>
      );

    case 2:
      return (
        <div>
          <div className="flex flex-col gap-y-5 w-1/2">
            <div className="flex flex-col gap-y-2"></div>
          </div>
        </div>
      );
  }
};

export default PropertyUpload;
