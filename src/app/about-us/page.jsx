import { Navbar } from "@/components/ui";
import Footer from "@/components/ui/footer";
import React from "react";
import HeroSection from "./_components/hero_section";
import MainSection from "./_components/main_section";
import TeamSection from "./_components/team_section";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MainSection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default AboutUs;
