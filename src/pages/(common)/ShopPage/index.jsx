import ProductsSection from "@/components/(common)/shop/ProductsSection";
import BannerSection from "@/components/partials/Sections/BannerSection";
import SubscriptionSection from "@/components/partials/Sections/SubscriptionSection";
import { useTranslation } from "react-i18next";

const ShopPage = () => {
  const { i18n } = useTranslation();
  return (
    <main>
      <BannerSection
        title="Shop All"
        breadcrumbItems={[
          { label: "Home", path: "/" },
          { label: "Shop All", path: "/shop" },
        ]}
      />
      <ProductsSection lang={i18n.language} />
      <SubscriptionSection lang={i18n.language} className="pb-16" />
    </main>
  );
};

export default ShopPage;
