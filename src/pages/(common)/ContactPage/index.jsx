import FormSection from "@/components/(common)/contact/FormSection";
import LocationsSection from "@/components/(common)/contact/LocationsSection";
import BannerSection from "@/components/partials/Sections/BannerSection";

const ContactPage = () => {
  return (
    <main>
      <BannerSection
        title="Contact"
        breadcrumbItems={[
          {
            label: "Home",
            link: "/",
          },
          {
            label: "Contact",
            link: "/contact",
          },
        ]}
      />
      <FormSection />
      <LocationsSection />
    </main>
  );
};

export default ContactPage;
