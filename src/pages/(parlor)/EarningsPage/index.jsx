import BannerSection from "@/components/partials/Sections/BannerSection";

const EarningsPage = () => {
  return (
    <main>
      <BannerSection
        title="Earnings"
        breadcrumbItems={[
          {
            label: "Home",
            link: "/",
          },
          {
            label: "Earnings",
            link: "/parlor/earnings",
          },
        ]}
      />
    </main>
  );
};

export default EarningsPage;
