import { CareerOpportunities } from "@/assets/svg/icons/course-benefits/CareerOpportunities";
import { FurtherStudyOptions } from "@/assets/svg/icons/course-benefits/FurtherStudyOptions";
import { SkillDevelopment } from "@/assets/svg/icons/course-benefits/SkillDevelopment";
import { StudentSuccess } from "@/assets/svg/icons/course-benefits/StudentSuccess";
import { SectionTitle, Title } from "@/components/ui/SectionTitle";

const CoursesBenefitsSection = () => {
  return (
    <section className="pb-16 md:pb-24">
      <div className="container">
        <SectionTitle variant="center">
          <Title>Benefits of Beauty School courses</Title>
        </SectionTitle>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="space-y-4 text-center">
            <div className="mx-auto inline-block">
              <SkillDevelopment className="text-3xl text-primary" />
            </div>
            <div className="space-y-2">
              <h4 className="text-title/85">Skill development</h4>
              <p className="font-medium">
                Gain the skills and knowledge you need to excel in your career.
              </p>
            </div>
          </div>
          <div className="space-y-4 text-center">
            <div className="mx-auto inline-block">
              <FurtherStudyOptions className="text-3xl text-primary" />
            </div>
            <div className="space-y-2">
              <h4 className="text-title/85">Further Study Options</h4>
              <p className="font-medium">
                Set yourself up for advanced study programs and further study
              </p>
            </div>
          </div>
          <div className="space-y-4 text-center">
            <div className="mx-auto inline-block">
              <CareerOpportunities className="text-3xl text-primary" />
            </div>
            <div className="space-y-2">
              <h4 className="text-title/85">Career Opportunities</h4>
              <p className="font-medium">
                Explore the diverse range of career paths available to our
                graduates.
              </p>
            </div>
          </div>
          <div className="space-y-4 text-center">
            <div className="mx-auto inline-block">
              <StudentSuccess className="text-3xl text-primary" />
            </div>
            <div className="space-y-2">
              <h4 className="text-title/85">Student Success</h4>
              <p className="font-medium">
                Hear from our past students about their journey and
                achievements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesBenefitsSection;
