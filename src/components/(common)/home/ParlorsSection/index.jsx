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
import { fetchAffiliatedParlors } from "@/pages/(common)/HomePage/homeApis.js";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";

const ParlorsSection = ({ lang }) => {
  const { data } = useQuery({
    queryKey: ["parlors"],
    queryFn: () => fetchAffiliatedParlors(),
  });
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-8 flex items-end justify-between gap-4">
          <SectionTitle className="mb-0 md:mb-0">
            <Title>
              {lang === "en" ? "Our Parlors" : "আমাদের পার্লারসমূহ"}
            </Title>
            <Subtitle>
              {lang === "en"
                ? "Affiliated Parlor Partnership"
                : "পার্লারের অংশীদারিতে যারা অন্তর্ভুক্ত"}
            </Subtitle>
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
              {data?.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 md:px-3 lg:basis-1/3"
                >
                  <ParlorCard lang={lang} item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="mt-6 text-center">
          <Button className="mx-auto">
            <span>{lang === "en" ? "View More" : "বিস্তারিত দেখুন"}</span>{" "}
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ParlorsSection;
