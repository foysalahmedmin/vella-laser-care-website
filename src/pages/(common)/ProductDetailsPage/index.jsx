import ProductSection from "@/components/(common)/ProductDetails/ProductSection";
import ProductTabSection from "@/components/(common)/ProductDetails/ProductTabSection";
import SubscriptionSection from "@/components/partials/Sections/SubscriptionSection";
import TestimonialsSection from "@/components/partials/Sections/TestimonialsSection";

const ProductDetailsPage = () => {
  return (
    <main>
      <ProductSection />
      <ProductTabSection />
      <TestimonialsSection />
      <SubscriptionSection className="py-16 md:py-24" />
    </main>
  );
};

export default ProductDetailsPage;
