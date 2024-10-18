import React from "react";
import BannerSection from "@/components/partials/Sections/BannerSection/index.jsx";
import WithdrawHistories from "@/components/(parlor)/earnings/WithdrawHistory/index.jsx";

const WithdrawHistory = () => {
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
      <WithdrawHistories />
    </main>
  );
};

export default WithdrawHistory;
