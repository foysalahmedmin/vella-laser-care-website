import BalanceSection from "@/components/(parlor)/earnings/BalanceSection";
import EarningsTabSection from "@/components/(parlor)/earnings/EarningsTabSection";
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
      <BalanceSection />
      <EarningsTabSection />
    </main>
  );
};

export default EarningsPage;
