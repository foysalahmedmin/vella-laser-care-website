import ServiceCard from "@/components/partials/Cards/ServiceCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextTrigger,
  CarouselPreviousTrigger,
} from "@/components/ui/Carousel";
import { SectionTitle, Title } from "@/components/ui/SectionTitle";
import { MapPin } from "lucide-react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchFeaturedServices } from "@/pages/(common)/HomePage/homeApis.js";
import { fetchOneParlor } from "@/pages/(common)/ParlorPage/parlorApis.js";
import { urls } from "@/api/urls.js";

const ParlorDetailsSection = ({ lang }) => {
  const { id } = useParams();
  const { data: parlor } = useQuery({
    queryKey: ["parlor", id],
    queryFn: () => fetchOneParlor(id),
    enabled: !!id,
  });
  const { data: services } = useQuery({
    queryKey: ["services"],
    queryFn: () => fetchFeaturedServices(),
  });
  return (
    <section className="py-16 md:py-24">
      <div className="container space-y-8 md:space-y-12">
        <div className="space-y-6">
          <img
            className="h-[28rem] w-full rounded-t-2xl object-cover object-center"
            src={`${urls?.parlor_banner}/${parlor?.banner}`}
            alt="parlor-banner"
          />
          <div className="flex justify-between">
            <div className="space-y-2">
              <h4 className="text-title/85">{parlor?.name}</h4>
              <span className="flex items-center gap-2">
                <span className="inline-flex aspect-square size-4 items-center justify-center rounded-full border border-primary text-primary">
                  <MapPin size={10} />
                </span>
                <span className="text-sm font-semibold">{parlor?.address}</span>
              </span>
            </div>
            <div>
              <ul className="flex flex-wrap items-center gap-2">
                {parlor?.tags?.map((tag, index) => (
                  <li
                    key={index}
                    className="rounded bg-primary/15 px-2 py-1 text-xs font-semibold text-primary"
                  >
                    {lang === "en" ? tag?.name : tag?.name_bn}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <SectionTitle className="mb-6">
            <Title>{lang === "en" ? "Description" : "Description"}</Title>
          </SectionTitle>
          <p>{lang === "en" ? parlor?.description : parlor?.description_bn}</p>
        </div>
        <div>
          <SectionTitle className="mb-6">
            <Title>Services</Title>
          </SectionTitle>
          <div className="w-full">
            <Carousel
              className="group/carousel w-full"
              opts={{ slidesToScroll: "auto", loop: true }}
              autoplay
            >
              <div className="relative">
                <div className="absolute -top-6 right-0 inline-flex -translate-y-full items-center gap-2">
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
              <div>
                <CarouselContent>
                  {services?.map((item, index) => (
                    <CarouselItem
                      key={index}
                      className="px-2 md:basis-1/2 lg:basis-1/3"
                    >
                      <ServiceCard lang={lang} item={item} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParlorDetailsSection;
