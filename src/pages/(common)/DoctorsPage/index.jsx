import DoctorsSection from "@/components/(common)/doctors/DoctorsSection";
import BannerSection from "@/components/partials/Sections/BannerSection";
import { useTranslation } from "react-i18next";

const DoctorsPage = () => {
  const { i18n } = useTranslation();
  return (
    <main>
      <BannerSection
        title="Our Doctors"
        breadcrumbItems={[
          {
            label: "Home",
            link: "/",
          },
          {
            label: "Our Doctors",
            link: "/doctors",
          },
        ]}
      />
      <DoctorsSection lang={i18n?.language} />
    </main>
  );
};

export default DoctorsPage;
