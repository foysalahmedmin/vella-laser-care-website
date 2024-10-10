import DoctorDetailsSection from "@/components/(common)/doctor-details/DoctorDetailsSection";
import BannerSection from "@/components/partials/Sections/BannerSection";

const DoctorDetailsPage = () => {
  return (
    <main>
      <BannerSection
        title="Doctor Details"
        breadcrumbItems={[
          {
            label: "Home",
            link: "/",
          },
          {
            label: "Doctor Details",
            link: "/doctor/1",
          },
        ]}
      />
      <DoctorDetailsSection />
    </main>
  );
};

export default DoctorDetailsPage;
