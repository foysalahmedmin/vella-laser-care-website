import { productDetails } from "@/assets/data/product-details";
import ProductPs from "./ProductPs";
import ProductThumbnail from "./ProductThumbnail";

const ProductSection = () => {
  const product = productDetails || {};

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div>
          <div className="flex flex-col items-center gap-y-6 md:gap-x-8 lg:flex-row xl:gap-x-12">
            <ProductThumbnail product={product} />
            <ProductPs product={product} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
