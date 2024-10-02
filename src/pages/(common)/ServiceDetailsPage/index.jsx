import DescriptionSection from "@/components/(common)/ServiceDetails/DescriptionSection";
import BannerSection from "@/components/partials/Sections/BannerSection";

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
    </main>
  );
};

export default ServiceDetailsPage;
