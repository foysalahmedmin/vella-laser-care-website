import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import SkinConcernItem from "./SkinConcernItem";
import { useQuery } from "@tanstack/react-query";
import { fetchFilteredConcerns } from "@/pages/(common)/ShopPage/shopApis.js";

const SkinConcern = ({ className, lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useQuery({
    queryKey: ["filtered_skin_concerns"],
    queryFn: () => fetchFilteredConcerns(),
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
            {lang === "en"
              ? "BY SKIN CONCERN/BENEFIT"
              : "BY SKIN CONCERN/BENEFIT"}
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
          {data?.map((item, i) => (
            <SkinConcernItem lang={lang} key={i} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkinConcern;
