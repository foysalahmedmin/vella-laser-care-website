import CustomerRequestSection from "@/components/(parlor)/customer-request/CustomerRequestSection";
import BannerSection from "@/components/partials/Sections/BannerSection";

const CustomerRequestPage = () => {
  return (
    <main>
      <BannerSection
        title="Customer request"
        breadcrumbItems={[
          {
            label: "Home",
            link: "/",
          },
          {
            label: "Customer request",
            link: "/parlor/customer-request",
          },
        ]}
      />
      <CustomerRequestSection />
    </main>
  );
};

export default CustomerRequestPage;
