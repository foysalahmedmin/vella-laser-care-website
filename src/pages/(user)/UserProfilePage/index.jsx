import ProfileSection from "@/components/(user)/profile/ProfileSection";
import BannerSection from "@/components/partials/Sections/BannerSection";

const UserProfilePage = () => {
  return (
    <main>
      <BannerSection
        title="Profile Settings"
        breadcrumbItems={[
          {
            label: "Home",
            path: "/",
          },
          {
            label: "Profile Setting",
            path: "/user/profile",
          },
        ]}
      />
      <ProfileSection />
    </main>
  );
};

export default UserProfilePage;
