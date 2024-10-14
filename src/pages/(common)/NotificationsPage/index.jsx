import NotificationsSection from "@/components/(common)/notifications/NotificationsSection";
import BannerSection from "@/components/partials/Sections/BannerSection";

const NotificationsPage = () => {
  return (
    <main>
      <BannerSection
        title="Notifications"
        breadcrumbItems={[
          {
            label: "Home",
            link: "/",
          },
          {
            label: "Notifications",
            link: "/notifications",
          },
        ]}
      />
      <NotificationsSection />
    </main>
  );
};

export default NotificationsPage;
