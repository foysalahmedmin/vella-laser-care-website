import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextTrigger,
  CarouselPagination,
  CarouselPreviousTrigger,
} from "@/components/ui/Carousel";
import { CalendarCheck } from "lucide-react";
import BannerSlide from "./BannerSlide";

const BannerSection = () => {
  const data = [
    {
      title: `Largest Collection
      of Bangladeshi Skincare`,
      subTitle: "Largest and Latest Collection of Bangladeshi skincare",
      image: {
        src: "/images/home/home-banner-image.png",
        alt: "home-slider-image-1",
      },
      button: {
        label: "Book an appointment",
        path: "/shop",
        icon: CalendarCheck,
      },
    },
    {
      title: `Largest Collection
      of Bangladeshi Skincare`,
      subTitle: "Largest and Latest Collection of Bangladeshi skincare",
      image: {
        src: "/images/home/home-banner-image.png",
        alt: "home-slider-image-1",
      },
      button: {
        label: "Book an appointment",
        path: "/shop",
        icon: CalendarCheck,
      },
    },
  ];
  return (
    <section className="bg-primary/5">
      <Carousel
        className="group/carousel relative"
        opts={{ loop: true }}
        autoplay
      >
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem key={index} className="group/slide">
              <BannerSlide item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPreviousTrigger
          className="invisible absolute left-8 hidden -translate-x-full rounded-full opacity-0 transition-all duration-300 group-hover/carousel:visible group-hover/carousel:translate-x-0 group-hover/carousel:opacity-100 md:inline-flex"
          size="icon-sm"
        />
        <CarouselNextTrigger
          className="invisible absolute right-8 hidden translate-x-full rounded-full opacity-0 transition-all duration-300 group-hover/carousel:visible group-hover/carousel:translate-x-0 group-hover/carousel:opacity-100 md:inline-flex"
          size="icon-sm"
        />
        <CarouselPagination />
      </Carousel>
    </section>
  );
};

export default BannerSection;
