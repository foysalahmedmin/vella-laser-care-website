import { SectionTitle, Subtitle, Title } from "@/components/ui/SectionTitle";

const CategoriesSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <SectionTitle variant="center" className="md:mb-10">
          <Subtitle>Healthy Skin & Natural</Subtitle>
          <Title className="text-title">Shop By Category</Title>
        </SectionTitle>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">

        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
