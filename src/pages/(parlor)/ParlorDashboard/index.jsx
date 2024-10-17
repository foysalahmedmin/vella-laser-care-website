import BannerSection from "@/components/(parlor)/dashboard/BannerSection";
import CountSection from "@/components/(parlor)/dashboard/CountSection";
import EarningChartSection from "@/components/(parlor)/dashboard/EarningChartSection";
import StatisticsSection from "@/components/(parlor)/dashboard/StatisticsSection";

const ParlorDashboard = () => {
  return (
    <main>
      <BannerSection />
      <CountSection />
      <div className="container pb-16">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 self-stretch md:col-span-7 lg:col-span-8">
            <EarningChartSection />
          </div>
          <div className="col-span-12 self-stretch md:col-span-5 lg:col-span-4">
            <StatisticsSection />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ParlorDashboard;
