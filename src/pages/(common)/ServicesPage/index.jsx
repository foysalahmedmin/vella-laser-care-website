import ServicesSection from "@/components/(common)/services/ServicesSection";
import BannerSection from "@/components/partials/Sections/BannerSection";
import SubscriptionSection from "@/components/partials/Sections/SubscriptionSection";
import { useTranslation } from "react-i18next";

const ServicesPage = () => {
  const { i18n } = useTranslation();
  return (
    <main>
      <BannerSection
        title="Services"
        breadcrumbItems={[
          { label: "Home", path: "/" },
          { label: "services", path: "/services" },
        ]}
      />
      <ServicesSection lang={i18n.language} />
      <SubscriptionSection lang={i18n.language} className="pb-16" />
    </main>
  );
};

export default ServicesPage;
