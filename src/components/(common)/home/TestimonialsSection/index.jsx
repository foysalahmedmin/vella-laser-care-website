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

const TestimonialsSection = () => {
  return (
    <section className="pb-16 md:pb-24">
      <div className="container">
        <SectionTitle variant="center" className="md:mb-10">
          <Subtitle>Our Testimonials</Subtitle>
          <Title className="text-title">What Our Customer Says?</Title>
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
                  className="px-2 md:basis-1/2 lg:basis-1/3"
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
