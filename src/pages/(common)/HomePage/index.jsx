import BannerSection from "@/components/(common)/home/BannerSection";
import CategoriesSection from "@/components/(common)/home/CategoriesSection";
import CountSection from "@/components/(common)/home/CountSection";
import FeaturedProductsSection from "@/components/(common)/home/FeaturedProductsSection";
import FeatureSection from "@/components/(common)/home/FeatureSection";
import ParlorsSection from "@/components/(common)/home/ParlorsSection";
import ServiceCentreSection from "@/components/(common)/home/ServiceCentreSection";

const HomePage = () => {
  return (
    <main>
      <BannerSection />
      <ServiceCentreSection />
      <CountSection />
      <FeaturedProductsSection />
      <CategoriesSection />
      <FeatureSection />
      <ParlorsSection />
    </main>
  );
};

export default HomePage;
