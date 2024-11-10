import PrivacyPolicySection from "@/components/(common)/privacy-policy/PrivacyPolicySection";
import BannerSection from "@/components/partials/Sections/BannerSection";
import SubscriptionSection from "@/components/partials/Sections/SubscriptionSection";
import { useTranslation } from "react-i18next";

const PrivacyPolicyPage = () => {
  const { i18n } = useTranslation();
  return (
    <main>
      <BannerSection
        title="Privacy Policy"
        breadcrumbItems={[
          {
            label: "Home",
            link: "/",
          },
          {
            label: "Privacy Policy",
            link: "/privacy-policy",
          },
        ]}
      />
      <PrivacyPolicySection lang={i18n.language} />
      <SubscriptionSection className="pb-16 md:pb-24" lang={i18n.language} />
    </main>
  );
};

export default PrivacyPolicyPage;
