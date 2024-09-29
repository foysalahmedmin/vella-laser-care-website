import { products } from "@/assets/data/products";
import ProductCard from "@/components/partials/Cards/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextTrigger,
  CarouselPreviousTrigger,
} from "@/components/ui/Carousel";
import { SectionTitle, Subtitle, Title } from "@/components/ui/SectionTitle";

const FeaturedProductsSection = () => {
  return (
    <section>
      <div
        style={{
          backgroundImage: `url('/images/home/featured-products-background.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "hsl(var(--primary))",
        }}
        className="container rounded-t-3xl py-16 md:py-24"
      >
        <div className="mb-10 flex items-end justify-between gap-4">
          <SectionTitle className="mb-0 md:mb-0">
            <Title className="dark text-title">Featured Products</Title>
            <Subtitle className="dark text-title">
              Shop now: Limited quantities only!
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
                <div className="absolute -top-10 right-0 inline-flex -translate-y-full items-center gap-2 md:-top-16">
                  <CarouselPreviousTrigger
                    className="static bottom-0 top-0 inline-flex -translate-y-0 rounded-full bg-light text-primary transition-all duration-300 hover:bg-light/75"
                    size="icon-sm"
                  />
                  <CarouselNextTrigger
                    className="static bottom-0 top-0 inline-flex -translate-y-0 rounded-full bg-light text-primary transition-all duration-300 hover:bg-light/75"
                    size="icon-sm"
                  />
                </div>
              </div>
            </>
            <CarouselContent>
              {products?.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="px-2 md:basis-1/2 xl:basis-1/4"
                >
                  <ProductCard item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
