import { SectionTitle, Subtitle, Title } from "@/components/ui/SectionTitle";

const GallerySection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <SectionTitle variant="center">
          <Subtitle>Our Gallery</Subtitle>
          <Title>Before and After</Title>
        </SectionTitle>
        <div className="grid grid-cols-12 items-center gap-4 md:gap-6">
          <div className="col-span-3">
            <div className="relative aspect-[1/1] w-full overflow-hidden rounded-xl">
              <img
                className="absolute right-0 top-0 z-10 size-full object-cover"
                src="/images/service-details/gallery-2.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-span-6">
            <div className="relative aspect-[6/4] w-full overflow-hidden rounded-xl">
              <img
                className="absolute right-0 top-0 z-10 size-full object-cover"
                src="/images/service-details/gallery-1.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-span-3">
            <div className="relative aspect-[1/1] w-full overflow-hidden rounded-xl">
              <img
                className="absolute right-0 top-0 z-10 size-full object-cover"
                src="/images/service-details/gallery-3.png"
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
