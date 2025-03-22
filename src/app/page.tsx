import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SolutionsProvider from "@/components/SolutionsProvider";
import GlobalStander from "@/components/GlobalStandards";
import TrustSection from "@/components/TrustSection";
import Consultation from "@/components/Consultation";
import NewsEvents from "@/components/News&Events";
import HeroSectionWrapper from "@/components/HeroSection";

export default function Home() {
  return (
    <>
    <Navbar/>
      <HeroSectionWrapper />
      <SolutionsProvider />
      <GlobalStander />
      <TrustSection />
      <NewsEvents />
      <Consultation />
      <Footer />
    </>
  );
}
