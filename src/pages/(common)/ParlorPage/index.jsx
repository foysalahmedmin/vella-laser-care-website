import ParlorsSection from "@/components/(common)/parlor/ParlorsSection";
import BannerSection from "@/components/partials/Sections/BannerSection";
import SubscriptionSection from "@/components/partials/Sections/SubscriptionSection";
import { useTranslation } from "react-i18next";

const ParlorPage = () => {
  const { i18n } = useTranslation();
  return (
    <main>
      <BannerSection
        title="Parlor"
        breadcrumbItems={[
          { label: "Home", path: "/" },
          { label: "Parlor", path: "/parlor" },
        ]}
      />
      <ParlorsSection lang={i18n.language} />
      <SubscriptionSection lang={i18n.language} className="pb-16" />
    </main>
  );
};

export default ParlorPage;
