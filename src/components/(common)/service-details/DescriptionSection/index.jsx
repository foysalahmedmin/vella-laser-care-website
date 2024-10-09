import { BadgeCheckOutline } from "@/assets/svg/icons/Badge";
import { Button } from "@/components/ui/Button";
import { CalendarCheck } from "lucide-react";
import { urls } from "@/api/urls.js";

const DescriptionSection = ({ info, lang }) => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-2 items-center gap-16">
          <div>
            <div className="relative aspect-square w-full max-w-xl">
              <img
                className="absolute right-0 top-0 z-10 h-5/6 w-7/12 rounded-full border-4 border-background object-cover md:border-8"
                src={`${urls?.service_header}/${info?.header?.image_1}`}
                alt="description-1"
              />
              <img
                className="absolute bottom-0 left-0 h-5/6 w-7/12 rounded-full object-cover"
                src={`${urls?.service_header}/${info?.header?.image_2}`}
                alt="description-3"
              />
            </div>
          </div>
          <div>
            <div className="space-y-4">
              <span className="block font-semibold text-primary">
                {lang === "en" ? "Description" : "Description"}
              </span>
              <h1 className="text-4xl">
                {lang === "en" ? info?.header?.title : info?.header?.title_bn}
              </h1>
              <p className="font-semibold md:text-lg">
                {lang === "en"
                  ? info?.header?.description
                  : info?.header?.description_bn}
              </p>
              <ul className="flex items-center justify-between">
                {info?.header?.tags?.map((tag, index) => (
                  <li key={index} className="flex items-center gap-1">
                    <BadgeCheckOutline className="size-6 text-primary" />
                    <span className="inline-block text-lg font-semibold text-title">
                      {lang === "en" ? tag?.name : tag?.name_bn}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="py-4">
                <Button>
                  <span>
                    {lang === "en"
                      ? "Book an appointment"
                      : "Book an appointment"}
                  </span>
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
