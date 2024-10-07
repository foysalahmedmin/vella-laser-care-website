import ProductsSection from "@/components/(common)/shop/ProductsSection";
import BannerSection from "@/components/partials/Sections/BannerSection";

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
    </main>
  );
};

export default ShopPage;
