import { urls } from "@/api/urls.js";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, MapPin } from "lucide-react";

const ParlorCard = ({ item, lang }) => {
  const { name, banner, address, tags, description, description_bn } = item;
  return (
    <div className="overflow-hidden rounded-xl bg-card shadow-custom-1">
      <div className="h-60 w-full">
        <img
          src={`${urls?.parlor_banner}/${banner}`}
          alt={name}
          className="size-full object-cover object-center"
        />
      </div>
      <div className="space-y-4 p-6">
        <ul className="flex flex-wrap items-center gap-2">
          {tags?.map((tag, index) => (
            <li
              key={index}
              className="rounded bg-primary/15 px-2 py-1 text-xs font-semibold text-primary"
            >
              {lang === "en" ? tag?.name : tag?.name_bn}
            </li>
          ))}
        </ul>
        <div className="space-y-2">
          <h4 className="text-title/85">{name}</h4>
          <span className="flex items-center gap-2">
            <span className="inline-flex aspect-square size-4 items-center justify-center rounded-full border border-primary text-primary">
              <MapPin size={10} />
            </span>
            <span className="text-sm font-semibold">{address}</span>
          </span>
          {lang === "en" ? (
            <p className="font-semibold">
              {description.length > 100 ? (
                <span>{description.slice(0, 90)}...</span>
              ) : (
                <span>{description}</span>
              )}
            </p>
          ) : (
            <p className="font-semibold">
              {description_bn.length > 100 ? (
                <span>{description_bn.slice(0, 90)}...</span>
              ) : (
                <span>{description_bn}</span>
              )}
            </p>
          )}
        </div>
        <Button className="w-full text-sm">
          {lang === "en" ? "View Details" : "View Details"}
          <ArrowUpRight className="size-4" />
        </Button>
      </div>
    </div>
  );
};

export default ParlorCard;
