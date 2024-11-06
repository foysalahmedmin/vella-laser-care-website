import { SectionTitle, Subtitle } from "@/components/ui/SectionTitle";

const PartnersSection = ({ lang }) => {
  const partners = ["/images/partners/vs.jpg", "/images/partners/vc.png"];
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <SectionTitle variant="center">
          <Subtitle>
            {lang === "en" ? "Our Concerns" : "আমাদের অংশীদারগণ"}
          </Subtitle>
          <hr className="mx-auto max-w-3xl border-primary" />
        </SectionTitle>
        <div className="flex justify-center gap-4">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="h-20 w-60 overflow-hidden rounded-xl bg-light shadow-custom-1"
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
