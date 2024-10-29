import BannerSection from "@/components/(parlor)/dashboard/BannerSection";
import ChartSection from "@/components/(parlor)/dashboard/ChartSection";
import ChartSection1 from "@/components/(parlor)/dashboard/ChartSection - 1";
import CountSection from "@/components/(parlor)/dashboard/CountSection";
import EarningChartSection from "@/components/(parlor)/dashboard/EarningChartSection";

const ParlorDashboard = () => {
  return (
    <main>
      <BannerSection />
      <CountSection />
      <EarningChartSection />
      <ChartSection />
      <ChartSection1 />
    </main>
  );
};

export default ParlorDashboard;
