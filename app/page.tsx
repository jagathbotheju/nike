import AboutUsSection from "@/components/AboutUsSection";
import CustomerReviews from "@/components/CustomerReviews";
import HeroSection from "@/components/HeroSection";
import PopularProductsSection from "@/components/PopularProductsSection";
import Services from "@/components/Services";
import SpecialOffer from "@/components/SpecialOffer";
import Subscribe from "@/components/Subscribe";
import SuperQualitySection from "@/components/SuperQualitySection";

export default function Home() {
  return (
    <main className="flex flex-col min-w-full">
      <HeroSection />
      <PopularProductsSection />
      <SuperQualitySection />
      <Services />
      <SpecialOffer />
      <CustomerReviews />
      <Subscribe />
    </main>
  );
}
