import { serviceCentreData } from "@/assets/data/service-centre-data";
import ServiceCard from "@/components/partials/Cards/ServiceCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextTrigger,
  CarouselPreviousTrigger,
} from "@/components/ui/Carousel";
import { SectionTitle, Subtitle, Title } from "@/components/ui/SectionTitle";
import { Link } from "react-router-dom";

const ServiceCentreSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-10 flex items-end justify-between gap-4 md:mb-16">
          <SectionTitle className="mb-0 md:mb-0">
            <Subtitle>Healthy Skin & Natural</Subtitle>
            <Title>What We Treat In Centre</Title>
          </SectionTitle>
          <div className="mr-24 max-w-[26rem] space-y-4 text-sm">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ex
              cum odio ullam repudiandae eveniet assumenda ea dolore.
            </p>
            <Link to={""} className="block font-bold text-title underline">
              Browse All Skincare Treaments
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Carousel
          className="group/carousel w-full"
          opts={{ slidesToScroll: "auto", loop: true }}
          autoplay
        >
          <div className="container">
            <div className="relative">
              <div className="absolute -top-10 right-0 inline-flex -translate-y-full items-center gap-2 md:-top-16">
                <CarouselPreviousTrigger
                  className="static bottom-0 top-0 inline-flex -translate-y-0 rounded-full transition-all duration-300"
                  size="icon-sm"
                />
                <CarouselNextTrigger
                  className="static bottom-0 top-0 inline-flex -translate-y-0 rounded-full transition-all duration-300"
                  size="icon-sm"
                />
              </div>
            </div>
          </div>
          <CarouselContent>
            {serviceCentreData?.map((item, index) => (
              <CarouselItem
                key={index}
                className="px-2 md:basis-1/2 md:odd:pb-14 md:even:pt-14 xl:basis-1/4 3xl:basis-1/6"
              >
                <ServiceCard item={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ServiceCentreSection;
