import { Navbar } from "@/components/ui"
import HeroSection from "./_components/hero_section"
import InfoSection from "./_components/info_section"
import AboutUs from "./_components/about-us_section"

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <InfoSection />
      <AboutUs />
    </>
  )
}

export default HomePage