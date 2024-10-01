import { parlors } from "@/assets/data/parlors";
import ParlorCard from "@/components/partials/Cards/ParlorCard";
import { Button } from "@/components/ui/Button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextTrigger,
  CarouselPreviousTrigger,
} from "@/components/ui/Carousel";
import { SectionTitle, Subtitle, Title } from "@/components/ui/SectionTitle";
import { ArrowRight } from "lucide-react";

const ParlorsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-8 flex items-end justify-between gap-4">
          <SectionTitle className="mb-0 md:mb-0">
            <Title>Our Parlors</Title>
            <Subtitle>Affiliated Parlor Partnership</Subtitle>
          </SectionTitle>
        </div>
        <div>
          <Carousel
            className="group/carousel w-full"
            opts={{ slidesToScroll: "auto", loop: true }}
            autoplay
          >
            <>
              <div className="relative">
                <div className="absolute -top-8 right-0 inline-flex -translate-y-full items-center gap-2">
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
            </>
            <CarouselContent className="py-2">
              {parlors?.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="px-2 md:basis-1/2 lg:basis-1/3"
                >
                  <ParlorCard item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="mt-6 text-center">
          <Button className="mx-auto">
            <span>View More</span> <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ParlorsSection;
