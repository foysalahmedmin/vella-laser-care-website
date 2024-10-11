import DoctorDetailsSection from "@/components/(common)/doctor-details/DoctorDetailsSection";
import BannerSection from "@/components/partials/Sections/BannerSection";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchOneDoctor } from "@/pages/(common)/DoctorsPage/doctorApis.js";

const DoctorDetailsPage = () => {
  const { id } = useParams();
  const { i18n } = useTranslation();

  const { data } = useQuery({
    queryKey: ["one_doctor", id],
    queryFn: () => fetchOneDoctor(id),
    enabled: !!id,
  });
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
      <DoctorDetailsSection info={data} lang={i18n?.language} />
    </main>
  );
};

export default DoctorDetailsPage;
