import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

const ServiceCard = ({ item, className }) => {
  const { title, description, image } = item;
  return (
    <div>
      <div
        className={cn("relative h-[32rem] w-full rounded-xl shadow", className)}
      >
        <img
          src={image}
          className="size-full rounded-xl object-cover object-center"
        />
        <div className="absolute inset-0 z-10 flex items-end rounded-xl bg-gradient-to-t from-black/85 via-black/15 to-black/15">
          <div className="space-y-4 px-4 py-4">
            <h3 className="dark font-playfair font-black">{title}</h3>
            <p className="dark text-foreground">{description}</p>
            <div className="flex items-center justify-between gap-4">
              <Button
                className="dark text-title underline"
                variant="none"
                size="none"
              >
                View Details
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
