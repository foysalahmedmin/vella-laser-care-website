import CourseOverviewSection from "@/components/(common)/training/CourseOverviewSection";
import CoursesBenefitsSection from "@/components/(common)/training/CoursesBenefitsSection";
import FAQSection from "@/components/(common)/training/FAQSection";
import FeatureSection from "@/components/(common)/training/FeatureSection";
import SummarySection from "@/components/(common)/training/SummarySection";
import BannerSection from "@/components/partials/Sections/BannerSection";

const TrainingPage = () => {
  return (
    <main>
      <BannerSection
        title="Training"
        breadcrumbItems={[
          { label: "Home", link: "/" },
          { label: "Training", link: "/training" },
        ]}
      />
      <SummarySection />
      <FeatureSection />
      <CourseOverviewSection />
      <CoursesBenefitsSection />
      <FAQSection />
    </main>
  );
};

export default TrainingPage;
