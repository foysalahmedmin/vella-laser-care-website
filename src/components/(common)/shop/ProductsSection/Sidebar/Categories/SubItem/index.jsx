import React from "react";
import {
  SetShopFilterCategory,
  SetShopFilterSubCategory,
} from "@/redux/slices/filter/shopSlice.js";
import { bn } from "@/lib/enTobn.js";
import { useDispatch, useSelector } from "react-redux";

const SubItem = ({ item, lang, c }) => {
  const dispatch = useDispatch();
  const { sub_category } = useSelector((state) => state.shop_filter);
  const { _id, name, name_bn, total, sub_categories } = item;
  return (
    <li className="text-sm">
      <label className="flex cursor-pointer items-center justify-between px-4 py-1">
        <div className="flex items-center gap-2">
          <input
            className="radio peer"
            onChange={(e) => {
              dispatch(SetShopFilterCategory(c));
              dispatch(SetShopFilterSubCategory(e.target.value));
            }}
            value={_id}
            checked={sub_category === _id}
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
    </li>
  );
};

export default SubItem;
