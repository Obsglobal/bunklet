import { Footer, Navbar } from "@/components/ui";
import React from "react";
import Features from "../_components/features_section";
import HeroSection from "../_components/hero_section";
import SimilarProperties from "../_components/similar-section";

const PropertyDetails = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <SimilarProperties />
      <Footer />
    </div>
  );
};

export default PropertyDetails;
