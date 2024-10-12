import ConsultationScheduleSection from "@/components/(common)/home/ConsultationScheduleSection";
import BannerSection from "@/components/(user)/dashboard/BannerSection";
import CountSection from "@/components/(user)/dashboard/CountSection";
import FeatureSection from "@/components/(user)/dashboard/FeatureSection";
import TabSection from "@/components/(user)/dashboard/TabSection";

const UserDashboard = () => {
  return (
    <main>
      <BannerSection />
      <FeatureSection />
      <TabSection />
      <ConsultationScheduleSection />
      <CountSection />
    </main>
  );
};

export default UserDashboard;
