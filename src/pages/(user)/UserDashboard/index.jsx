import BannerSection from "@/components/(user)/dashboard/BannerSection";
import CountSection from "@/components/(user)/dashboard/CountSection";
import FeatureSection from "@/components/(user)/dashboard/FeatureSection";
import TabSection from "@/components/(user)/dashboard/TabSection";
import ConsultationScheduleSection from "@/components/partials/Sections/ConsultationScheduleSection";

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
