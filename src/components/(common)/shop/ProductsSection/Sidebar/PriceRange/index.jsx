import {
  MaxInput,
  MinInput,
  RangeSlider,
  RangeSliderInput,
} from "@/components/ui/RangeSlider";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

const PriceRange = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={cn("accordion", className, {
        open: isOpen,
      })}
    >
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center justify-between px-4">
          <strong className="font-roboto uppercase">Filter by price</strong>
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
        <div className="px-4 pt-4">
          <RangeSlider>
            <RangeSliderInput className="text-[0.5rem]" />
            <div className="mt-4 flex items-center gap-2 md:gap-4">
              <MinInput className="text-xs" />
              <hr className="w-12 border-2" />
              <MaxInput className="text-xs" />
            </div>
          </RangeSlider>
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
