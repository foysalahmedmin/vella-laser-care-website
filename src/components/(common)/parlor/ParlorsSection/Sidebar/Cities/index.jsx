import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import CityItem from "./CityItem";
import { useQuery } from "@tanstack/react-query";
import { fetchFilteredCities } from "@/network/common/commonApis.js";

const Cities = ({ className, lang }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { data: cities } = useQuery({
    queryKey: ["filtered_cities"],
    queryFn: () => fetchFilteredCities(),
  });
  return (
    <div
      className={cn("accordion", className, {
        open: isOpen,
      })}
    >
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center justify-between px-4">
          <strong className="font-roboto uppercase">
            {lang === "en" ? "CITY" : "CITY"}
          </strong>
          <ChevronRight
            className={cn(
              "size-4 shrink-0 rotate-90 transition-all duration-300",
              {
                "-rotate-90": isOpen,
              },
            )}
          />
        </div>
      </div>
      <div className="accordion-content">
        <ul className="pt-4">
          {cities?.map((item, i) => (
            <CityItem lang={lang} key={i} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cities;
