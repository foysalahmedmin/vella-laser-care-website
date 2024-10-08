import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import CategoryItem from "./CategoryItem";
import { useQuery } from "@tanstack/react-query";
import { fetchCategoryFilters } from "@/pages/(common)/ShopPage/shopApis.js";

const Categories = ({ className, lang }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { data } = useQuery({
    queryKey: ["category_filters"],
    queryFn: () => fetchCategoryFilters(),
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
            {lang === "en" ? "Categories" : "Categories"}
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
            <CategoryItem lang={lang} key={i} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
