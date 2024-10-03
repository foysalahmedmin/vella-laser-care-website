import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const OurBenefitsSection = () => {
  return (
    <section className="md:pt-24">
      <section
        style={{
          backgroundImage: `url('/images/backgrounds/rectangle-background-2.png')`,
        }}
        className="w-full bg-cover bg-left-top bg-no-repeat pb-16 md:pb-24"
      >
        <div className="container">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative mt-8 md:-mt-24">
              <div className="relative aspect-[1/1] w-full overflow-hidden rounded-xl">
                <img
                  className="absolute right-0 top-0 z-10 size-full object-cover"
                  src="/images/service-details/our-benefits.png"
                  alt=""
                />
              </div>
            </div>
            <div className="space-y-4 pt-16 md:pt-24">
              <span className="block font-semibold text-primary">Why Us ?</span>
              <h1 className="text-4xl">Why Choose Us for Your Skincare</h1>
              <p className="font-semibold md:text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </p>
              <div className="pt-4">
                <Button>
                  <span>Register</span> <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default OurBenefitsSection;
