import BalanceSection from "@/components/(parlor)/earnings/BalanceSection";
import OrderSection from "@/components/(parlor)/earnings/OrderSection";
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
      <OrderSection />
    </main>
  );
};

export default EarningsPage;
