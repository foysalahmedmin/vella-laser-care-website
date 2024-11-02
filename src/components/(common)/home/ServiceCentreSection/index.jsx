import ServiceCard from "@/components/partials/Cards/ServiceCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextTrigger,
  CarouselPreviousTrigger,
} from "@/components/ui/Carousel";
import { SectionTitle, Subtitle, Title } from "@/components/ui/SectionTitle";
import { fetchFeaturedServices } from "@/pages/(common)/HomePage/homeApis.js";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const ServiceCentreSection = ({ lang }) => {
  const { data } = useQuery({
    queryKey: ["featured_services"],
    queryFn: () => fetchFeaturedServices(),
  });
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-10 flex items-end justify-between gap-4 md:mb-16">
          <SectionTitle className="mb-0 md:mb-0">
            <Subtitle>
              {lang === "en"
                ? "Healthy Skin & Natural"
                : "Healthy Skin & Natural"}
            </Subtitle>
            <Title>
              {lang === "en"
                ? "Bringing Out Your Natural Glow with Our Specialized Treatments"
                : "আমাদের বিশেষ ট্রিটমেন্টে উজ্জ্বল করুন আপনার প্রাকৃতিক সৌন্দর্য"}
            </Title>
          </SectionTitle>
          <div className="mr-24 max-w-[26rem] space-y-4 text-sm">
            <p>
              {lang === "en"
                ? "Bring Out Your Natural Glow with Our Expertly Tailored Treatment Discover smoother, brighter, and more youthful skin with our advanced skincare solutions designed to enhance your natural radiance."
                : "আপনার প্রাকৃতিক উজ্জ্বলতা প্রকাশ করুন আমাদের বিশেষায়িত ট্রিটমেন্টের মাধ্যমে আমাদের উন্নত স্কিনকেয়ার সমাধান দিয়ে খুঁজে নিন মসৃণ, উজ্জ্বল ও আরও তারুণ্যভরা ত্বক।"}
            </p>
            <Link to={""} className="block font-bold text-title underline">
              {lang === "en"
                ? "Browse All Skincare Treatments"
                : "আমাদের সব স্কিনকেয়ার ট্রিটমেন্ট দেখুন"}
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
          <div className="mx-auto max-w-[120rem] px-container">
            <CarouselContent>
              {data?.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="px-2 md:basis-1/2 md:odd:pb-14 md:even:pt-14 xl:basis-1/4"
                >
                  <ServiceCard lang={lang} item={item} variant="home" />
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default ServiceCentreSection;
