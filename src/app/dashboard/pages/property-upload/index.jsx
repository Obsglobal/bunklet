"use client";
import { Button } from "@/components/ui";
import { features, locationFilter, propertyFilter } from "@/constants";
import {
  cancel,
  deleteIcon,
  dropdown2,
  image,
  spinner,
  video,
} from "@/constants/images";
import { setActiveLink } from "@/features/eventSlice";
import { useAppDispatch } from "@/lib/hooks";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

const PropertyUpload = () => {
  const dispatch = useAppDispatch();
  const [showPropertyType, setShowPropertyType] = useState(false);
  const [showStateSelect, setShowStateSelect] = useState(false);
  const [showLocalitySelect, setShowLocalitySelect] = useState(false);
  const [showDenominationSelect, setShowDenominationSelect] = useState(false);
  const [showStructureSelect, setShowStructureSelect] = useState(false);
  const [showFeeSelect, setShowFeeSelect] = useState(false);
  const [showBedroomSelect, setShowBedroomSelect] = useState(false);
  const [showBathroomSelect, setShowBathroomSelect] = useState(false);
  const [showToiletSelect, setShowToiletSelect] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  // const role = useAppSelector((state) => state.role.role);
  const lableStyles = `md:text-lg text-sm font-semibold text-lightblue`;
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
    images: [],
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

  const handleImageChange = (event) => {
    const files = event.target.files;
    const imagesArray = [...property.images];

    for (const file of files) {
      imagesArray.push(URL.createObjectURL(file));
    }

    setProperty({ ...property, images: imagesArray });
  };

  const handleDeleteImage = (index) => {
    const images = property.images.filter((image, i) => i !== index);
    setProperty({ ...property, images });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("accessToken");
    if (errorMessage === "") {
      try {
        setLoading(true);
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
        const data = await response.json();
        console.log(response);
        if (response.ok) {
          setLoading(false);
          toast.success("Property has beeen successfully submitted");
          dispatch(setActiveLink("dashboard"));
        } else {
          setLoading(false);
          console.log("API request failed:", response);
          toast.error("Error in submitting property");
        }
      } catch (error) {
        console.error("API request failed:", error);
        setLoading(false);
      }
    }
  };
  switch (step) {
    case 1:
      return (
        <div className="overflow-auto md:h-full h-screen">
          <div className="flex flex-col gap-y-5 md:w-1/2">
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
                    value="rent"
                    checked={property.property_state === "rent"}
                    onChange={handlePurposeChange}
                  />
                  <span className="font-semibold">For Rent</span>
                </div>
                <div className="flex gap-x-2 items-center">
                  <input
                    type="radio"
                    name="property_state"
                    value="sale"
                    checked={property.property_state === "sale"}
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
                onClick={() => setShowPropertyType(!showPropertyType)}
              >
                <span className="text-lightgray md:text-base text-sm">
                  {property.propertyType || "Select an option"}
                </span>
                <Image
                  src={dropdown2}
                  width={30}
                  height={30}
                  className=""
                  alt="open"
                />
                {showPropertyType && (
                  <div className="absolute z-10 top-0 w-1/2 h-[30vh] overflow-hidden">
                    <div className="w-full h-full overflow-y-auto bg-primary ">
                      {propertyFilter.map((value) => (
                        <div
                          className="flex flex-col py-1 items-center justify-center gap-y-2"
                          key={value.id}
                        >
                          <div
                            className=""
                            onClick={() =>
                              setProperty({
                                ...property,
                                propertyType: value.property,
                              })
                            }
                          >
                            {value.property}
                          </div>{" "}
                          console.log(process.env.NEXT_PUBLIC_BASE_URL)
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-row gap-x-2 w-full">
              <div className="w-full flex flex-col gap-y-1">
                <label htmlFor="title" className={lableStyles}>
                  State
                </label>
                <div
                  className="border flex items-center cursor-pointer justify-between relative bg-primary border-lightblue rounded-[10px] px-5 py-2"
                  onClick={() => setShowStateSelect(!showStateSelect)}
                >
                  <span className="text-lightgray md:text-base text-sm">
                    {property.state || "Select an option"}
                  </span>
                  <Image
                    src={dropdown2}
                    width={30}
                    height={30}
                    className=""
                    alt="open"
                  />
                  {showStateSelect && (
                    <div className="absolute z-10 top-0 w-1/2 h-[30vh] overflow-hidden">
                      <div className="w-full h-full overflow-y-auto bg-primary ">
                        {locationFilter.map((value) => (
                          <div
                            className="flex flex-col py-1 items-center justify-center gap-y-2"
                            key={value.id}
                          >
                            <div
                              className=""
                              onClick={() =>
                                setProperty({
                                  ...property,
                                  state: value.location,
                                })
                              }
                            >
                              {value.location}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full flex flex-col gap-y-1">
                <label htmlFor="title" className={lableStyles}>
                  Locality
                </label>
                <div
                  className="border flex items-center cursor-pointer justify-between relative bg-primary border-lightblue rounded-[10px] px-5 py-2"
                  onClick={() => setShowLocalitySelect(!showLocalitySelect)}
                >
                  <span className="text-lightgray md:text-base text-sm">
                    {property.location || "Select an option"}
                  </span>
                  <Image
                    src={dropdown2}
                    width={30}
                    height={30}
                    className=""
                    alt="open"
                  />
                  {showLocalitySelect && (
                    <div className="absolute z-10 top-0 w-1/2 h-[30vh] overflow-hidden">
                      <div className="w-full h-full overflow-y-auto bg-primary ">
                        {locationFilter.map((value) => (
                          <div
                            className="flex flex-col py-1 items-center justify-center gap-y-2"
                            key={value.id}
                          >
                            <div
                              className=""
                              onClick={() =>
                                setProperty({
                                  ...property,
                                  location: value.location,
                                })
                              }
                            >
                              {value.location}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
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
        <div className="md:h-full h-[150vh]">
          <div className="flex flex-col gap-y-5 md:w-1/2">
            <div className="flex flex-col gap-y-2">
              <span className="md:text-lg font-medium">
                Property Information
              </span>
              <span className="text-lightgray text-sm md:text-base">
                &quot;Provide Detailed Property Information Highlight What Makes
                Your Property Stand Out.
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
                  onClick={() =>
                    setShowDenominationSelect(!showDenominationSelect)
                  }
                >
                  <span className="text-lightgray md:text-base text-sm">
                    {property.denomination || "Select an option"}
                  </span>
                  <Image
                    src={dropdown2}
                    width={30}
                    height={30}
                    className=""
                    alt="open"
                  />
                  {showDenominationSelect && (
                    <div className="absolute z-10 top-0 w-1/2 h-[30vh] overflow-hidden">
                      <div className="w-full h-full overflow-y-auto bg-primary ">
                        {locationFilter.map((value) => (
                          <div
                            className="flex flex-col py-1 items-center justify-center gap-y-2"
                            key={value.id}
                          >
                            <div
                              className=""
                              onClick={() =>
                                setProperty({
                                  ...property,
                                  denomination: value.location,
                                })
                              }
                            >
                              {value.location}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
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
                  Agency Fee % (If Applicable)
                </label>
                <div
                  className="border flex items-center cursor-pointer justify-between relative bg-primary border-lightblue rounded-[10px] px-5 py-2"
                  onClick={() => setShowFeeSelect(!showFeeSelect)}
                >
                  <span className="text-lightgray md:text-base text-sm">
                    {property.agencyFee || "Select an option"}
                  </span>
                  <Image
                    src={dropdown2}
                    width={30}
                    height={30}
                    className=""
                    alt="open"
                  />
                  {showFeeSelect && (
                    <div className="absolute z-10 top-0 w-1/2 h-[30vh] overflow-hidden">
                      <div className="w-full h-full overflow-y-auto bg-primary ">
                        {locationFilter.map((value) => (
                          <div
                            className="flex flex-col py-1 items-center justify-center gap-y-2"
                            key={value.id}
                          >
                            <div
                              className=""
                              onClick={() =>
                                setProperty({
                                  ...property,
                                  agencyFee: value.location,
                                })
                              }
                            >
                              {value.location}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center flex-row gap-x-2">
              <div className="flex flex-col w-full gap-y-2">
                <label htmlFor="title" className={lableStyles}>
                  Pricing Structure
                </label>
                <div
                  className="border flex items-center justify-between cursor-pointer relative bg-primary border-lightblue rounded-[10px] px-5 py-2"
                  onClick={() => setShowStructureSelect(!showStructureSelect)}
                >
                  <span className="text-lightgray md:text-base text-sm">
                    {property.pricingStructure || "Select an option"}
                  </span>
                  <Image
                    src={dropdown2}
                    width={30}
                    height={30}
                    className=""
                    alt="open"
                  />
                  {showStructureSelect && (
                    <div className="absolute z-10 top-0 w-1/2 h-[30vh] overflow-hidden">
                      <div className="w-full h-full overflow-y-auto bg-primary ">
                        {locationFilter.map((value) => (
                          <div
                            className="flex flex-col py-1 items-center justify-center gap-y-2"
                            key={value.id}
                          >
                            <div
                              className=""
                              onClick={() =>
                                setProperty({
                                  ...property,
                                  pricingStructure: value.location,
                                })
                              }
                            >
                              {value.location}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
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
                  className="border w-full flex items-center cursor-pointer justify-between relative bg-primary border-lightblue rounded-[10px] px-5 py-2"
                  onClick={() => setShowBedroomSelect(!showBedroomSelect)}
                >
                  <span className="text-lightgray md:text-base text-sm">
                    {property.bedroom || "Select an option"}
                  </span>
                  <Image
                    src={dropdown2}
                    width={30}
                    height={30}
                    className=""
                    alt="open"
                  />
                  {showBedroomSelect && (
                    <div className="absolute z-10 top-0 w-1/2 h-[30vh] overflow-hidden">
                      <div className="w-full h-full overflow-y-auto bg-primary ">
                        {locationFilter.map((value) => (
                          <div
                            className="flex flex-col py-1 items-center justify-center gap-y-2"
                            key={value.id}
                          >
                            <div
                              className=""
                              onClick={() =>
                                setProperty({
                                  ...property,
                                  bedroom: value.location,
                                })
                              }
                            >
                              {value.location}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col w-full gap-y-2">
                <label htmlFor="title" className={lableStyles}>
                  Bathroom
                </label>
                <div
                  className="border flex items-center cursor-pointer bg-primary justify-between relative border-lightblue rounded-[10px] px-5 py-2"
                  onClick={() => setShowBathroomSelect(!showBathroomSelect)}
                >
                  <span className="text-lightgray md:text-base text-sm">
                    {property.bathroom || "Select an option"}
                  </span>
                  <Image
                    src={dropdown2}
                    width={30}
                    height={30}
                    className=""
                    alt="open"
                  />
                  {showBathroomSelect && (
                    <div className="absolute z-10 top-0 w-1/2 h-[30vh] overflow-hidden">
                      <div className="w-full h-full overflow-y-auto bg-primary ">
                        {locationFilter.map((value) => (
                          <div
                            className="flex flex-col py-1 items-center justify-center gap-y-2"
                            key={value.id}
                          >
                            <div
                              className=""
                              onClick={() =>
                                setProperty({
                                  ...property,
                                  bathroom: value.location,
                                })
                              }
                            >
                              {value.location}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex w-full flex-col gap-y-2">
                <label htmlFor="title" className={lableStyles}>
                  Toilet
                </label>
                <div
                  className="border flex items-center justify-between relative bg-primary border-lightblue rounded-[10px] px-5 py-2"
                  onClick={() => setShowToiletSelect(!showToiletSelect)}
                >
                  <span className="text-lightgray md:text-base text-sm">
                    {property.toilet || "Select an option"}
                  </span>
                  <Image
                    src={dropdown2}
                    width={30}
                    height={30}
                    className=""
                    alt="open"
                  />
                  {showToiletSelect && (
                    <div className="absolute z-10 top-0 w-1/2 h-[30vh] overflow-hidden">
                      <div className="w-full h-full overflow-y-auto bg-primary ">
                        {locationFilter.map((value) => (
                          <div
                            className="flex flex-col py-1 items-center justify-center gap-y-2"
                            key={value.id}
                          >
                            <div
                              className=""
                              onClick={() =>
                                setProperty({
                                  ...property,
                                  toilet: value.location,
                                })
                              }
                            >
                              {value.location}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className={lableStyles}>Features</span>
              <div className="grid grid-cols-4 gap-3">
                {features.map((feature) => (
                  <div
                    className="flex md:text-base text-sm items-center gap-x-2"
                    key={feature.id}
                  >
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
              <span className="md:text-lg font-semibold text-lightblue">
                Distinctive Features and Amenities
              </span>
              <span className="text-lightgray text-sm md:text-base">
                Give unique descriptions and features of your property (Maximum
                of 6 features )
              </span>
              <div className="ml-8 py-2">
                {property.featureDescriptions.map((description, index) => (
                  <div
                    className="flex flex-row justify-between w-full items-center gap-x-3"
                    key={index}
                  >
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
              <Button onClick={handleNext}>Next</Button>
            </div>
          </div>
        </div>
      );

    case 3:
      return (
        <div>
          <div className="flex flex-col gap-y-5 w-full md:w-1/2">
            <div className="flex flex-col gap-y-6">
              <div className="font-medium md:text-2xl">
                Upload Property Pictures
              </div>
              <div className="border border-lightgray flex flex-col gap-y-2 w-[30%] rounded items-center px-2 py-3 justify-center">
                <div>
                  <Image
                    src={image}
                    alt="upload image"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="w-ful mx-auto">
                  <Button>
                    <label htmlFor="upload" className="cursor-pointer">
                      Upload Photos
                    </label>
                  </Button>
                  <input
                    type="file"
                    name="upload"
                    id="upload"
                    multiple
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </div>
              </div>
              <div className="grid lg:grid-cols-5 gap-4 pt-12">
                {property.images.map((image, index) => (
                  <div key={index} className="relative">
                    <Image
                      src={image}
                      width={200}
                      height={200}
                      alt="property_image"
                    />
                    <button
                      onClick={() => handleDeleteImage(index)}
                      className="absolute top-0 right-0 cursor-pointer hover:scale-95 transition-all ease-in"
                    >
                      <Image
                        src={deleteIcon}
                        width={50}
                        height={50}
                        alt="delete_image"
                      />
                    </button>
                  </div>
                ))}
              </div>
              {property.images.length !== 0 && (
                <div className="flex items-center gap-x-2">
                  <Button onClick={handleNext}>Next</Button>
                  {/* {loading ? (
                      <Image
                        width={25}
                        height={25}
                        src={spinner}
                        alt="loading"
                        className="w-[25px]"
                      />
                    ) : (
                      <span>Submit for Review</span>
                    )} */}
                </div>
              )}
            </div>
          </div>
        </div>
      );
    case 4:
      return (
        <div>
          <div className="flex flex-col gap-y-5 w-full md:w-1/2">
            <div className="flex flex-col gap-y-6">
              <div className="font-medium md:text-2xl">
                Upload Property Videos
              </div>
              <div className="border border-lightgray flex flex-col gap-y-2 w-[30%] rounded items-center px-2 py-3 justify-center">
                <div>
                  <Image
                    src={video}
                    alt="upload video"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="w-ful mx-auto">
                  <Button>
                    <label htmlFor="upload" className="cursor-pointer">
                      Upload Videos
                    </label>
                  </Button>
                  <input
                    type="file"
                    name="upload"
                    id="upload"
                    multiple
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </div>
              </div>
              <div className="grid lg:grid-cols-5 gap-4 pt-12">
                {property.images.map((image, index) => (
                  <div key={index} className="relative">
                    <Image
                      src={image}
                      width={200}
                      height={200}
                      alt="property_image"
                    />
                    <button
                      onClick={() => handleDeleteImage(index)}
                      className="absolute top-0 right-0 cursor-pointer hover:scale-95 transition-all ease-in"
                    >
                      <Image
                        src={deleteIcon}
                        width={50}
                        height={50}
                        alt="delete_image"
                      />
                    </button>
                  </div>
                ))}
              </div>
              {property.images.length !== 0 && (
                <div className="flex items-center gap-x-2">
                  <Button onClick={handleNext}>Next</Button>
                  {/* <Button onClick={handleSubmit}>
                    {loading ? (
                      <Image
                        width={25}
                        height={25}
                        src={spinner}
                        alt="loading"
                        className="w-[25px]"
                      />
                    ) : (
                      <span>Submit for Review</span>
                    )}
                  </Button> */}
                </div>
              )}
            </div>
          </div>
        </div>
      );
  }
};

export default PropertyUpload;
