import { categories } from "@/assets/data/categories";
import { SectionTitle, Subtitle, Title } from "@/components/ui/SectionTitle";

const CategoriesSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <SectionTitle variant="center" className="md:mb-10">
          <Subtitle>Healthy Skin & Natural</Subtitle>
          <Title className="text-title">Shop By Category</Title>
        </SectionTitle>
        <div className="grid grid-cols-1 gap-4 gap-y-8 md:grid-cols-2 lg:grid-cols-5">
          {categories.map((category) => (
            <div key={category.id} className="flex flex-col items-center">
              <div className="h-28 w-full rounded-2xl bg-primary/5" />
              <div className="relative -mt-24 w-full px-4">
                <div className="shadow-custom-1 flex aspect-square w-full items-center justify-center rounded-xl bg-card">
                  <img src={category.image} alt={category.title} />
                </div>
              </div>
              <h3 className="mt-4 text-center font-roboto text-lg font-semibold">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
