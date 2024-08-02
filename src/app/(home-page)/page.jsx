import { Navbar } from "@/components/ui";
import HeroSection from "./_components/hero_section";
import InfoSection from "./_components/info_section";
import AboutUs from "./_components/about-us_section";
import FeaturedListing from "../../components/ui/featured-listing_section";
import PopularListing from "../../components/ui/popular-listing_section";
import Footer from "@/components/ui/footer";
// import NewListing from "./_components/new-listing_section";
import FAQS from "../../components/ui/accordion";
import Banner from "@/components/ui/banner";
import ChooseUsSection from "../../components/ui/choose-us_section";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <InfoSection />
      <AboutUs />
      <FeaturedListing />
      <PopularListing />
      <Banner />
      {/* <NewListing /> */}
      <ChooseUsSection />
      <FAQS />
      <Footer />
    </>
  );
};

export default HomePage;
