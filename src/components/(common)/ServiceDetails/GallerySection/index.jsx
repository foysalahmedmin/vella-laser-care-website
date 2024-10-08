import { SectionTitle, Subtitle, Title } from "@/components/ui/SectionTitle";
import { urls } from "@/api/urls.js";

const GallerySection = ({ info, lang }) => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <SectionTitle variant="center">
          <Subtitle>{lang === "en" ? "Our Gallery" : "Our Gallery"}</Subtitle>
          <Title>
            {lang === "en" ? "Before and After" : "Before and After"}
          </Title>
        </SectionTitle>
        <div className="grid grid-cols-12 items-center gap-4 md:gap-6">
          <div className="col-span-3">
            <div className="relative aspect-[1/1] w-full overflow-hidden rounded-xl">
              <img
                className="absolute right-0 top-0 z-10 size-full object-cover"
                src={`${urls?.service_compare}/${info?.before_after_1}`}
                alt=""
              />
            </div>
          </div>
          <div className="col-span-6">
            <div className="relative aspect-[6/4] w-full overflow-hidden rounded-xl">
              <img
                className="absolute right-0 top-0 z-10 size-full object-cover"
                src={`${urls?.service_compare}/${info?.before_after_2}`}
                alt=""
              />
            </div>
          </div>
          <div className="col-span-3">
            <div className="relative aspect-[1/1] w-full overflow-hidden rounded-xl">
              <img
                className="absolute right-0 top-0 z-10 size-full object-cover"
                src={`${urls?.service_compare}/${info?.before_after_3}`}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
