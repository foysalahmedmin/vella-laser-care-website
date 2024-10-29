import WithdrawHistorySection from "@/components/(parlor)/withdraw-history/WithdrawHistorySection";
import BannerSection from "@/components/partials/Sections/BannerSection";

const WithdrawHistoryPage = () => {
  return (
    <main>
      <BannerSection
        title="Withdraw History"
        breadcrumbItems={[
          {
            label: "Home",
            link: "/",
          },
          {
            label: "Withdraw History",
            link: "/parlor/withdraw_history",
          },
        ]}
      />
      <WithdrawHistorySection />
    </main>
  );
};

export default WithdrawHistoryPage;
