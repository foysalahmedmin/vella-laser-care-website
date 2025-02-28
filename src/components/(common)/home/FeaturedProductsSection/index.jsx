import ProductCard from "@/components/partials/Cards/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextTrigger,
  CarouselPreviousTrigger,
} from "@/components/ui/Carousel";
import { SectionTitle, Subtitle, Title } from "@/components/ui/SectionTitle";
import { fetchFeaturedProducts } from "@/pages/(common)/HomePage/homeApis.js";
import { useQuery } from "@tanstack/react-query";

const FeaturedProductsSection = ({ lang }) => {
  const { data } = useQuery({
    queryKey: ["featured_products"],
    queryFn: () => fetchFeaturedProducts(),
  });
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
            <Title className="dark text-title">
              {lang === "en" ? "Featured Products" : "আকর্ষণীয় পণ্যসমূহ"}
            </Title>
            <Subtitle className="dark text-title">
              {lang === "en"
                ? "Shop now: Limited quantities only!"
                : "এখনই অর্ডার করুন, অফারটি সীমিত সময়ে্র জন্য!"}
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
                <div className="absolute -top-10 right-0 inline-flex -translate-y-full items-center gap-2">
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
              {data?.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="px-2 md:basis-1/2 xl:basis-1/4"
                >
                  <ProductCard
                    lang={lang}
                    item={item}
                    variant="home"
                    className="h-full"
                  />
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
