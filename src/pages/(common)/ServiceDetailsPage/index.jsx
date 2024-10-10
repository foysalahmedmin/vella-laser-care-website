import DescriptionSection from "@/components/(common)/service-details/DescriptionSection";
import GallerySection from "@/components/(common)/service-details/GallerySection";
import KeyBenefitsSection from "@/components/(common)/service-details/KeyBenefitsSection";
import OurBenefitsSection from "@/components/(common)/service-details/OurBenefitsSection";
import PricingPlanSection from "@/components/(common)/service-details/PricingPlanSection";
import BannerSection from "@/components/partials/Sections/BannerSection";
import TestimonialsSection from "@/components/partials/Sections/TestimonialsSection";
import { fetchOneService } from "@/pages/(common)/ServiceDetailsPage/serviceApis.js";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const ServiceDetailsPage = () => {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const { data } = useQuery({
    queryKey: ["one_service", id],
    queryFn: () => fetchOneService(id),
    enabled: !!id,
  });
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
      <DescriptionSection info={data} lang={i18n?.language} />
      <KeyBenefitsSection info={data?.benefit} lang={i18n?.language} />
      <GallerySection info={data} lang={i18n?.language} />
      <PricingPlanSection info={data} lang={i18n?.language} />
      <OurBenefitsSection info={data} lang={i18n?.language} />
      <TestimonialsSection className="py-16 md:py-24" />
    </main>
  );
};

export default ServiceDetailsPage;
