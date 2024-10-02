import { BadgeCheckOutline } from "@/assets/svg/icons/Badge";
import { Button } from "@/components/ui/Button";
import { CalendarCheck } from "lucide-react";

const DescriptionSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-2 items-center gap-16">
          <div>
            <div className="relative aspect-square w-full max-w-xl">
              <img
                className="absolute right-0 top-0 z-10 h-5/6 w-7/12 rounded-full border-4 border-background object-cover md:border-8"
                src="/images/service-details/description-1.png"
                alt="description-1"
              />
              <img
                className="absolute bottom-0 left-0 h-5/6 w-7/12 rounded-full object-cover"
                src="/images/service-details/description-2.png"
                alt="description-3"
              />
            </div>
          </div>
          <div>
            <div className="space-y-4">
              <span className="block font-semibold text-primary">
                Description
              </span>
              <h1 className="text-4xl">
                Aesthetic Dreams Begin Here <br /> Visit Us Today
              </h1>
              <p className="font-semibold md:text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <ul className="flex items-center justify-between">
                <li className="flex items-center gap-1">
                  <BadgeCheckOutline className="size-6 text-primary" />
                  <span className="inline-block text-lg font-semibold text-title">
                    Illuminating Beauty
                  </span>
                </li>
                <li className="flex items-center gap-1">
                  <BadgeCheckOutline className="size-6 text-primary" />
                  <span className="inline-block text-lg font-semibold text-title">
                    Timeless Elegance
                  </span>
                </li>
                <li className="flex items-center gap-1">
                  <BadgeCheckOutline className="size-6 text-primary" />
                  <span className="inline-block text-lg font-semibold text-title">
                    Unique Glow
                  </span>
                </li>
              </ul>
              <div className="py-4">
                <Button>
                  <span>Book an appointment</span>
                  <CalendarCheck strokeWidth={3} className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection;
