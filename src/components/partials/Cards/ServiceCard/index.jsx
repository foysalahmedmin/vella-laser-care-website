import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { urls } from "@/api/urls.js";

const ServiceCard = ({ lang, item, className }) => {
  const { name, name_bn, short_description, short_description_bn, image } =
    item;
  return (
    <div>
      <div
        className={cn("relative h-[32rem] w-full rounded-xl shadow", className)}
      >
        <img
          src={`${urls?.service_header}/${image}`}
          alt={name}
          className="size-full rounded-xl object-cover object-center"
        />
        <div className="absolute inset-0 z-10 flex items-end rounded-xl bg-gradient-to-t from-black/85 via-black/15 to-black/15">
          <div className="space-y-4 px-4 py-4">
            <h3 className="dark font-playfair font-black">
              {lang === "en" ? name : name_bn}
            </h3>
            <p className="dark text-foreground">
              {lang === "en" ? short_description : short_description_bn}
            </p>
            <div className="flex items-center justify-between gap-4">
              <Button
                className="dark text-title underline"
                variant="none"
                size="none"
              >
                {lang === "en" ? "View Details" : "বিস্তারিত দেখুন"}
              </Button>
              <Button
                className="dark size-6 rounded-full border-foreground text-title"
                variant="outline"
                size="icon-sm"
              >
                <ChevronRight strokeWidth={1} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
