import Footer from "../../components/Footer";
import FeaturedListings from "./FeaturedListings";
import FindAgent from "./FindAgent";
import HeroSection from "./HeroSection";
import Intro from "./Intro";
import PropertyCategory from "./PropertyCategory";
import PropertyFinder from "./PropertyFinder";
import Testimonials from "./Testimonials";
import WhatWeDo from "./WhatWeDo";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <PropertyFinder />
      <Intro />
      <WhatWeDo />
      <FeaturedListings />
      <PropertyCategory />
      <FindAgent />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Index;
