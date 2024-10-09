import { urls } from "@/api/urls.js";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ lang, item, variant = "default", className }) => {
  const navigate = useNavigate();
  const { name, name_bn, short_description, short_description_bn, image } =
    item;
  return (
    <>
      {variant === "default" && (
        <div
          className={cn(
            "relative h-[32rem] w-full rounded-xl shadow",
            className,
          )}
        >
          <img
            src={`${urls?.service_header}/${image}`}
            alt={name}
            className="size-full rounded-xl object-cover object-center"
          />
          <div className="absolute inset-0 z-10 flex items-end rounded-xl bg-gradient-to-t from-black/85 via-black/15 to-black/15">
            <div className="space-y-4 px-6 py-6">
              <h3 className="dark font-playfair font-black">
                {lang === "en" ? name : name_bn}
              </h3>
              <p className="dark text-foreground">
                {lang === "en" ? short_description : short_description_bn}
              </p>
              <div className="flex items-center justify-between gap-4">
                <Button className="dark w-full text-sm">
                  <span>{lang === "en" ? "Book Now" : "বিস্তারিত দেখুন"}</span>
                  <ArrowUpRight className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      {variant === "home" && (
        <div
          className={cn(
            "relative h-[32rem] w-full rounded-xl shadow",
            className,
          )}
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
                  onClick={() => navigate(`/service/${item?._id}`)}
                >
                  {lang === "en" ? "View Details" : "বিস্তারিত দেখুন"}
                </Button>
                <Button
                  className="dark size-6 rounded-full border-foreground text-title"
                  variant="outline"
                  size="icon-sm"
                  onClick={() => navigate(`/service/${item?._id}`)}
                >
                  <ChevronRight strokeWidth={1} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceCard;
