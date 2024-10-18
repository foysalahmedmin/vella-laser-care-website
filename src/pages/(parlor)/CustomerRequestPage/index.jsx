import BannerSection from "@/components/partials/Sections/BannerSection";
import TabSection from "@/components/(parlor)/TabSection/index.jsx";

const CustomerRequestPage = () => {
  return (
    <main>
      <BannerSection
        title="History"
        breadcrumbItems={[
          {
            label: "Home",
            link: "/",
          },
          {
            label: "History",
            link: "/parlor/history",
          },
        ]}
      />
      <TabSection />
    </main>
  );
};

export default CustomerRequestPage;
