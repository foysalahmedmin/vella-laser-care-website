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
      title: `Transform Your Skin Today`,
      title_bn: `আজই বদলে ফেলুন আপনার ত্বক`,
      subTitle: "Glow Like Never Before",
      subTitleBn: "চমক দিন নতুন রূপ",
      image: {
        src: "/images/home/home-banner-image.png",
        alt: "home-slider-image-1",
      },
      button: {
        label: "Shop",
        label_bn: "Shop",
        path: "/shop",
        icon: CalendarCheck,
      },
    },
    {
      title: `Feel the glow, embrace a new level of beauty.`,
      title_bn: `অনুভব করুন আপনার উজ্জ্বলতাকে, যা আপনার সৌন্দর্য যোগ করবে এক অন্যন্য মাত্রা`,
      subTitle: "At Our Registered Beauty Parlor, Transformation Awaits!",
      subTitleBn: "আমাদের নিবন্ধিত বিউটি পার্লারে, আমরা আছি আপনার অপেক্ষায়",
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
