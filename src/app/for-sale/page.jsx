import { Navbar } from "@/components/ui";
import Banner from "@/components/ui/banner";
import ChooseUsSection from "@/components/ui/choose-us_section";
import FeaturedListing from "@/components/ui/featured-listing_section";
import Footer from "@/components/ui/footer";
import NewListing from "@/components/ui/new-listing_section";
import PopularListing from "@/components/ui/popular-listing_section";
import React from "react";
import HeroSection from "./_components/hero_section";

const ForSale = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedListing />
      <NewListing />
      <PopularListing />
      <Banner />
      <ChooseUsSection />
      <Footer />
    </>
  );
};

export default ForSale;
