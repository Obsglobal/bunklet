import { Navbar } from "@/components/ui";
import HeroSection from "./_components/hero_section";
import InfoSection from "./_components/info_section";
import AboutUs from "./_components/about-us_section";
import FeaturedListing from "./_components/featured-listing_section";
import PopularListing from "./_components/popular-listing_section";
import Footer from "@/components/ui/footer";
import NewListing from "./_components/new-listing_section";
import FAQS from "./_components/accordion";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <InfoSection />
      <AboutUs />
      <FeaturedListing />
      <PopularListing />
      {/* <NewListing /> */}
      <FAQS />
      <Footer />
    </>
  );
};

export default HomePage;
