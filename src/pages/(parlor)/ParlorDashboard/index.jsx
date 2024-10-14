import AppointmentSchedulesSection from "@/components/(parlor)/dashboard/AppointmentSchedulesSection";
import BannerSection from "@/components/(parlor)/dashboard/BannerSection";
import CountSection from "@/components/(parlor)/dashboard/CountSection";
import EarningChartSection from "@/components/(parlor)/dashboard/EarningChartSection";
import StatisticsSection from "@/components/(parlor)/dashboard/StatisticsSection";

const ParlorDashboard = () => {
  return (
    <main>
      <BannerSection />
      <CountSection />
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="md:col-span-6 lg:col-span-7 xl:col-span-8">
            <EarningChartSection />
          </div>
          <div className="md:col-span-6 lg:col-span-5 xl:col-span-4">
            <AppointmentSchedulesSection />
          </div>
        </div>
      </div>
      <StatisticsSection />
    </main>
  );
};

export default ParlorDashboard;
