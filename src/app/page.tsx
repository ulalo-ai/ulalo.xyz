"use client"
import BridgingTheWorld from "@/components/global/BridgingTheWorld";
import DistributionOfTokens from "@/components/global/DistributionOfTokens";
  // import DistributionOfTokens from "@/components/global/DistributionOfTokens";
import Footer from "@/components/global/Footer";
import HeroSection from "@/components/global/HeroSection";
import OwningYourHealth from "@/components/global/OwningYourHealth";
import Roadmap from "@/components/global/Roadmap";
import ShowCase from "@/components/global/ShowCase/Index";
import TokenLaunchSoon from "@/components/global/TokenLaunchSoon";
import UlaoIsRelevant from "@/components/global/UlaoIsRelevant";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useEffect } from "react";
export default function Home() {

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <>

      <HeroSection />
      <TokenLaunchSoon />
      <OwningYourHealth />
      <ShowCase />
      <BridgingTheWorld />
      <Roadmap />
      <UlaoIsRelevant />
      <DistributionOfTokens />
      <Footer />

      
    </>
  );
}
