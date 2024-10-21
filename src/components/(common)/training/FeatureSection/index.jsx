import { Vector, VectorGroup } from "@/assets/svg/icons/Vector";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextTrigger,
  CarouselPreviousTrigger,
} from "@/components/ui/Carousel";
import { SectionTitle, Title } from "@/components/ui/SectionTitle";
import ReactPlayer from "react-player";

const videos = [
  {
    title: "How to use the product",
    video: "https://www.youtube.com/watch?v=aDlv2UX1lA8",
  },
  {
    title: "How to use the product",
    video: "https://www.youtube.com/watch?v=aDlv2UX1lA8",
  },
  {
    title: "How to use the product",
    video: "https://www.youtube.com/watch?v=aDlv2UX1lA8",
  },
  {
    title: "How to use the product",
    video: "https://www.youtube.com/watch?v=aDlv2UX1lA8",
  },
  {
    title: "How to use the product",
    video: "https://www.youtube.com/watch?v=aDlv2UX1lA8",
  },
];

const FeatureSection = () => {
  return (
    <section className="relative bg-primary/5 py-16 md:py-24">
      <div>
        <VectorGroup className="absolute left-1/4 top-12 text-5xl text-primary/25" />
        <Vector className="absolute right-1/4 top-12 text-5xl text-primary/25" />
      </div>
      <div>
        <div className="container">
          <SectionTitle variant="center">
            <Title>
              Have questions? <br />
              Our tutors have the answers
            </Title>
          </SectionTitle>
        </div>
        <div>
          <Carousel
            className="group/carousel relative"
            opts={{ loop: true }}
            autoplay
          >
            <div className="container">
              <CarouselContent>
                {videos.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="group/slide px-2 md:basis-1/2 xl:basis-1/4"
                  >
                    <div className="w-full space-y-2 text-center">
                      <div className="relative aspect-[6/4] w-full max-w-xl overflow-hidden rounded-2xl">
                        <ReactPlayer
                          url={item.video}
                          controls
                          width="100%"
                          height="100%"
                        />
                      </div>
                      <div>
                        <h4>{item.title}</h4>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>
            <CarouselPreviousTrigger
              className="invisible absolute left-4 hidden -translate-x-4 rounded-full opacity-0 transition-all duration-300 group-hover/carousel:visible group-hover/carousel:translate-x-0 group-hover/carousel:opacity-100 md:inline-flex"
              size="icon-sm"
            />
            <CarouselNextTrigger
              className="invisible absolute right-4 hidden translate-x-4 rounded-full opacity-0 transition-all duration-300 group-hover/carousel:visible group-hover/carousel:translate-x-0 group-hover/carousel:opacity-100 md:inline-flex"
              size="icon-sm"
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
