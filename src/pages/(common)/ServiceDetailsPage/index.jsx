import DescriptionSection from "@/components/(common)/ServiceDetails/DescriptionSection";
import GallerySection from "@/components/(common)/ServiceDetails/GallerySection";
import KeyBenefitsSection from "@/components/(common)/ServiceDetails/KeyBenefitsSection";
import OurBenefitsSection from "@/components/(common)/ServiceDetails/OurBenefitsSection";
import PricingPlanSection from "@/components/(common)/ServiceDetails/PricingPlanSection";
import BannerSection from "@/components/partials/Sections/BannerSection";
import TestimonialsSection from "@/components/partials/Sections/TestimonialsSection";

const ServiceDetailsPage = () => {
  return (
    <main>
      <BannerSection
        title={"Service Details"}
        breadcrumbItems={[
          {
            label: "Home",
            link: "/",
          },
          {
            label: "Service Details",
            link: "/service/1",
          },
        ]}
      />
      <DescriptionSection />
      <KeyBenefitsSection />
      <GallerySection />
      <PricingPlanSection />
      <OurBenefitsSection />
      <TestimonialsSection className="py-16 md:py-24" />
    </main>
  );
};

export default ServiceDetailsPage;
