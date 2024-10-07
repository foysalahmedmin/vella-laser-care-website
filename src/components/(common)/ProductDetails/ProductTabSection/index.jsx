import {
  Tabs,
  TabsContent,
  TabsItem,
  TabsList,
  TabsTrigger,
} from "@/components/ui/Tabs";
import ProductHighlight from "./ProductHighlight";
import ProductKeyBenefits from "./ProductKeyBenefits";
import ProductKeyIngredients from "./ProductKeyIngredients";
import ProductTags from "./ProductTags";

const ProductTabSection = () => {
  return (
    <section className="container">
      <div className="rounded-md">
        <div className="px-6 pb-16 md:px-8 md:pb-24 md:pt-8">
          <Tabs defaultValue="highlight">
            <TabsList className="mb-4 gap-4 border-b md:mb-6 md:justify-start md:gap-6">
              <TabsTrigger value="highlight">
                <span className="inline-block py-1 font-semibold capitalize">
                  Highlight
                </span>
              </TabsTrigger>
              <TabsTrigger value="key-benefits">
                <span className="inline-block py-1 font-semibold capitalize">
                  Key Benefits
                </span>
              </TabsTrigger>
              <TabsTrigger value="key-ingredients">
                <span className="inline-block py-1 font-semibold capitalize">
                  Key Ingredients
                </span>
              </TabsTrigger>
              <TabsTrigger value="product-tags">
                <span className="inline-block py-1 font-semibold capitalize">
                  Product Tags
                </span>
              </TabsTrigger>
            </TabsList>
            <TabsContent>
              <TabsItem value="highlight">
                <ProductHighlight />
              </TabsItem>
              <TabsItem value="key-benefits">
                <ProductKeyBenefits />
              </TabsItem>
              <TabsItem value="key-ingredients">
                <ProductKeyIngredients />
              </TabsItem>
              <TabsItem value="product-tags">
                <ProductTags />
              </TabsItem>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ProductTabSection;
