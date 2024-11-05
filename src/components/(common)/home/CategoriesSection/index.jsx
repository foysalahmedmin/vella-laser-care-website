import { urls } from "@/api/urls.js";
import { SectionTitle, Subtitle, Title } from "@/components/ui/SectionTitle";
import { fetchFilteredShopCategories } from "@/pages/(common)/HomePage/homeApis.js";
import { useQuery } from "@tanstack/react-query";

const CategoriesSection = ({ lang }) => {
  const { data } = useQuery({
    queryKey: ["filtered_categories"],
    queryFn: () => fetchFilteredShopCategories(),
  });
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <SectionTitle variant="center" className="md:mb-10">
          <Subtitle>
            {lang === "en"
              ? "Healthy Skin & Natural"
              : "প্রাকৃতিক ও স্বাস্থ্যকর ত্বক"}
          </Subtitle>
          <Title className="text-title">
            {lang === "en" ? "Shop By Category" : "রক্যাটাগরি অনুযায়ী কিনুন।"}
          </Title>
        </SectionTitle>
        <div className="grid grid-cols-1 gap-4 gap-y-8 md:grid-cols-2 lg:grid-cols-5">
          {data?.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center self-stretch"
            >
              <div className="h-28 w-full rounded-2xl bg-primary/5" />
              <div className="relative -mt-24 w-full px-4">
                <div className="flex aspect-square h-60 w-full items-center justify-center overflow-hidden rounded-xl bg-card shadow-custom-1">
                  <img
                    className="size-full object-contain object-center"
                    src={`${urls?.shop_category_icon}/${category?.icon}`}
                    alt={category.name}
                  />
                </div>
              </div>
              <h3 className="mt-4 text-center font-roboto text-lg font-semibold">
                {lang === "en" ? category?.name : category?.name_bn}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
