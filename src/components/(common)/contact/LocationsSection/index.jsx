import { Button } from "@/components/ui/Button";
import { Description, SectionTitle, Title } from "@/components/ui/SectionTitle";
import { ArrowUpRight, Building2, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const LocationsSection = () => {
  return (
    <section className="md:text-[0.625rem] lg:text-sm xl:text-base">
      <div className="container">
        <div className="rounded-t-2xl bg-primary/25 pt-16 md:pt-24">
          <div className="relative -mb-[15em] space-y-[2.5em] px-[3em] lg:px-[4em]">
            <SectionTitle className="mb-0" variant="center">
              <Title>Our Locations</Title>
              <Description>
                We’re located in Europe but serve globally
              </Description>
            </SectionTitle>
            <div className="grid gap-[3em] md:grid-cols-3 lg:gap-[4em]">
              <div className="space-y-[1em] rounded-md bg-card px-[1.5em] py-[2.5em] shadow-custom-1">
                <div className="mx-auto grid size-[8em] place-items-center rounded-full border-[.875em] border-primary/25 text-primary">
                  <Building2 className="size-[3.5em]" strokeWidth={0.875} />
                </div>
                <div className="text-center">
                  <h3 className="mb-[0.25em] font-roboto text-[1.5em] leading-none">
                    Head office
                  </h3>
                  <span className="text-[1em] text-muted-foreground">
                    76 Lotas Kamal Tower <br /> Dhaka, Bangladesh
                  </span>
                </div>
              </div>
              <div className="space-y-[1em] rounded-md bg-card px-[1.5em] py-[2.5em] shadow-custom-1">
                <div className="mx-auto grid size-[8em] place-items-center rounded-full border-[.875em] border-primary/25 text-primary">
                  <Phone className="size-[3.5em]" strokeWidth={0.875} />
                </div>
                <div className="text-center">
                  <h3 className="mb-[0.25em] font-roboto text-[1.5em] leading-none">
                    Contact us
                  </h3>
                  <span className="text-[1em] text-muted-foreground">
                    999-999-999
                  </span>
                </div>
              </div>
              <div className="space-y-[1em] rounded-md bg-card px-[1.5em] py-[2.5em] shadow-custom-1">
                <div className="mx-auto grid size-[8em] place-items-center rounded-full border-[.875em] border-primary/25 text-primary">
                  <Mail className="size-[3.5em]" strokeWidth={0.875} />
                </div>
                <div className="text-center">
                  <h3 className="mb-[0.25em] font-roboto text-[1.5em] leading-none">
                    Email
                  </h3>
                  <span className="text-[1em] text-muted-foreground">
                    support@gmail.com
                  </span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link className="inline-block rounded-md bg-card">
                <Button asChild={true}>
                  <span className="uppercase">Explore map</span>{" "}
                  <ArrowUpRight className="size-[1em]" />{" "}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: "url('/images/backgrounds/map-background.png')",
        }}
        className="bg-cover bg-center bg-no-repeat pb-16 md:pb-24"
      >
        <div className="h-[16em]" />
      </div>
    </section>
  );
};

export default LocationsSection;
