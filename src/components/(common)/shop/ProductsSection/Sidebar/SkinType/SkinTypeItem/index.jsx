import { useDispatch, useSelector } from "react-redux";
import { SetShopFilterSkinType } from "@/redux/slices/filter/shopSlice.js";

const SkinTypeItem = ({ item, lang }) => {
  const dispatch = useDispatch();
  const { skin_type } = useSelector((state) => state.shop_filter);
  const { _id, name, name_bn, total } = item;
  return (
    <li className="text-sm">
      <label className="flex cursor-pointer items-center justify-between px-4 py-1">
        <div className="flex items-center gap-2">
          <input
            className="radio peer"
            value={_id}
            checked={skin_type === _id}
            onChange={(e) => dispatch(SetShopFilterSkinType(e.target.value))}
            type="checkbox"
          />
          <span className="capitalize peer-checked:font-semibold">
            {lang === "en" ? name : name_bn}
          </span>
        </div>
        {total > 0 && (
          <span className="text-xs text-muted-foreground">({total})</span>
        )}
      </label>
    </li>
  );
};

export default SkinTypeItem;
