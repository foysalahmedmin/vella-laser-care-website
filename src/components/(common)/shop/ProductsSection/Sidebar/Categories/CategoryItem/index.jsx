import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

const CategoryItem = ({ item }) => {
  const { name, total, categories } = item;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="text-sm">
      {!categories?.length > 0 && (
        <label className="flex cursor-pointer items-center justify-between px-4 py-1">
          <div className="flex items-center gap-2">
            <input className="radio peer" type="checkbox" />
            <span className="capitalize peer-checked:font-semibold">
              {name}
            </span>
          </div>
          {total && (
            <span className="text-xs text-muted-foreground">({total})</span>
          )}
        </label>
      )}
      {categories?.length > 0 && (
        <div
          className={cn("accordion group relative", {
            open: isOpen,
          })}
        >
          <div onClick={() => setIsOpen(!isOpen)}>
            <div className="relative flex cursor-pointer items-center justify-between px-4 py-1">
              <div className="flex items-center gap-[0.5em]">
                <input
                  className="radio peer"
                  type="checkbox"
                  checked={isOpen}
                />
                <span className="capitalize peer-checked:font-semibold">
                  {name}
                </span>
              </div>
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
          <div className="accordion-content pl-[1.5em]">
            <ul className="py-1">
              {categories?.map((item, i) => (
                <CategoryItem key={i} item={item} />
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

export default CategoryItem;
