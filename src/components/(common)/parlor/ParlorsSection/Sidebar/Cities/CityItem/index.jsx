import { useDispatch, useSelector } from "react-redux";
import { SetParlorFilterCity } from "@/redux/slices/filter/parlorSlice.js";

const CityItem = ({ item, lang }) => {
  const dispatch = useDispatch();
  const { city } = useSelector((state) => state.parlor_filter);
  const { _id, name, name_bn, total } = item;
  return (
    <li className="text-sm">
      <label className="flex cursor-pointer items-center justify-between px-4 py-1">
        <div className="flex items-center gap-2">
          <input
            className="radio peer"
            value={_id}
            checked={city === _id}
            onChange={(e) => {
              if (city === _id) {
                dispatch(SetParlorFilterCity(""));
              } else {
                dispatch(SetParlorFilterCity(e.target.value));
              }
            }}
            type="checkbox"
          />
          <span className="capitalize peer-checked:font-semibold">
            {lang === "en" ? name : name_bn}
          </span>
        </div>
        <span className="text-xs text-muted-foreground">({total || 10})</span>
      </label>
    </li>
  );
};

export default CityItem;
