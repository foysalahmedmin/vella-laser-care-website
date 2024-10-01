import { SectionTitle, Subtitle } from "@/components/ui/SectionTitle";

const PartnersSection = () => {
  const partners = [
    "/images/partners/1.png",
    "/images/partners/2.png",
    "/images/partners/3.png",
    "/images/partners/4.png",
    "/images/partners/5.png",
    "/images/partners/6.png",
  ];
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <SectionTitle variant="center">
          <Subtitle>Our Partners</Subtitle>
          <hr className="mx-auto max-w-3xl border-primary" />
        </SectionTitle>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="h-20 w-full overflow-hidden rounded-xl bg-light shadow-custom-1"
            >
              <img
                src={partner}
                alt=""
                className="size-full object-contain object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
