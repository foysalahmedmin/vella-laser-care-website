import { testimonials } from "@/assets/data/testimonials";
import TestimonialCard from "@/components/partials/Cards/TestimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextTrigger,
  CarouselPreviousTrigger,
} from "@/components/ui/Carousel";
import { SectionTitle, Subtitle, Title } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";

const TestimonialsSection = ({ className, lang }) => {
  return (
    <section className={cn("pb-16 md:pb-24", className)}>
      <div className="container">
        <SectionTitle variant="center" className="md:mb-10">
          <Subtitle>
            {lang === "en" ? "Our Testimonials" : "আমাদের সুখ্যাতি"}
          </Subtitle>
          <Title className="text-title">
            {lang === "en"
              ? "What Our Customer Says?"
              : "আমাদের সম্মানীয় গ্রাহকদের মতামত"}
          </Title>
        </SectionTitle>
      </div>
      <div>
        <Carousel
          className="group/carousel container relative"
          opts={{ slidesToScroll: "auto", loop: true }}
          autoplay
        >
          <div className="px-8">
            <CarouselContent>
              {testimonials.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 md:px-4 lg:basis-1/3 xl:px-5"
                >
                  <TestimonialCard item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
          <CarouselPreviousTrigger
            className="invisible absolute left-4 -translate-x-4 rounded-full opacity-0 transition-all duration-300 group-hover/carousel:visible group-hover/carousel:translate-x-0 group-hover/carousel:opacity-100 md:inline-flex"
            size="icon-sm"
          />
          <CarouselNextTrigger
            className="invisible absolute right-4 translate-x-4 rounded-full opacity-0 transition-all duration-300 group-hover/carousel:visible group-hover/carousel:translate-x-0 group-hover/carousel:opacity-100 md:inline-flex"
            size="icon-sm"
          />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
