import BannerSection from "@/components/(parlor)/dashboard/BannerSection";
import CountSection from "@/components/(parlor)/dashboard/CountSection";
import EarningChartSection from "@/components/(parlor)/dashboard/EarningChartSection";
import StatisticsSection from "@/components/(parlor)/dashboard/StatisticsSection";

const ParlorDashboard = () => {
  return (
    <main>
      <BannerSection />
      <CountSection />
      <EarningChartSection />
      <StatisticsSection />
    </main>
  );
};

export default ParlorDashboard;
