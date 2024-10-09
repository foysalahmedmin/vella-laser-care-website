import ProductSection from "@/components/(common)/product-details/ProductSection";
import ProductTabSection from "@/components/(common)/product-details/ProductTabSection";
import SubscriptionSection from "@/components/partials/Sections/SubscriptionSection";
import TestimonialsSection from "@/components/partials/Sections/TestimonialsSection";
import { fetchOneProduct } from "@/pages/(common)/ShopPage/shopApis.js";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const { data } = useQuery({
    queryKey: ["one_product", id],
    queryFn: () => fetchOneProduct(id),
    enabled: !!id,
  });
  console.log(data);
  return (
    <main>
      <ProductSection info={data} lang={i18n?.language} />
      <ProductTabSection info={data} lang={i18n?.language} />
      <TestimonialsSection lang={i18n?.language} />
      <SubscriptionSection lang={i18n?.language} className="py-16 md:py-24" />
    </main>
  );
};

export default ProductDetailsPage;
