import { Button } from "@/components/ui/Button";
import { MapPin } from "lucide-react";

const ParlorCard = ({ item }) => {
  const { name, image, location, services, description } = item;
  return (
    <div className="shadow-custom-1 overflow-hidden rounded-xl bg-card">
      <div className="h-60 w-full">
        <img
          src={image}
          alt={name}
          className="size-full object-cover object-center"
        />
      </div>
      <div className="space-y-4 p-6">
        <ul className="flex flex-wrap items-center gap-2">
          {services?.map((service, index) => (
            <li
              key={index}
              className="rounded bg-primary/15 px-2 py-1 text-xs font-semibold text-primary"
            >
              {service}
            </li>
          ))}
        </ul>
        <div className="space-y-2">
          <h4 className="text-foreground">{name}</h4>
          <span className="flex items-center gap-2">
            <span className="inline-flex aspect-square size-4 items-center justify-center rounded-full border border-primary text-primary">
              <MapPin size={10} />
            </span>
            <span className="text-sm font-semibold">{location}</span>
          </span>
          <p className="font-semibold">
            {description.length > 100 ? (
              <span>{description.slice(0, 90)}...</span>
            ) : (
              <span>{description}</span>
            )}
          </p>
        </div>
        <Button className="w-full">View Details</Button>
      </div>
    </div>
  );
};

export default ParlorCard;
