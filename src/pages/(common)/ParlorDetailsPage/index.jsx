import ParlorDetailsSection from "@/components/(common)/parlor-details/ParlorDetailsSection";
import BannerSection from "@/components/partials/Sections/BannerSection";
import { useTranslation } from "react-i18next";

const ParlorDetailsPage = () => {
  const { i18n } = useTranslation();
  return (
    <main>
      <BannerSection
        title={"Parlor Details"}
        breadcrumbItems={[
          {
            label: "Home",
            link: "/",
          },
          {
            label: "Parlor",
            link: "/parlor/1",
          },
        ]}
      />
      <ParlorDetailsSection lang={i18n?.language} />
    </main>
  );
};

export default ParlorDetailsPage;
