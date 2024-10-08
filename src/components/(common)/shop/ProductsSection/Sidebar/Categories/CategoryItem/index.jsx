import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { bn } from "@/lib/enTobn.js";
import { useDispatch, useSelector } from "react-redux";
import {
  SetShopFilterCategory,
  SetShopFilterSubCategory,
} from "@/redux/slices/filter/shopSlice.js";
import SubItem from "@/components/(common)/shop/ProductsSection/Sidebar/Categories/SubItem/index.jsx";

const CategoryItem = ({ item, lang }) => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.shop_filter);
  const { _id, name, name_bn, total, sub_categories } = item;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="text-sm">
      {!sub_categories?.length > 0 && (
        <label className="flex cursor-pointer items-center justify-between px-4 py-1">
          <div className="flex items-center gap-2">
            <input
              className="radio peer"
              onChange={(e) => {
                dispatch(SetShopFilterCategory(e.target.value));
                dispatch(SetShopFilterSubCategory(""));
              }}
              value={_id}
              checked={category === _id}
              type="checkbox"
            />
            <span className="capitalize peer-checked:font-semibold">
              {lang === "en" ? name : name_bn}
            </span>
          </div>
          {total > 0 && (
            <span className="text-xs text-muted-foreground">
              ({lang === "en" ? total : bn.engToNumber(total)})
            </span>
          )}
        </label>
      )}
      {sub_categories?.length > 0 && (
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
                  onChange={(e) =>
                    dispatch(SetShopFilterCategory(e.target.value))
                  }
                  value={_id}
                  checked={category === _id}
                  // checked={isOpen}
                />
                <span className="capitalize peer-checked:font-semibold">
                  {lang === "en" ? name : name_bn}
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
              {sub_categories?.map((item, i) => (
                <SubItem key={i} lang={lang} item={item} c={_id} />
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

export default CategoryItem;
