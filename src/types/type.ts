export interface BannerItem {
  _id: string;
  title: string;
  description: string;
  cta: {
    buttonText: string;
  };
}
export interface HeroSectionProps {
  banner: BannerItem[];
}
