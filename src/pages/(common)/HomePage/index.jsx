import BannerSection from "@/components/(common)/home/BannerSection";
import BlogsSection from "@/components/(common)/home/BlogsSection";
import CategoriesSection from "@/components/(common)/home/CategoriesSection";
import CountSection from "@/components/(common)/home/CountSection";
import FeaturedProductsSection from "@/components/(common)/home/FeaturedProductsSection";
import FeatureSection from "@/components/(common)/home/FeatureSection";
import ParlorsSection from "@/components/(common)/home/ParlorsSection";
import PartnersSection from "@/components/(common)/home/PartnersSection";
import ServiceCentreSection from "@/components/(common)/home/ServiceCentreSection";
import ConsultationScheduleSection from "@/components/partials/Sections/ConsultationScheduleSection";
import TestimonialsSection from "@/components/partials/Sections/TestimonialsSection";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { i18n } = useTranslation();
  return (
    <main>
      <BannerSection lang={i18n?.language} />
      <ServiceCentreSection lang={i18n?.language} />
      <CountSection lang={i18n?.language} />
      <FeaturedProductsSection lang={i18n?.language} />
      <CategoriesSection lang={i18n?.language} />
      <FeatureSection lang={i18n?.language} />
      <ParlorsSection lang={i18n?.language} />
      <TestimonialsSection lang={i18n?.language} />
      <ConsultationScheduleSection lang={i18n?.language} />
      <PartnersSection lang={i18n?.language} />
      <BlogsSection lang={i18n?.language} />
    </main>
  );
};

export default HomePage;
