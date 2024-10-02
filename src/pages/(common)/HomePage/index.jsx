import BannerSection from "@/components/(common)/home/BannerSection";
import BlogsSection from "@/components/(common)/home/BlogsSection";
import CategoriesSection from "@/components/(common)/home/CategoriesSection";
import ConsultationScheduleSection from "@/components/(common)/home/ConsultationScheduleSection";
import CountSection from "@/components/(common)/home/CountSection";
import FeaturedProductsSection from "@/components/(common)/home/FeaturedProductsSection";
import FeatureSection from "@/components/(common)/home/FeatureSection";
import ParlorsSection from "@/components/(common)/home/ParlorsSection";
import PartnersSection from "@/components/(common)/home/PartnersSection";
import ServiceCentreSection from "@/components/(common)/home/ServiceCentreSection";
import TestimonialsSection from "@/components/partials/Sections/TestimonialsSection";

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
      <TestimonialsSection />
      <ConsultationScheduleSection />
      <PartnersSection />
      <BlogsSection />
    </main>
  );
};

export default HomePage;
