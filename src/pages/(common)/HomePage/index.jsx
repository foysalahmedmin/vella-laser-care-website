import BannerSection from "@/components/(common)/home/BannerSection";
import CategoriesSection from "@/components/(common)/home/CategoriesSection";
import CountSection from "@/components/(common)/home/CountSection";
import FeaturedProductsSection from "@/components/(common)/home/FeaturedProductsSection";
import ServiceCentreSection from "@/components/(common)/home/ServiceCentreSection";

const HomePage = () => {
  return (
    <main>
      <BannerSection />
      <ServiceCentreSection />
      <CountSection />
      <FeaturedProductsSection />
      <CategoriesSection />
    </main>
  );
};

export default HomePage;
