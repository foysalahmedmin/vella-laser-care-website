import { skinTypes } from "@/assets/data/skin-types";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import SkinTypeItem from "./SkinTypeItem";

const SkinType = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={cn("accordion", className, {
        open: isOpen,
      })}
    >
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center justify-between px-4">
          <strong className="font-roboto uppercase">BY SKIN TYPE</strong>
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
          {skinTypes?.map((item, i) => (
            <SkinTypeItem key={i} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkinType;
