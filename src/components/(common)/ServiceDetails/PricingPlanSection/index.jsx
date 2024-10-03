import { Button } from "@/components/ui/Button";
import { SectionTitle, Subtitle, Title } from "@/components/ui/SectionTitle";
import { ArrowUpRight, Check } from "lucide-react";

const PricingPlanSection = () => {
  return (
    <section className="pb-16 md:pb-24">
      <div className="container">
        <div
          style={{
            backgroundImage:
              "url('/images/home/consultation-schedule-background.png')",
          }}
          className="h-[25rem] rounded-xl bg-cover bg-top bg-no-repeat"
        />
        <div className="relative -mt-[25rem]">
          <div className="px-16 pt-16 md:px-24 xl:px-32">
            <SectionTitle variant="center">
              <Subtitle>Pricing Plan</Subtitle>
              <Title>Our Pricing Plan</Title>
            </SectionTitle>
            <div className="grid gap-8 md:grid-cols-2 md:gap-16">
              <div className="flex flex-col gap-y-6 rounded-xl bg-card px-16 py-12 shadow-xl md:px-24 md:py-16">
                <div>
                  <h3>Consultant Fees</h3>
                  <span>Ideal for individual</span>
                </div>
                <div className="flex items-end font-semibold text-title">
                  <h1 className="font-roboto uppercase leading-none">
                    2000BDT
                  </h1>
                  <span>/</span> <span>mo</span>
                </div>
                <hr />
                <div className="space-y-6">
                  <span className="block font-bold">Includes:</span>
                  <ul className="space-y-6">
                    <li className="flex items-center gap-2">
                      <Check className="size-6 shrink-0 text-accent" />
                      <span className="font-semibold text-title">Skincare</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="size-6 shrink-0 text-accent" />
                      <span className="font-semibold text-title">
                        Hot Towel
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="size-6 shrink-0 text-accent" />
                      <span className="font-semibold text-title">
                        Hair care
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="mt-auto pt-8 text-center">
                  <Button>
                    <span>Book appointment</span>{" "}
                    <ArrowUpRight className="size-4" />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-y-6 rounded-xl bg-card px-16 py-12 shadow-xl md:px-24 md:py-16">
                <div>
                  <h3>Consultant Fees</h3>
                  <span>Ideal for individual</span>
                </div>
                <div className="flex items-end font-semibold text-title">
                  <h1 className="font-roboto uppercase leading-none">
                    2000BDT
                  </h1>
                  <span>/</span> <span>mo</span>
                </div>
                <hr />
                <div className="space-y-6">
                  <span className="block font-bold">Includes:</span>
                  <ul className="space-y-6">
                    <li className="flex items-center gap-2">
                      <Check className="size-6 shrink-0 text-accent" />
                      <span className="font-semibold text-title">
                        Flower Bath
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="size-6 shrink-0 text-accent" />
                      <span className="font-semibold text-title">Cleanser</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="size-6 shrink-0 text-accent" />
                      <span className="font-semibold text-title">Skincare</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="size-6 shrink-0 text-accent" />
                      <span className="font-semibold text-title">
                        Hot Towel
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="size-6 shrink-0 text-accent" />
                      <span className="font-semibold text-title">Massage</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-auto pt-8 text-center">
                  <Button>
                    <span>Book appointment</span>{" "}
                    <ArrowUpRight className="size-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlanSection;
