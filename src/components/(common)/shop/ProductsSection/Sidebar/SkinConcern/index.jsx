import { skinConcerns } from "@/assets/data/skin-concerns";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import SkinConcernItem from "./SkinConcernItem";

const SkinConcern = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={cn("accordion", className, {
        open: isOpen,
      })}
    >
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center justify-between px-4">
          <strong className="font-roboto uppercase">
            BY SKIN CONCERN/BENEFIT
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
          {skinConcerns?.map((item, i) => (
            <SkinConcernItem key={i} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkinConcern;
