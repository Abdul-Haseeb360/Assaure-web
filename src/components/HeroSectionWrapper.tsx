import HeroSection from "./HeroSection";
 import { getHeroBanner } from "@/lib/actions/fetchHeroBanner";
 import { BannerItem } from "@/types/type";
 
 export default async function HeroSectionWrapper() {
   const banner: BannerItem[] = await getHeroBanner();
 
   return <HeroSection banner={banner} />;
 }
