import { serviceCentreData } from "@/assets/data/service-centre-data";
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

const ParlorDetailsSection = ({ lang }) => {
  const data = serviceCentreData;
  return (
    <section className="py-16 md:py-24">
      <div className="container space-y-8 md:space-y-12">
        <div className="space-y-6">
          <img
            className="h-[28rem] w-full rounded-t-2xl object-cover object-center"
            src="/images/parlors/parlor-banner.png"
            alt="parlor-banner"
          />
          <div className="flex justify-between">
            <div className="space-y-2">
              <h4 className="text-title/85">Aparupa Beauty Parlour</h4>
              <span className="flex items-center gap-2">
                <span className="inline-flex aspect-square size-4 items-center justify-center rounded-full border border-primary text-primary">
                  <MapPin size={10} />
                </span>
                <span className="text-sm font-semibold">
                  76 Lotas Kamal Tower Dhaka, Bangladesh
                </span>
              </span>
            </div>
            <div>
              <ul className="flex flex-wrap items-center gap-2">
                <li className="rounded bg-primary/15 px-2 py-1 text-xs font-semibold text-primary">
                  Acne Treatmeant
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <SectionTitle className="mb-6">
            <Title>Description</Title>
          </SectionTitle>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
            error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias
            eos sapiente officiis modi at sunt excepturi expedita sint? Sed
            quibusdam recusandae alias error harum maxime adipisci amet laborum.
            Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates
            a cumque velit quibusdam sed amet tempora.
          </p>
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
                  {data?.map((item, index) => (
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
