import { Button } from "@/components/ui/Button";
import { SectionTitle, Subtitle, Title } from "@/components/ui/SectionTitle";
import { ArrowUpRight } from "lucide-react";
import { bn } from "@/lib/enTobn.js";
import ServiceBookModal from "@/components/partials/Modals/ServiceBookModal/index.jsx";
import { useState } from "react";

const PricingPlanSection = ({ info, lang }) => {
  const [isOpen, setIsOpen] = useState(false);
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
              <Subtitle>
                {lang === "en" ? "Pricing Plan" : "Pricing Plan"}
              </Subtitle>
              <Title>
                {lang === "en" ? "Our Pricing Plan" : "Our Pricing Plan"}
              </Title>
            </SectionTitle>
            <div className="grid gap-8 md:grid-cols-2 md:gap-16">
              <div className="flex flex-col gap-y-6 rounded-xl bg-card px-16 py-12 shadow-xl md:px-24 md:py-16">
                <div>
                  <h3>
                    {lang === "en" ? "Consultant Fees" : "Consultant Fees"}
                  </h3>
                  <span>
                    {lang === "en"
                      ? "Ideal for individual consultant"
                      : "Ideal for individual"}
                  </span>
                </div>
                <div className="flex items-end font-semibold text-title">
                  <h1 className="font-roboto uppercase leading-none">
                    {lang === "en"
                      ? info?.consultant_charge
                      : bn.engToNumber(info?.consultant_charge)}
                    BDT
                  </h1>
                  <span>/</span> <span>per</span>
                </div>
                <hr />
                {/*<div className="space-y-6">*/}
                {/*  <span className="block font-bold">Includes:</span>*/}
                {/*  <ul className="space-y-6">*/}
                {/*    <li className="flex items-center gap-2">*/}
                {/*      <Check className="size-6 shrink-0 text-accent" />*/}
                {/*      <span className="font-semibold text-title">Skincare</span>*/}
                {/*    </li>*/}
                {/*    <li className="flex items-center gap-2">*/}
                {/*      <Check className="size-6 shrink-0 text-accent" />*/}
                {/*      <span className="font-semibold text-title">*/}
                {/*        Hot Towel*/}
                {/*      </span>*/}
                {/*    </li>*/}
                {/*    <li className="flex items-center gap-2">*/}
                {/*      <Check className="size-6 shrink-0 text-accent" />*/}
                {/*      <span className="font-semibold text-title">*/}
                {/*        Hair care*/}
                {/*      </span>*/}
                {/*    </li>*/}
                {/*  </ul>*/}
                {/*</div>*/}
                <div className="mt-auto pt-8 text-center">
                  <Button onClick={() => setIsOpen(true)}>
                    <span>
                      {lang === "en" ? "Book appointment" : "Book appointment"}
                    </span>{" "}
                    <ArrowUpRight className="size-4" />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-y-6 rounded-xl bg-card px-16 py-12 shadow-xl md:px-24 md:py-16">
                <div>
                  <h3>{lang === "en" ? "Service Charge" : "Service Charge"}</h3>
                  <span>
                    {lang === "en"
                      ? "Ideal for full treatment"
                      : "Ideal for full treatment"}
                  </span>
                </div>
                <div className="flex items-end font-semibold text-title">
                  <h1 className="font-roboto uppercase leading-none">
                    {lang === "en"
                      ? info?.service_charge
                      : bn.engToNumber(info?.service_charge)}
                    BDT
                  </h1>
                  <span>/</span> <span>per</span>
                </div>
                <hr />
                {/*<div className="space-y-6">*/}
                {/*  <span className="block font-bold">Includes:</span>*/}
                {/*  <ul className="space-y-6">*/}
                {/*    <li className="flex items-center gap-2">*/}
                {/*      <Check className="size-6 shrink-0 text-accent" />*/}
                {/*      <span className="font-semibold text-title">*/}
                {/*        Flower Bath*/}
                {/*      </span>*/}
                {/*    </li>*/}
                {/*    <li className="flex items-center gap-2">*/}
                {/*      <Check className="size-6 shrink-0 text-accent" />*/}
                {/*      <span className="font-semibold text-title">Cleanser</span>*/}
                {/*    </li>*/}
                {/*    <li className="flex items-center gap-2">*/}
                {/*      <Check className="size-6 shrink-0 text-accent" />*/}
                {/*      <span className="font-semibold text-title">Skincare</span>*/}
                {/*    </li>*/}
                {/*    <li className="flex items-center gap-2">*/}
                {/*      <Check className="size-6 shrink-0 text-accent" />*/}
                {/*      <span className="font-semibold text-title">*/}
                {/*        Hot Towel*/}
                {/*      </span>*/}
                {/*    </li>*/}
                {/*    <li className="flex items-center gap-2">*/}
                {/*      <Check className="size-6 shrink-0 text-accent" />*/}
                {/*      <span className="font-semibold text-title">Massage</span>*/}
                {/*    </li>*/}
                {/*  </ul>*/}
                {/*</div>*/}
                <div className="mt-auto pt-8 text-center">
                  <Button onClick={() => setIsOpen(true)}>
                    <span>Book appointment</span>{" "}
                    <ArrowUpRight className="size-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServiceBookModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        service={info?._id}
        lang={lang}
      />
    </section>
  );
};

export default PricingPlanSection;
