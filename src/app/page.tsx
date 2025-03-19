import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SolutionsProvider from "@/components/SolutionsProvider";
import GlobalStander from "@/components/GlobalStandards";
import TrustSection from "@/components/TrustSection";
import Consultation from "@/components/Consultation";
import NewsEvents from "@/components/News&Events";
export default function Home() {
  return (
    <>
      <Navbar />
      <SolutionsProvider />
      <GlobalStander />
      <TrustSection />
      <NewsEvents />
      <Consultation />
      <Footer />
    </>
  );
}
