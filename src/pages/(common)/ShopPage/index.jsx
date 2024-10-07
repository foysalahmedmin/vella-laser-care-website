import ProductsSection from "@/components/(common)/shop/ProductsSection";
import BannerSection from "@/components/partials/Sections/BannerSection";
import SubscriptionSection from "@/components/partials/Sections/SubscriptionSection";

const ShopPage = () => {
  return (
    <main>
      <BannerSection
        title="Shop All"
        breadcrumbItems={[
          { label: "Home", path: "/" },
          { label: "Shop All", path: "/shop" },
        ]}
      />
      <ProductsSection />
      <SubscriptionSection className="pb-16" />
    </main>
  );
};

export default ShopPage;
