import { Vector, VectorGroup } from "@/assets/svg/icons/Vector";
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

const BannerSection = ({ lang }) => {
  const data = [
    {
      title: `Largest Collection
      of Bangladeshi Skincare`,
      title_bn: `Largest Collection
      of Bangladeshi Skincare`,
      subTitle: "Largest and Latest Collection of Bangladeshi skincare",
      subTitleBn: "Largest and Latest Collection of Bangladeshi skincare",
      image: {
        src: "/images/home/home-banner-image.png",
        alt: "home-slider-image-1",
      },
      button: {
        label: "Book an appointment",
        label_bn: "Book an appointment",
        path: "/shop",
        icon: CalendarCheck,
      },
    },
    {
      title: `Largest Collection
      of Bangladeshi Skincare`,
      title_bn: `Largest Collection
      of Bangladeshi Skincare`,
      subTitle: "Largest and Latest Collection of Bangladeshi skincare",
      subTitleBn: "Largest and Latest Collection of Bangladeshi skincare",
      isRegister: true,
      image: {
        src: "/images/home/home-banner-image.png",
        alt: "home-slider-image-1",
      },
      button: {
        label: "Book an appointment",
        label_bn: "Book an appointment",
        path: "/shop",
        icon: CalendarCheck,
      },
    },
  ];
  return (
    <section className="relative bg-primary/5">
      <div>
        <VectorGroup className="absolute left-1/2 top-12 text-5xl text-primary/25" />
        <Vector className="absolute bottom-12 left-1/4 text-3xl text-primary/25" />
        <Vector className="absolute bottom-12 right-[45%] text-5xl text-primary/25" />
      </div>
      <Carousel
        className="group/carousel relative z-10"
        opts={{ loop: true }}
        autoplay
      >
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem key={index} className="group/slide">
              <BannerSlide lang={lang} item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPreviousTrigger
          className="invisible absolute left-4 hidden -translate-x-4 rounded-full opacity-0 transition-all duration-300 group-hover/carousel:visible group-hover/carousel:translate-x-0 group-hover/carousel:opacity-100 md:inline-flex"
          size="icon-sm"
        />
        <CarouselNextTrigger
          className="invisible absolute right-4 hidden translate-x-4 rounded-full opacity-0 transition-all duration-300 group-hover/carousel:visible group-hover/carousel:translate-x-0 group-hover/carousel:opacity-100 md:inline-flex"
          size="icon-sm"
        />
        <CarouselPagination />
      </Carousel>
    </section>
  );
};

export default BannerSection;
