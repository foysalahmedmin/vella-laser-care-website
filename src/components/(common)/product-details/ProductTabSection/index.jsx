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

const ProductTabSection = ({ info, lang }) => {
  return (
    <section className="container">
      <div className="rounded-md">
        <div className="px-6 pb-16 md:px-8 md:pb-24 md:pt-8">
          <Tabs value="highlight">
            <TabsList className="mb-4 gap-4 border-b md:mb-6 md:justify-start md:gap-6">
              <TabsTrigger value="highlight">
                <span className="inline-block py-1 font-semibold capitalize">
                  {lang === "en" ? "Highlight" : "Highlight"}
                </span>
              </TabsTrigger>
              <TabsTrigger value="key-benefits">
                <span className="inline-block py-1 font-semibold capitalize">
                  {lang === "en" ? "Key Benefits" : "Key Benefits"}
                </span>
              </TabsTrigger>
              <TabsTrigger value="key-ingredients">
                <span className="inline-block py-1 font-semibold capitalize">
                  {lang === "en" ? "Key Ingredients" : "Key Ingredients"}
                </span>
              </TabsTrigger>
              <TabsTrigger value="product-tags">
                <span className="inline-block py-1 font-semibold capitalize">
                  {lang === "en" ? "Product Tags" : "Product Tags"}
                </span>
              </TabsTrigger>
            </TabsList>
            <TabsContent>
              <TabsItem value="highlight">
                <ProductHighlight
                  highlight={info?.highlight}
                  lang={lang}
                  highlight_bn={info?.highlight_bn}
                />
              </TabsItem>
              <TabsItem value="key-benefits">
                <ProductKeyBenefits
                  lang={lang}
                  key_benefits={info?.key_benefits}
                />
              </TabsItem>
              <TabsItem value="key-ingredients">
                <ProductKeyIngredients
                  key_ingredients={info?.key_ingredients}
                  key_ingredients_bn={info?.key_ingredients_bn}
                  lang={lang}
                />
              </TabsItem>
              <TabsItem value="product-tags">
                <ProductTags lang={lang} tags={info?.tags} />
              </TabsItem>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ProductTabSection;
