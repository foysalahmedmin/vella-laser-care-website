import ProfileSection from "@/components/(parlor)/profile/ProfileSection";
import BannerSection from "@/components/partials/Sections/BannerSection";

const ParlorProfilePage = () => {
  return (
    <main>
      <BannerSection
        title="Profile Settings"
        breadcrumbItems={[
          {
            label: "Home",
            link: "/",
          },
          {
            label: "Profile Setting",
            link: "/parlor/profile",
          },
        ]}
      />
      <ProfileSection />
    </main>
  );
};

export default ParlorProfilePage;
