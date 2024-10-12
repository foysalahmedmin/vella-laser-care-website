import { Button } from "@/components/ui/Button";
import { CalendarCheck } from "lucide-react";

const FeatureSection = () => {
  return (
    <section className="pt-16 md:pt-0">
      <div className="container">
        <div className="md:-mt-24">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="relative h-60 w-full overflow-hidden rounded-2xl shadow-custom-1">
              <img
                className="size-full object-cover object-center"
                src="/images/user-dashboard/feature-3.png"
                alt="feature-1"
              />
              <div className="absolute inset-0 grid place-items-center gap-6 bg-gradient-to-t from-black/85 to-transparent px-8 py-4 md:px-12">
                <div className="w-full">
                  <span className="mb-2 inline-flex overflow-hidden rounded bg-light">
                    <span className="inline-block rounded bg-primary/15 px-2 text-sm font-medium text-primary">
                      Service
                    </span>
                  </span>
                  <h2 className="dark text-title">What We Treat In Centre?</h2>
                  <Button className="mt-4">
                    <span>Book an appointment</span>
                    <CalendarCheck className="size-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative h-60 w-full overflow-hidden rounded-2xl shadow-custom-1">
              <img
                className="size-full object-cover object-center"
                src="/images/user-dashboard/feature-2.png"
                alt="feature-1"
              />
              <div className="absolute inset-0 grid place-items-center gap-6 bg-gradient-to-t from-black/85 to-transparent px-8 py-4 md:px-12">
                <div className="w-full">
                  <span className="mb-2 inline-flex overflow-hidden rounded bg-light">
                    <span className="inline-block rounded bg-primary/15 px-2 text-sm font-medium text-primary">
                      Doctor
                    </span>
                  </span>
                  <h2 className="dark text-title">Need a Dermatologist?</h2>
                  <Button className="mt-4">
                    <span>Book an appointment</span>
                    <CalendarCheck className="size-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative h-60 w-full overflow-hidden rounded-2xl shadow-custom-1">
              <img
                className="size-full object-cover object-center"
                src="/images/user-dashboard/feature-2.png"
                alt="feature-1"
              />
              <div className="absolute inset-0 grid place-items-center gap-6 bg-gradient-to-t from-black/85 to-transparent px-8 py-4 md:px-12">
                <div className="w-full">
                  <span className="mb-2 inline-flex overflow-hidden rounded bg-light">
                    <span className="inline-block rounded bg-primary/15 px-2 text-sm font-medium text-primary">
                      Parlor
                    </span>
                  </span>
                  <h2 className="dark text-title">
                    Seeking for Exclusive Parlor treatment?
                  </h2>
                  <Button className="mt-4">
                    <span>Book an appointment</span>
                    <CalendarCheck className="size-4" />
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

export default FeatureSection;
