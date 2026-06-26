import FeaturedOpportunities from "@/components/FeaturedOpportunities";
import FeaturedStartups from "@/components/FeaturedStartups";
import HeroUi from "@/components/HeroUi";
import SuccessStories from "@/components/SuccessStories";
import WhyJoinStartupForge from "@/components/WhyJoinStartupForge";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HeroUi />
    <FeaturedStartups />
    <FeaturedOpportunities />
    <SuccessStories />
    <WhyJoinStartupForge />
   
    
    </>
  );
}
